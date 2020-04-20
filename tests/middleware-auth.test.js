describe("Middleware Auth", () => {
  it("should redirected to Sign in page", async () => {
    await global.page.goto("http://localhost:3000/")

    const res = await global.page.url()

    expect(res).toContain("/auth/signin")
  })

  it("should not redirected on the sign up page", async () => {
    await global.page.goto("http://localhost:3000/auth/signup")

    const res = await global.page.url()

    expect(res).toContain("/auth/signup")
  })

  it("should not redirected on the reset page", async () => {
    await global.page.goto("http://localhost:3000/auth/reset")

    const res = await global.page.url()

    expect(res).toContain("/auth/reset")
  })
})
