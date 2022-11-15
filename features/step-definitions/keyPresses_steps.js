const { Given, When, Then } = require('@wdio/cucumber-framework');

// Various keypress scenarios
When("I press {string}", async (pressedKey) => {
    await browser.keys(pressedKey);
});

Then("I see - You entered: {string}", async (textOutput) => {
    const keyOutput = $('#result');
    await expect(keyOutput).toHaveTextContaining(textOutput);
});