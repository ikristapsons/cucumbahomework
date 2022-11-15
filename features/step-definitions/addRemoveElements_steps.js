const { Given, When, Then } = require('@wdio/cucumber-framework');


// Press Add Element Button
When("I click on Add Element button", async () => {
    await $('#content').click();
});

Then("I see button Delete", async () => {
    const deleteBtn = await $('#elements');
    await expect(deleteBtn).toBeExisting();
});

// Press Delete Button
Given("I have clicked on Add Element", async () => {
    await $(`//*[@id="content"]/div/button`).click();
});

When("I click on delete button", async () => {
    const deleteBtn2 = await $(`//*[@id="elements"]/button`);
    await $(deleteBtn2).click();
});

Then("I don't see delete button", async () => {
    const deleteBtn3 = await $(`//*[@id="elements"]/button`);
    await expect(deleteBtn3).not.toBeExisting();
});

// Check text on delete button
When("I have clicked on add element button", async () => {
    await $(`//*[@id="content"]/div/button`).click();
});

Then("I see text on button - {word}", async (buttonText) => {
    const deleteBtn4 = await $(`//*[@id="elements"]/button`);
    await expect(deleteBtn4).toHaveTextContaining(buttonText);
});