/*
* Carry out a Google Search
*/
 
"use strict";
 
var webdriver = require('selenium-webdriver');
var browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'firefox' }).build();
 
function logTitle() {
    browser.getTitle().then(function(title) {
        console.log('Current Page Title: ' + title);
    });
}
 
function clickLink(link) {
    link.click();
}
 
function findTutsPlusLink() {
    return browser.findElements(webdriver.By.css('[href="http://code.tutsplus.com/"]')).then(function(result) {
        return result[0];
    });
}

const getPromise = () => {
    return new Promise((resolve,reject) => {
        setTimeout(()=> 
            resolve(
                browser.get('https://www.google.com'),
                browser.findElement(webdriver.By.xpath('//input[@name="q"]')).sendKeys('tuts+ code'),
                findTutsPlusLink)
        ,2000);
    })
}

getPromise()
    .then((findTutsPlusLink) =>
        browser.findElement(webdriver.By.xpath('//div[@class="FPdoLc tfB0Bf"]')).click(),
        clickLink,
        logTitle)
    .catch((error)=>{
        console.log(error),
        browser.quit();
    });