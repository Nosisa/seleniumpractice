var homepage = function(){
    this.downloadangularbutton = element(by.css(".btn.btn-large btn-primary download-btn"));
    this.tryangularbutton = element(by.xpath("/html/body/div[1]/div[1]/div/div[2]/a[1]"));
    this.viewongithubbutton = element(by.css(".btn btn-large"));
    this.designdocbutton = element(by.css(".btn.btn-large btn-warning"));
}



describe('angularjs homepage', function() {
    it('should greet the named user', function() {
        browser.get('http://www.angularjs.org');

        element(by.model('yourName')).sendKeys('Julie');

        var greeting = element(by.binding('yourName'));

        expect(greeting.getText()).toEqual('Hello Julie!');
    });

    it('should have four center stage buttons',function(){
        //expect(homepage.downloadangularbutton.isPresent()).toBe(true);
       // expect(homepage.tryangularbutton.isPresent()).toBe(true);
        //expect(homepage.viewongithubbutton).toBeTruthy();
      //  expect(homepage.designdocbutton.isPresent()).toBe(true);

    })


});