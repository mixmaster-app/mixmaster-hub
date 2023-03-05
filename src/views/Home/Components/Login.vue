<template>
  <v-card class="pa-6 fill-height fill-width">
    <v-img
      class="ma-2 rounded-lg"
      height="96"
      contain
      src="@/assets/logo.png"
      alt="MMFR1-Logo"
    ></v-img>
    <v-row>
      <v-col cols="12">
        <v-text-field
          type="text"
          v-model="login"
          label="Login"
          @change="saveUserInfos"
          required
        />
        <v-text-field
          type="password"
          v-model="password"
          label="Password"
          @change="saveUserInfos"
          required
        />
      </v-col>
    </v-row>
    <v-row class="my-0">
      <v-col cols="6">
        <v-checkbox
          type="checkbox"
          v-model="savePassword"
          label="Se souvenir de moi?"
          @change="saveUserInfos"
        />
      </v-col>
      <v-col cols="6">
        <v-checkbox
          type="checkbox"
          v-model="fullScreen"
          label="Plein écran"
          @change="saveUserInfos"
        />
      </v-col>
    </v-row>
    <v-btn
      @click="connect"
      color="primary"
      :disabled="!(login && password)"
      v-if="allowAuthentication && path"
    >
      connect
    </v-btn>
    <v-alert color="orange" type="warning" v-else>
      Merci de configurer le chemin de <u>Mixmaster.Exe</u> dans les paramètres
    </v-alert>
    <v-alert color="red" type="error" v-if="errorMessage">
      {{ errorMessage }}
    </v-alert>
  </v-card>
</template>

<script>
import fs from "fs";
import config from "@/services/Config.js";

const exec = require("child_process").exec;

export default {
  name: "Login",
  data() {
    return {
      allowAuthentication: false,
      path: undefined,
      login: undefined,
      password: undefined,
      fullScreen: false,
      savePassword: false,
      errorMessage: undefined
    };
  },
  methods: {
    execute(command, callback) {
      exec(command, (error, stdout) => {
        if (error) {
          this.errorMessage = "Erreur d'authentification";
        }
        callback(stdout);
      });
    },
    saveUserInfos() {
      this.$store.commit("updateUserInfos", {
        path: this.path,
        login: this.login,
        password: this.password,
        savePassword: this.savePassword,
        fullScreen: this.fullScreen
      });
    },
    connect() {
      this.saveUserInfos();

      const command = ` cd "${this.path}" && start MixMaster.exe 4.644700 ${
        config.Mixmaster.ip
      } 23500 ${
        this.fullScreen ? "1" : "0" + " " + this.login + " " + this.password
      } 0 SEEDC `;
      this.execute(command, data => {
        console.log(data);
      });
    }
  },
  mounted() {
    if (this.$store.state.userInfos.exe == "") {
      return;
    }
    this.allowAuthentication = true;
    this.path = this.$store.state.userInfos.exe;
    fs.access(this.path ?? "", fs.constants.X_OK, err => {
      if (err) {
        this.path = undefined;
      }
    });
    this.login = this.$store.state.userInfos.login;
    this.password = this.$store.state.userInfos.password;
    if (this.password) {
      this.savePassword = true;
    }
  }
};
</script>
