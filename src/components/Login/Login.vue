<template>
  <v-container>
    <v-card class="pa-6">
      <v-row>
        <v-col cols="12">
          <v-text-field type="text" v-model="login" label="Login" required />
          <v-text-field
            type="password"
            v-model="password"
            label="Password"
            required
          />
        </v-col>
      </v-row>
      <v-row class="my-0">
        <v-col cols="6">
          <v-checkbox
            v-model="savePassword"
            label="Remember me?"
            type="checkbox"
          />
        </v-col>
        <v-col cols="6">
          <v-checkbox
            v-model="fullScreen"
            label="Full screen"
            type="checkbox"
          />
        </v-col>
      </v-row>
      <v-btn
        @click="connect"
        color="primary"
        v-if="allowAuthentication && path"
      >
        connect
      </v-btn>
      <v-alert color="orange" type="warning" v-else>
        Please Configure the path to your <u>Mixmaster.Exe</u> in Settings
      </v-alert>
      <v-alert color="red" type="error" v-if="errorMessage">
        {{ errorMessage }}
      </v-alert>
    </v-card>
  </v-container>
</template>

<script>
import fs from "fs";

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
          this.errorMessage = "Error while trying to authenticate yourself";
        }
        callback(stdout);
      });
    },
    connect() {
      localStorage.setItem("mixmaster_login", this.login);
      if (this.savePassword) {
        localStorage.setItem("mixmaster_password", this.password);
      }

      const command = ` cd "${
        this.path
      }" && start MixMaster.exe 4.644700 164.132.203.180 23500 ${
        this.fullScreen ? "1" : "0"
      } ${this.login} ${this.password} 0 SEEDC `;
      console.log(command);
      this.execute(command, data => {
        console.log(data);
      });
    }
  },
  mounted() {
    if (localStorage.getItem("mixmasterExe") == "") {
      return;
    }
    this.allowAuthentication = true;
    this.path = localStorage.getItem("mixmasterExe");
    fs.access(this.path, fs.constants.X_OK, err => {
      if (err) {
        this.path = undefined;
        localStorage.removeItem("mixmasterExe");
      }
    });
    this.login = localStorage.getItem("mixmaster_login");
    this.password = localStorage.getItem("mixmaster_password");
    if (this.password) {
      this.savePassword = true;
    }
  }
};
</script>
