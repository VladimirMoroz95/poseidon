<template>
  <div class="sign-up-page">
    <div class="sign-up-form">
      <label class="input-label">Email Address</label>
      <input class="input" v-model="email" type="email" />
      <label class="input-label">Password</label>
      <input class="input" v-model="password" type="password" />
      <label class="input-label">Confirm Password</label>
      <input class="input" v-model="confirmPassword" type="password" />
      <label class="input-label">First Name</label>
      <input class="input" v-model="firstName" />
      <label class="input-label">Last Name</label>
      <input class="input" v-model="lastName" />
      <button @click="onSignUp" class="button green-button">
        <span>Зарегистрироваться</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import authUser from '@/modules/authModule'

export default defineComponent({
  setup () {
    const { signUpUser } = authUser()
    return { signUpUser }
  },

  data () {
    return {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      confirmPassword: ''
    }
  },

  methods: {
    onSignUp () {
      const { email, firstName, lastName, password } = this

      this.signUpUser({ email, firstName, lastName, password })
    }
  }
})

</script>

<style lang="scss" scoped>
  .sign-up-page {
    display: flex;
    align-items: center;
    height: 100%;

    .sign-up-form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

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
    }
  }
</style>
