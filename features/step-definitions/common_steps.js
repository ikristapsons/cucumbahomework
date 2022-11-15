const { Given, When, Then } = require('@wdio/cucumber-framework');

// Getting correct page
Given("I am on the {string} page", async (page) => {
    await browser.url(`https://the-internet.herokuapp.com/${page}`); 
});