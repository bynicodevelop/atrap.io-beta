describe('Google', () => {
  beforeAll(async () => {
    await page.goto('http://localhost:3000');
  });

  it('should be titled "atrap.io"', async () => {
    await expect(page.title()).resolves.toMatch('atrap.io');
  });
});
