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
    login(user, tokens) {
      this.user = user;

      this.tokenExpiresAt = tokens.access.token;
      this.token = tokens.access.token;

      this.refreshToken = tokens.refresh.refreshToken;
      this.refreshTokenExpiresAt = tokens.refresh.token;
    },
    logout() {
        this.user = null;
        this.token = null;
        this.tokenExpiresAt = null;
        this.refreshToken = null;
        this.refreshTokenExpiresAt = null;
    }
  },
});
