import { defineStore } from "pinia";
export const authStore = defineStore("auth", {
  state: () => ({
    user: null,
    refreshToken: null,
    token: null,
    tokenExpiresAt: null,
    refreshTokenExpiresAt: null,
  }),
  actions: {
      /**
       * Save login data in the store
       * @param user
       * @param tokens
       */
    login(user, tokens) {
      this.user = user;

      this.tokenExpiresAt = tokens.access.token;
      this.token = tokens.access.token;

      this.refreshToken = tokens.refresh.refreshToken;
      this.refreshTokenExpiresAt = tokens.refresh.token;
    },
      /**
       * Remove login data from the store
       */
    logout() {
        this.user = null;
        this.token = null;
        this.tokenExpiresAt = null;
        this.refreshToken = null;
        this.refreshTokenExpiresAt = null;
    }
  },
});
