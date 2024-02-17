import { test, expect } from "@playwright/test";

test("create delete course list", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByPlaceholder("название").click();
  await page.getByPlaceholder("название").fill("Test course");
  await page.getByPlaceholder("описание").click();
  await page.getByPlaceholder("описание").fill("Test descrip[tion");
  await page.getByRole("button", { name: "Добавить" }).click();
  await expect(
    page.getByText("Test courseTest descrip[tionУдалить"),
  ).toBeVisible();

  await page.getByRole("button", { name: "Удалить" }).click();

  await expect(
    page.getByText("Test courseTest descrip[tionУдалить"),
  ).not.toBeVisible();
});
