<template>
  <div class="sign-in-page">
    <div class="sign-in-form">
      <span v-if="errorMessage" class="error-message">{{ errorMessage }}</span>
      <label class="input-label">Email Address</label>
      <input class="input" v-model="email" type="email" />
      <label class="input-label">Password</label>
      <input class="input" v-model="password" type="password" />
      <button @click="onLogin" class="button green-button">
        <span>Войти</span>
      </button>
      <router-link to="/sign-up" @click.stop class="button blue-button">
        <span>Зарегистрироваться</span>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import authUser from '@/modules/authModule'

export default defineComponent({
  setup () {
    const { signInUser } = authUser()
    return { signInUser }
  },

  data () {
    return {
      email: '',
      password: '',
      errorMessage: ''
    }
  },

  methods: {
    async onLogin () {
      const result = await this.signInUser({ email: this.email, password: this.password, lastName: '', firstName: '' })
      if (result && result.id) {
        this.$router.push('/devices')
      } else {
        this.errorMessage = result.message
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.sign-in-page {
  display: flex;
  align-items: center;
  height: 100%;

  .sign-in-form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .error-message {
      color: #c95959;
      margin-bottom: 15px;
    }

    .input {
      height: 30px;
      width: 220px;
      margin-bottom: 25px;
    }

    .button {
      height: 40px;
      width: 220px;

      span {
        color: #fff;
        font-size: 15px;
        text-transform: uppercase;
        font-weight: 600;
        line-height: 140%;
        letter-spacing: 0.8px;
      }
    }

    .green-button {
      margin-bottom: 18px;
    }

    .blue-button {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
