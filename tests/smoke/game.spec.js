import { test, expect } from '@playwright/test';

test('boot, dialog, and collectible flow', async ({ page }) => {
  await page.goto('/');
  await page.waitForFunction(() => window.__phaserReady === true);

  const initial = await page.evaluate(() => ({
    hasScene: Boolean(window.__scene),
    dialogVisible: window.__scene?.dialogVisible ?? false,
    collected: window.__scene?.collected ?? false,
  }));
  expect(initial.hasScene).toBe(true);
  expect(initial.dialogVisible).toBe(false);
  expect(initial.collected).toBe(false);

  await page.evaluate(() => window.__scene.toggleDialog('Hello there!'));
  await page.waitForFunction(() => window.__scene.dialogVisible === true);
  expect(await page.evaluate(() => window.__scene.dialogVisible)).toBe(true);

  await page.evaluate(() => window.__scene.toggleDialog());
  await page.waitForFunction(() => window.__scene.dialogVisible === false);
  expect(await page.evaluate(() => window.__scene.dialogVisible)).toBe(false);

  await page.evaluate(() => window.__scene.handleCollect());
  await page.waitForFunction(() => window.__scene.collected === true);
  expect(await page.evaluate(() => window.__scene.collected)).toBe(true);
});
