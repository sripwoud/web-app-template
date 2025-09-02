interface Config {
  appName: string
}

export const config: Config = {
  appName: import.meta.env.VITE_APP_NAME || 'web-app-template',
}
