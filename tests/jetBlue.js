
describe('jetblue booking',function(){
let loginUrl = browser.get('https://www.jetblue.com/');

        it('from and to city', function () {
            
            element(by.css('label[for="jb-radio-0"]')).click();
           
            let fromCity = element(by.css('[placeholder="Where from?"]'));
            fromCity.clear();
            browser.sleep(3000);
            fromCity.sendKeys('San');
            let droplist = element(by.id('listbox'));
            expect(droplist.isDisplayed()).toBe(true);
            element.all(by.css('#listbox li')).get(3).click();

            let toCity = element(by.css('[placeholder="Where to?"]'));
            toCity.clear();
            toCity.sendKeys('Bos');
            let droplist2 = element(by.id('listbox'));
            expect(droplist2.isDisplayed()).toBe(true);
            element.all(by.css('#listbox li')).get(2).click();
            browser.sleep(3000);
                           
        });

        it('Date picker',function(){
           
         let parent = element(by.tagName('jb-date-aggregator'));
             parent.element(by.tagName('label')).getText('Depart').click();
             element(by.css('td[aria-label="May 18 2020 clickable"] .db')).click();

             parent.element(by.tagName('label')).getText('Return').click();
             element(by.css('td[aria-label="May 30 2020 clickable"] .db')).click();
             
            });

        
         it('traveler picker',function(){
             let parent = element(by.tagName('jb-traveler-selector'));
             parent.element(by.tagName('label')).getText('Travelers').click();
             webElements = element.all(by.tagName('jb-traveler-selector-flights > ul  li'));
             console.log();
             console.log('some test for me.....!');
             webElements.count().then(function(size){
                 console.log(size);
             });
                 
                         
             let child = webElements.get(2);

            //  console.log(child);

            child.element(by.name('incrementerUp')).click();
            

        //     parent.element(by.tagName('jb-stepper > button:nth-f-type(1)')).click();

         });

        it('search',function(){
            // let submit = element(by.tagName('jb-booker-air-submit > button'));
            //  EC = protractor.ExpectedConditions;
            //  browser.wait(EC.elementToBeClickable(submit), 10000,'Not Clickable');
            //  submit.click();

            element(by.tagName('jb-booker-air-submit > button')).click();

            const urlRegExp = new RegExp(loginUrl);
            return browser.driver.wait(() => {
                return browser.driver.getCurrentUrl()
                    .then(nUrl => urlRegExp.test(nUrl))

            },12000,"Not Changing......");
            //element(by.cssContainingText('.ng-star-inserted','Search flights' )).click();
            // browser.wait(function(){
            //     return browser.getCurrentUrl().then(function(nUrl){
            //         return loginUrl.test(nUrl);
            //     });
            // }, 10000,"url has not changed");
            // console.log('url in string format.......');

            // JavascriptExecutor executor = ((JavascriptExecutor) driver); 
            // executor. executeScript("arguments[0]. click();", element);

                       
        //     browser.getCurrentUrl().then(function(nUrl){
        //        console.log(nUrl);
        //     expect(loginUrl).not.toBe(nUrl);
               
        //    });
           
           
            
        });
        
    });






