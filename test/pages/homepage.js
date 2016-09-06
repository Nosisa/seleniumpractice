var homepage = function(){
    this.downloadangularbutton = function () {
        return element(by.css('.btn btn-large btn-primary download-btn')).isPresent();
    };
    this.tryangularbutton = function () {
        return element(by.xpath('/html/body/div[1]/div[1]/div/div[2]/a[1]')).isPresent();
    };
    this.viewongithubbutton = function () {
        return element(by.css('.btn btn-large')).isPresent();
    };
    this.designdocbutton = function () {
        return element(by.css('.btn.btn-large btn-warning')).isPresent();
    };

}

module.exports = new homepage()






