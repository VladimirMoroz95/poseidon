interface signInParams {
  email: string,
  password: string,
}

interface signUpParams {
  email: string,
  password: string,
  lastName?: string,
  firstName?: string,
}

interface tDevice {
  id: number,
  name: string,
  device: number,
}

interface tDeviceModels {
  id: number,
  deviceName: string,
  canalCount: number,
}

export {
  signInParams,
  signUpParams,
  tDevice,
  tDeviceModels
}