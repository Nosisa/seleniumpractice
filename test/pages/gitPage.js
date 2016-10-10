var gitPage = function(){

    this.viewingithubbutton = function () {
        return element(by.xpath('/html/body/div[1]/div[1]/div/div[3]/a[1]')).click();
    };

    browser.driver.navigate().refresh();

    this.githublink = function(){
        return element(by.xpath('//*[@id="01777e4a9846fea5f3fcc8fe40d44680-fd0dd18a01cdc505d10d4485b8351656c0d222ce"]')).isPresent();
    };


    }
    module.exports = new gitPage()
