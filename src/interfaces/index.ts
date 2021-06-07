//AUTH

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

// DEVICES

interface tDevice {
  id: number,
  name: string,
  device: number,
  createdAt: string,
  secret: string,
  updatedAt: string,
  userId: number
}

interface tDeviceModels {
  id: number,
  deviceName: string,
  canalCount: number,
  createdAt: string,
  updatedAt: string
}

interface tAddDevice {
  name: string,
  device: number,
}

// DASHBOARD

interface tGraphic {
  key: string,
  value: string,
  description: string,
}

export {
  signInParams,
  signUpParams,
  tDevice,
  tDeviceModels,
  tGraphic,
  tAddDevice
}
