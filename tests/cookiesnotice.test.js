describe("Cookies Notice", () => {
  it("cookies notice should be visible", async () => {
    await global.page.goto("http://localhost:3000/auth/signin")

    await global.page.waitForSelector(".v-alert", {
      visible: true,
    })
  })

  it("cookies notice should not be visible when user clicked on close button", async () => {
    await global.page.goto("http://localhost:3000/auth/signin")

    await global.page.click(".v-alert__dismissible")

    await global.page.waitForSelector(".v-alert", {
      visible: false,
    })

    const cookies = await global.page.cookies()
    expect(cookies[0] !== undefined).toBeTruthy()
    expect(cookies[0].name === "cookies").toBeTruthy()
  })

  it("cookies notice should not be visible with cookies", async () => {
    await global.page.setCookie({
      name: "cookies",
      value: "true",
    })

    await global.page.goto("http://localhost:3000/auth/signin")

    await global.page.waitForSelector(".v-alert", {
      visible: false,
    })
  })
})
