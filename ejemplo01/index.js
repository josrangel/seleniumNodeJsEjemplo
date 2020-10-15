const {Builder, By, Key, util}= require ("selenium-webdriver");

async function example(){
	//let driver = await new Builder().forBrowser("operadriver").build();
	let driver = await new Builder().forBrowser("chrome").build();
	await driver.get("http://google.com");
	await driver.findElement(By.name("q")).sendKeys("selenium", Key.RETURN);
}

example()