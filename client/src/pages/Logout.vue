<template>
</template>

<script>
import {defineComponent} from 'vue';
import { authStore} from '../stores/auth';
import {useRouter} from "vue-router";

export default defineComponent({
  name: 'Logout',
  setup() {
    authStore().logout();       // Clear user data
    const router = useRouter()

    router.push('/');

    return {};
  },
});
</script>
