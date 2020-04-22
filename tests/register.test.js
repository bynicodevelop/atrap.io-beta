describe("Register user", () => {
  // it("H1 balise should be present", async () => {
  //   await global.page.goto("http://localhost:3000/auth/signup")
  //
  //   await global.page.waitForSelector(".v-stepper__content:first-child h1")
  //   await global.page.waitForSelector(".v-stepper__content:nth-child(2) h1")
  //   await global.page.waitForSelector(".v-stepper__content:nth-child(3) h1")
  // })
  //
  // it("Explain content should be present", async () => {
  //   await global.page.goto("http://localhost:3000/auth/signup")
  //
  //   await global.page.waitForSelector(
  //     ".v-stepper__content:first-child .headline"
  //   )
  //   await global.page.waitForSelector(
  //     ".v-stepper__content:nth-child(2) .headline"
  //   )
  //   await global.page.waitForSelector(
  //     ".v-stepper__content:nth-child(3) .headline"
  //   )
  // })
  //
  // it("Input should be in errors on input name", async () => {
  //   await global.page.goto("http://localhost:3000/auth/signup")
  //
  //   await global.page.$eval("input[id=name]", (el) => el.focus())
  //   await global.page.$eval("input[id=name]", (el) => el.blur())
  //
  //   await global.page.waitForSelector(".error--text", {
  //     visible: true,
  //   })
  // })
  //
  // it("Button should be disable", async () => {
  //   await global.page.goto("http://localhost:3000/auth/signup")
  //
  //   await global.page.waitForSelector(".footer button.v-btn--disabled")
  //   await global.page.type("#name", "test")
  //
  //   await global.page.waitFor(".footer button.v-btn--disabled")
  // })
  //
  // it("Button should be disable then it should be enabled", async () => {
  //   await global.page.goto("http://localhost:3000/auth/signup")
  //
  //   await global.page.waitForSelector("button[disabled]")
  //
  //   const input = await global.page.$("input[type=file]")
  //   await input.uploadFile("./tests/images/testing-file.jpg")
  //
  //   await global.page.type("#name", "test")
  //
  //   await global.page.waitForSelector("button:not([disabled])")
  // })
  //
  // it("Should be show image uploaded", async () => {
  //   await global.page.goto("http://localhost:3000/auth/signup")
  //
  //   const input = await global.page.$("input[type=file]")
  //   await input.uploadFile("./tests/images/testing-file.jpg")
  //
  //   const src = await global.page.$eval("img", (el) => el.src)
  //
  //   expect(src !== null).toBeTruthy()
  // })
  //
  // it("Should be first stepper is show", async () => {
  //   await global.page.goto("http://localhost:3000/auth/signup")
  //
  //   await global.page.waitForSelector(".v-stepper__content:first-child", {
  //     visible: true,
  //   })
  //   await global.page.waitForSelector(".v-stepper__content:nth-child(2)", {
  //     visible: false,
  //   })
  //   await global.page.waitForSelector(".v-stepper__content:nth-child(3)", {
  //     visible: false,
  //   })
  // })
  //
  // it("Should be pass to next stepper (conditions)", async () => {
  //   await global.page.setCookie({
  //     name: "cookies",
  //     value: "true",
  //   })
  //
  //   await global.page.goto("http://localhost:3000/auth/signup")
  //
  //   await global.page.waitForSelector(".v-stepper__content:first-child", {
  //     visible: true,
  //   })
  //
  //   const input = await global.page.$("input[type=file]")
  //   await input.uploadFile("./tests/images/testing-file.jpg")
  //
  //   await global.page.type("#name", "test")
  //
  //   await global.page.click(".footer button")
  //
  //   await global.page.waitForSelector(".v-stepper__content:first-child", {
  //     visible: false,
  //   })
  //
  //   await global.page.waitForSelector(".v-stepper__content:nth-child(2)", {
  //     visible: true,
  //   })
  //
  //   await global.page.waitForSelector(".v-stepper__content:nth-child(3)", {
  //     visible: false,
  //   })
  // })

  it("Should be enable button next when the user has read conditions", async () => {
    await global.page.setCookie({
      name: "cookies",
      value: "true",
      url: "http://localhost:3000",
    })

    await global.page.goto("http://localhost:3000/auth/signup")

    await global.page.waitForSelector(".v-stepper__content:first-child", {
      visible: true,
    })

    const input = await global.page.$("input[type=file]")
    await input.uploadFile("./tests/images/testing-file.jpg")

    await global.page.type("#name", "test")

    await global.page.click(".footer button")

    await global.page.waitForSelector(".v-stepper__content:nth-child(2)", {
      visible: true,
    })

    await global.page.waitForSelector(".footer button[disabled]")

    await global.page.evaluate(() =>
      window.scrollBy(0, document.body.scrollHeight)
    )

    await global.page.waitForSelector(".footer button:not([disabled])")
  })
})
