import { test, expect } from "@playwright/test";

test.describe("Loan Application Happy Path", () => {
  test("completes full loan application flow", async ({ page }) => {
    // Step 1: Start on Loan Details page
    await page.goto("/");
    await expect(page.getByText("Pay", { exact: true })).toBeVisible();
    await expect(page.getByText("in parts", { exact: true })).toBeVisible();

    // Verify loan summary is displayed
    await expect(
      page.getByText("Monthly payment", { exact: true }),
    ).toBeVisible();

    // Click Continue to proceed
    await page.getByRole("button", { name: "Continue" }).click();

    // Step 2: Identity Verification page
    await expect(page).toHaveURL("/identity");

    // Smart-ID is selected by default, fill in personal ID code
    await page.getByLabel("Personal identification code").fill("38001010001");

    // Continue to next step
    await page.getByRole("button", { name: "Continue" }).click();

    // Step 3: Personal Details page
    await expect(page).toHaveURL("/personal-details");
    await expect(page.getByText("Hello!")).toBeVisible();

    // Fill in financial details
    await page.getByLabel("Monthly net income").fill("3000");
    await page.getByLabel("Monthly obligations").fill("500");

    // Accept required checkboxes by clicking their labels
    await page.getByText("No one else has influenced me").click();
    await page.getByText("I have read and accept the").click();

    // Submit form
    await page.getByRole("button", { name: "Confirm and continue" }).click();

    // Step 4: Decision page
    await expect(page).toHaveURL("/decision");

    // Wait for decision and continue (button text may vary)
    const continueButton = page
      .getByRole("button")
      .filter({ hasText: /continue|accept|proceed|sign/i });
    await continueButton.click();

    // Step 5: Signing page
    await expect(page).toHaveURL("/signing");

    // Accept contract terms if checkbox is present
    const contractCheckbox = page.getByRole("checkbox").first();
    if (await contractCheckbox.isVisible()) {
      await contractCheckbox.check();
    }

    // Sign and continue
    const signButton = page
      .getByRole("button")
      .filter({ hasText: /sign|confirm|continue/i });
    await signButton.click();

    // Step 6: Completion page
    await expect(page).toHaveURL("/completion");
  });
});
