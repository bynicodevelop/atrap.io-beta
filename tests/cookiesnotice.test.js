describe('Cookies Notice', () => {
  beforeAll(async () => { });

  it("cookies notice should be visible", async () => {
    await page.goto('http://localhost:3000/auth/signin');

    await page.waitForSelector('.v-alert')
  });

  it("cookies notice should not be visible when user clicked on close button", async () => {
    await page.goto('http://localhost:3000/auth/signin')

    await page.click('.v-alert__dismissible')

    await page.waitForSelector('.v-alert', {
      visible: false
    })

    const cookies = await page.cookies()
    expect(cookies[0] !== undefined).toBeTruthy()
    expect(cookies[0].name === 'cookies').toBeTruthy()
  });

  it("cookies notice should not be visible with cookies", async () => {
    await page.setCookie({
      'name': 'cookies',
      'value': 'true'
    })

    await page.goto('http://localhost:3000/auth/signin')

    await page.waitForSelector('.v-alert', {
      visible: false
    })
  })
});
