module.exports = {
  server: {
    command: 'node_modules/.bin/nuxt build && node_modules/.bin/nuxt start',
    port: 3000,
    launchTimeout: 30000
  },
  launch: {
    headless: process.env.CI === "true",
    ignoreDefaultArgs: ["--disable-extensions"],
    args: ["--no-sandbox"]
  }
}
