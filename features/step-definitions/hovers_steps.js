const { Given, When, Then } = require('@wdio/cucumber-framework');

// Hovering on images - getting info
When("I hover on image nr. - {string}", async (images) => {
    const image = await $(`//*[@id="content"]/div/div[${images}]/img`);
    await $(image).moveTo();
});

Then("under image nr. - {string} I see {string} and view profile", async (imageID, imageInfo) => {
    const userText = $(`//*[@id="content"]/div/div[${imageID}]/div/h5`);
    await expect(userText).toHaveTextContaining(imageInfo);
});