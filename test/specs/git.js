describe('view on github page',function(){

    var gitPage = require('../pages/gitPage.js');


    it ('should display github page when view on github button is clicked',function(){
        expect(gitPage.githublink()).toBeFalsy()
    });

});