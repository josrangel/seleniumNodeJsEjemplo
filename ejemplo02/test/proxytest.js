const {Builder}= require ("selenium-webdriver");
const chrome = require ("selenium-webdriver/chrome");
const proxy = require ("selenium-webdriver/proxy");
const options = new chrome.Options();//
//options.setProfile("./selenium");


const proxyServer = "173.192.128.238:8123";

const driver = new Builder()
	.forBrowser("chrome")
	.setChromeOptions(options)
	.setProxy(proxy.manual({
		http: proxyServer,
		https: proxyServer
	}))
	.build();

driver.get("https://whatismyipaddress.com/");