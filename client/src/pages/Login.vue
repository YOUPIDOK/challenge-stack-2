<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6"  @submit.prevent="handleSubmit">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Addresse E-mail</label>
          <div class="mt-2">
            <input v-model="email" id="email" name="email" type="email" autocomplete="email" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
          </div>
          <div class="mt-2">
            <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required="" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600">Connexion</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue';
import { authStore} from '../stores/auth';
import {login} from '../api/authApi';
import {useNotification} from "@kyvg/vue3-notification";

export default defineComponent({
  name: 'Login',
  setup() {
    const store = authStore();
    const email = ref('');
    const password = ref('');

    return {
      store,
      email,
      password
    };
  },
  methods: {
    async handleSubmit() {
      const res = await login(this.email, this.password);

      if (res.code !== undefined) {
        const { notify } = useNotification()
        notify({
          type: "error",
          title: "Le mot de passe ou l'adresse e-mail est incorrecte",
        });
      } else {
        this.store.login(res.user, res.tokens); // Save login data
        this.$router.push('/')
      }
    },
    resetForm() {
      this.email = '';
      this.password = '';
    },
  }
});
</script>
