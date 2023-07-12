<template>
</template>

<script>
import {defineComponent} from 'vue';
import { authStore} from '../stores/auth';
import {useRouter} from "vue-router";

export default defineComponent({
  name: 'Logout',
  setup() {
    authStore().logout();
    const router = useRouter()

    router.push('/');

    return {};
  },
});
</script>
