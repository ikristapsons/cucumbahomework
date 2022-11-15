const { Given, When, Then } = require('@wdio/cucumber-framework');

// Login page scenarios
When("I login with {word} and {word}", async (username, password) => {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
    await $('#login > button').click();
});

Then("I should see a flash message saying {string}", async (message) => {
    const elem = await $('#flash');
    await expect(elem).toBeExisting();
    await expect(elem).toHaveTextContaining(message);  
});