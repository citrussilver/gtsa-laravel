<template>
  <PageComponent>
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Surveys</h1>
        <TButton color="green" :to="{ name: 'SurveyCreate' }">
          <PlusIcon class="w-5 h-5" />
          Add new Survey
        </TButton>
      </div>
    </template>
    <div v-if="surveys.loading" class="flex justify-center">Loading...</div>
    <div v-else-if="surveys.data.length">
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        <SurveyListItem
          v-for="(survey, ind) in surveys.data"
          :key="survey.id"
          :survey="survey"
          class="opacity-0 animate-fade-in-down"
          :style="{ animationDelay: `${ind * 0.1}s` }"
          @delete="deleteSurvey(survey)"
        />
      </div>
      <div class="flex justify-center mt-5">
        <nav
          class="relative z-0 inline-flex justify-center rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
          <a
            v-for="(link, i) of surveys.links"
            :key="i"
            :disabled="!link.url"
            href="#"
            @click="getForPage($event, link)"
            aria-current="page"
            class="relative inline-flex items-center px-4 py-2 border text-sm font-medium whitespace-nowrap"
            :class="[
              link.active
                ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
              i === 0 ? 'rounded-l-md bg-gray-100 text-gray-700' : '',
              i === surveys.links.length - 1 ? 'rounded-r-md' : '',
            ]"
            v-html="link.label"
          >
          </a>
        </nav>
      </div>
    </div>
    <div v-else class="text-gray-600 text-center py-16">
      Your don't have surveys yet
    </div>
  </PageComponent>
</template>

<script setup>
import { v4 as uuidv4 } from "uuid";
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { SaveIcon, TrashIcon, ExternalLinkIcon } from '@heroicons/vue/solid'
import store from "../store";
import PageComponent from "../components/PageComponent.vue";
import QuestionEditor from "../components/editor/QuestionEditor.vue";
import TButton from "../components/core/TButton.vue";
const router = useRouter();
const route = useRoute();
// Get survey loading state, which only changes when we fetch survey from backend
const surveyLoading = computed(() => store.state.currentSurvey.loading);
// Create empty survey
let model = ref({
  title: "",
  slug: "",
  status: false,
  description: null,
  image: null,
  image_url: null,
  expire_date: null,
  questions: [],
});
// Watch to current survey data change and when this happens we update local model
watch(
  () => store.state.currentSurvey.data,
  (newVal, oldVal) => {
    model.value = {
      ...JSON.parse(JSON.stringify(newVal)),
      status: !!newVal.status,
    };
  }
);
// If the current component is rendered on survey update route we make a request to fetch survey
if (route.params.id) {
  store.dispatch("getSurvey", route.params.id);
}
function onImageChoose(ev) {
  const file = ev.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    // The field to send on backend and apply validations
    model.value.image = reader.result;
    // The field to display here
    model.value.image_url = reader.result;
    ev.target.value = "";
  };
  reader.readAsDataURL(file);
}
function addQuestion(index) {
  const newQuestion = {
    id: uuidv4(),
    type: "text",
    question: "",
    description: null,
    data: {},
  };
  model.value.questions.splice(index, 0, newQuestion);
}
function deleteQuestion(question) {
  model.value.questions = model.value.questions.filter((q) => q !== question);
}
function questionChange(question) {
  // Important to explicitelly assign question.data.options, because otherwise it is a Proxy object
  // and it is lost in JSON.stringify()
  if (question.data.options) {
    question.data.options = [...question.data.options];
  }
  model.value.questions = model.value.questions.map((q) => {
    if (q.id === question.id) {
      return JSON.parse(JSON.stringify(question));
    }
    return q;
  });
}
/**
 * Create or update survey
 */
function saveSurvey() {
  let action = "created";
  if (model.value.id) {
    action = "updated";
  }
  store.dispatch("saveSurvey", { ...model.value }).then(({ data }) => {
    store.commit("notify", {
      type: "success",
      message: "The survey was successfully " + action,
    });
    router.push({
      name: "SurveyView",
      params: { id: data.data.id },
    });
  });
}
function deleteSurvey() {
  if (
    confirm(
      `Are you sure you want to delete this survey? Operation can't be undone!!`
    )
  ) {
    store.dispatch("deleteSurvey", model.value.id).then(() => {
      router.push({
        name: "Surveys",
      });
    });
  }
}
</script>

<style></style>