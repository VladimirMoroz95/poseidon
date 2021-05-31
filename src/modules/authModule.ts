import { ref } from 'vue'
import { signIn, signUp } from '@/api'

interface tUser {
  email: string,
  password: string,
  firstName?: string,
  lastName?: string,
}

interface tUserRef<tUser> {
  value: tUser,
}

interface tAuthUser {
  user: tUserRef<tUser>,
  signInUser: (params: tUser) => any,
  signUpUser: (params: tUser) => any,
}

const user = ref({ email: '', password: '' })

export default function authUser (): tAuthUser {
  const signInUser = (params: tUser) => {
    signIn(params).then((response) => {
      console.log('signInUser', response)
    })
  }

  const signUpUser = (params: tUser) => {
    signUp(params).then((response) => {
      console.log('signUpUser', response)
    })
  }

  return { user, signInUser, signUpUser }
}
