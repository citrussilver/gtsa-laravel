<template>
  <div>
      <div>
        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow">
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Register for free</h2>
        <p class="mt-2 text-center text-sm text-gray-600">
          Or
          <router-link :to="{name: 'Login'}" class="font-medium text-indigo-600 hover:text-indigo-500">
            Login to your account
          </router-link>
        </p>
      </div>
      <form class="mt-8 space-y-6" @submit="register">
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="fullname" class="sr-only">Full Name</label>
            <input id="fullname" name="name" type="text" autocomplete="name" required 
              v-model="user.name"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              placeholder="Full Name"
            >
          </div>
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autocomplete="email" required 
              v-model="user.email"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              placeholder="Email address"
            >
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input id="password" name="password" type="password" autocomplete="current-password" required  
              v-model="user.password"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              placeholder="Password"
            >
          </div>
          <div>
            <label for="password_confirmation" class="sr-only">Password Confirmation</label>
            <input id="password_confirmation" name="password_confirmation" type="password" autocomplete="current-password_confirmation" required 
              v-model="user.password_confirmation"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" 
              placeholder="Confirmation Password"
            >
          </div>
        </div>

        <div class="flex items-center npnpmustify-between">
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"> Remember me </label>
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
              </svg>
            </span>
            Register
          </button>
        </div>
      </form>
  </div>
</template>

<script setup>
import { LockClosedIcon } from '@heroicons/vue/solid'
import store from '../store'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter();

const user = {
  name: '',
  email: '',
  password: '',
  password_confirmation: ''
};

const errors = ref({})

function register(ev) {
  ev.preventDefault()
  store
    .dispatch('register', user)
    .then(() => {
      router.push({
        name: 'Dashboard',
      })
    })
}

</script>