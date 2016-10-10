var homepage = function(){
    this.downloadangularbutton = function () {
        return element(by.xpath('/html/body/div[1]/div[1]/div/div[2]/a[1]')).isPresent();
    };
    this.tryangularbutton = function () {
        return element(by.xpath('/html/body/div[1]/div[1]/div/div[2]/a[1]')).isPresent();
    };
    this.viewingithubbutton = function () {
        return element(by.xpath('/html/body/div[1]/div[1]/div/div[3]/a[1]')).isPresent();
    };
    this.designdocbutton = function () {
        return element(by.xpath('/html/body/div[1]/div[1]/div/div[3]/a[2]')).isPresent();
    };

}

module.exports = new homepage()






