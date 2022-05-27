<template>
    <PageComponent>
      <template v-slot:header>
        <div class="flex justify-between items-center">
          <h1 class="text-3xl font-bold text-gray-900">Surveys</h1>
          <router-link
            :to="{ name: 'SurveyCreate' }"
            class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600"
          >
            Add new survey
          </router-link>
        </div>
      </template>
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
        <div
          v-for="survey in surveys"
          :key="survey.id"
          class="flex flex-col py-6 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]"
        >
          <img :src="survey.image" alt="" class="w-full h-48 object-cover" />
          <h4 class="mt-4 text-lg font-bold">{{ survey.title }}</h4>
          <div v-html="survey.description" class="overflow-hidden flex-1"></div>
        </div>
      </div>
    </PageComponent>
</template>

<script setup>
import store from '../store'
import { computed } from 'vue'
import PageComponent from '../components/PageComponent.vue'

const surveys = computed(() => store.state.surveys);

</script>

<style>

</style>