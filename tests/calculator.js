
let homepage = require('../pages/homepage');

describe('demo calculator tests', function () {

    it('addition test', function () {
        // browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');

        // element(by.model('first')).sendKeys('2');
        // element(by.model('second')).sendKeys('3');
        // element(by.css('[ng-click="doAddition()"]')).click();

        homepage.enterFirstNumber('4');
        homepage.enterSecondNumber('5');
        homepage.clickGo();


        // let result = element(by.cssContainingText('.ng-binding','5'));

        // expect(result.getText()).toEqual('5');

        homepage.verifyResult('9');

        browser.sleep(3000);


    });

    it('subtraction test', function () {
        // browser.get('http://juliemr.github.io/protractor-demo/');
        homepage.get('http://juliemr.github.io/protractor-demo/');

        // element(by.model('first')).sendKeys('2');
        // element(by.model('second')).sendKeys('3');
        // element(by.css('[ng-click="doAddition()"]')).click();

        homepage.enterFirstNumber('4');
        homepage.enterSecondNumber('5');
        homepage.clickGo1();


        // let result = element(by.cssContainingText('.ng-binding','5'));

        // expect(result.getText()).toEqual('5');

        homepage.verifyResult('9');

        browser.sleep(3000);


    });


});