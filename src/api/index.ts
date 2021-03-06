import { signInParams, signUpParams, tDevice, tGraphic, tAddDevice, tGraphicDataParams } from '../interfaces'

const URL = 'http://localhost:8080'

function signIn ({ email, password }: signInParams) {
  return FormPostFetch(`${URL}/signin`, { email, password })
}

function signUp ({ email, password, firstName: firstname, lastName: lastname }: signUpParams) {
  return FormPostFetch(`${URL}/signup`, { email, password, firstname, lastname })
}

function getDeviceList () {
  return GetFetch(`${URL}/api/device`)
}

function getDeviceModels () {
  return GetFetch(`${URL}/api/devices`)
}

function addDevice (device: tAddDevice): any {
  return PostFetch(`${URL}/api/device`, device)
}

function updateDevice (device: tDevice) {
  return PutFetch(`${URL}/api/device`, device)
}

function getGraphics () {
  return GetFetch(`${URL}/api/dashboard`)
}

function getGraphicData ({ period, device, canal }: tGraphicDataParams) {
  return GetFetch(`${URL}/api/data?period=${period}&device=${device}&canal=${canal}`)
}

export {
  signIn,
  signUp,
  getDeviceList,
  getDeviceModels,
  addDevice,
  updateDevice,
  getGraphics,
  getGraphicData
}

function GetFetch (url: string) {
  return fetch(
    url,
    {
      mode: 'no-cors',
      method: 'get'
    }
  ).then(result => result.json())
}

function PostFetch (url: string, body: any) {
  const jsonBody = JSON.stringify(body)

  return fetch(
    url,
    {
      mode: 'no-cors',
      method: 'POST',
      body: jsonBody
    }
  ).then(result => result.json())
}

function PutFetch (url: string, body: any) {
  const jsonBody = JSON.stringify(body)

  return fetch(
    url,
    {
      mode: 'no-cors',
      method: 'Put',
      body: jsonBody
    }
  ).then(result => result.json())
}

function FormPostFetch (url: string, body: any) {
  const formBody = []
  for (const property in body) {
    const encodedKey = encodeURIComponent(property)
    const encodedValue = encodeURIComponent(body[property])
    formBody.push(encodedKey + '=' + encodedValue)
  }
  const formData = formBody.join('&')

  return fetch(url, {
    method: 'POST',
    headers: {
      mode: 'no-cors',
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
    },
    body: formData
  }).then(result => result.json())
}
