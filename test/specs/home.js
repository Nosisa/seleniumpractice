describe('angularjs homepage', function() {

    var homepage = require('../pages/homepage.js');


    it('should greet the named user', function() {
        browser.get('http://www.angularjs.org');

        element(by.model('yourName')).sendKeys('Julie');

        var greeting = element(by.binding('yourName'));

        expect(greeting.getText()).toEqual('Hello Julie!');
    });

    it('should have four center stage buttons',function(){

        expect(homepage.downloadangularbutton()).toBeTruthy();
        expect(homepage.tryangularbutton()).toBeTruthy();
        expect(homepage.viewingithubbutton()).toBeTruthy();
        expect(homepage.designdocbutton()).toBeTruthy();

   });


});
