const { Given, When, Then } = require('@wdio/cucumber-framework');

// Add checkmark scenario
When("I click on checkbox", async () => {
    await $('//*[@id="checkboxes"]/input[1]').click();
});

Then("I see checkmark appear", async () => {
    const check = await $('//*[@id="checkboxes"]/input[1]');
    await expect(check).toBeChecked();
});

// Remove checkmark scenario
When("I remove checkmark", async () => {
    await $('//*[@id="checkboxes"]/input[2]').click();
});

Then("I don't see checkmark", async () => {
    const check2 = await $('//*[@id="checkboxes"]/input[2]');
    await expect(check2).not.toBeSelected();
});