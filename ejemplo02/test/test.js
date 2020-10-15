const {Builder}= require ("selenium-webdriver");
const path = require("path");//
var assert = require('assert');

describe("Login", function(){
	this.timeout(40000)
	let driver
beforeEach(async function(){
	const vendorDirectory = path.delimiter + path.join(__dirname, "..", "vendor")
	process.env.PATH += vendorDirectory
	//
	driver = await new Builder().forBrowser("chrome").build()
})
afterEach(async function(){
	await driver.quit()
})

it("with valid credentials", async function(){
	await driver.get("https://the-internet.herokuapp.com/login")
	await driver.findElement({ id: "username" }).sendKeys('tomsmith')
	await driver
		.findElement({ id: "password"})
		.sendKeys("SuperSecretPassword!")
	await driver.findElement({ css: 'button'}).click()

	//afirmacion
	assert(
		await driver.findElement({css: '.flash'}).isDisplayed(),
		'Sucess message not displayed'
	)
}) })