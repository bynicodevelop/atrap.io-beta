module.exports = {
  server: {
    command: 'node_modules/.bin/nuxt build && node_modules/.bin/nuxt start',
    port: 3000,
    launchTimeout: 30000
  },
  launch: {
    headless: true,
    ignoreDefaultArgs: ["--disable-extensions"],
    args: ["--no-sandbox", "--disable-setuid-sandbox"]
  },
  browser: 'chromium',
  browserContext: 'default'
}
