const firstStepNominalCase = async () => {
  /**
   * Able to hide cookie banner
   */
  await global.page.setCookie({
    name: "cookies",
    value: "true",
    url: "http://localhost:3000",
  })
  await global.page.goto("http://localhost:3000/auth/signup")

  /**
   * The first step is visible
   */
  await global.page.waitForSelector(".v-stepper__content:first-child", {
    visible: true,
  })

  /**
   * By default the next step is disabled
   */
  await global.page.waitForSelector(".footer button[disabled]")

  /**
   * Upload image
   */
  const input = await global.page.$("input[type=file]")
  await input.uploadFile("./tests/images/testing-file.jpg")

  /**
   * Checked if avatar isn't empty
   */
  const src = await global.page.$eval("img", (el) => el.src)

  expect(src !== null).toBeTruthy()

  /**
   * Enter a bradning name
   */
  await global.page.type("#name", "test")

  await global.page.waitForSelector(".footer button:not([disabled])")

  /**
   * Checked next steps are disabled
   */
  await global.page.waitForSelector(".v-stepper__content:nth-child(2)", {
    visible: false,
  })

  await global.page.waitForSelector(".v-stepper__content:nth-child(3)", {
    visible: false,
  })
}

const secondStepNominalCase = async () => {
  /**
   * Pass to next step
   */
  await global.page.click(".footer button")

  await global.page.waitForSelector(".v-stepper__content:first-child", {
    visible: false,
  })

  /**
   * Checked next step is visible
   */
  await global.page.waitForSelector(".v-stepper__content:nth-child(2)")

  /**
   * User can't to access to the next step
   */
  await global.page.waitForSelector(".footer button[disabled]")

  /**
   * User should be read cgv
   */
  await global.page.evaluate(() =>
    window.scrollBy(0, document.body.scrollHeight)
  )

  await global.page.waitForSelector(".footer button:not([disabled])")

  await global.page.waitForSelector(".v-stepper__content:nth-child(3)", {
    visible: false,
  })
}

const lastStepNominalCase = async () => {
  /**
   * Pass to next step
   */
  await global.page.click(".footer button")

  await global.page.waitForSelector(".v-stepper__content:nth-child(2)", {
    visible: false,
  })
  /**
   * Checked next step is visible
   */
  await global.page.waitForSelector(".v-stepper__content:nth-child(3)")

  /**
   * User can't send form if it's not complete
   */
  await global.page.waitForSelector(".footer button[disabled]")

  await global.page.type("#email", "john.doe@domain.tld")
  await global.page.type("#password", "123456")

  await global.page.waitForSelector(".footer button:not([disabled])")
}

describe("Register user", () => {
  it("H1 balise should be present", async () => {
    await global.page.goto("http://localhost:3000/auth/signup")

    await global.page.waitForSelector(".v-stepper__content:first-child h1")
    await global.page.waitForSelector(
      ".v-stepper__content:first-child .headline"
    )

    await global.page.waitForSelector(".v-stepper__content:nth-child(2) h1")
    await global.page.waitForSelector(
      ".v-stepper__content:nth-child(2) .headline"
    )

    await global.page.waitForSelector(".v-stepper__content:nth-child(3) h1")
    await global.page.waitForSelector(
      ".v-stepper__content:nth-child(3) .headline"
    )
  })

  it("Should be complete the first form", async () => {
    await firstStepNominalCase()
  })

  it("Should be pass to next stepper (cgv)", async () => {
    await firstStepNominalCase()

    await secondStepNominalCase()
  })

  it("Should be pass to next stepper (registration)", async () => {
    await firstStepNominalCase()

    await secondStepNominalCase()

    await lastStepNominalCase()
  })
})
