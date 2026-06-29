exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || 'oleksandr_uISVN2',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'qzEccQsnSiA1EvCjqnqa',

    hostname: 'hub.browserstack.com',
    port: 443,
    protocol: 'https',
    path: '/wd/hub',

    specs: ['./tests/*.js'],

    capabilities: [{
        'appium:deviceName': 'Samsung Galaxy S22',
        'appium:platformVersion': '12.0',
        'platformName': 'Android',
        'appium:app': 'bs://479e18fa6818b8d4045679541a8428e0b8db37e0',
        'appium:automationName': 'UIAutomator2',
        'bstack:options': {
            projectName: 'Wikipedia App Tests',
            buildName: 'Build 1',
            sessionName: 'Wikipedia Test Suite',
        }
    }],

    framework: 'mocha',
    mochaOpts: {
        timeout: 60000
    },
    reporters: ['spec'],
}