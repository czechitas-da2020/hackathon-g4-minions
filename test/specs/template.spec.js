const templatePage = require('../pages/template.page')


describe('Template suite', () => {
    

    it('pridani do kosiku', () => {
        browser.url("http://czechitas-shopizer.azurewebsites.net/shop/")
        let pridejDoKosiku = $('[productId="7"]');
        pridejDoKosiku.click();
        let miniKosik = $("#miniCartSummary");
        expect(miniKosik).toHaveText('1');
    })

    it('login', () => {
        browser.url("http://czechitas-shopizer.azurewebsites.net/shop/customer/customLogon.html");
        let username = $("#signin_userName").setValue("jan.proks@centrum.cz");
        let password = $("#signin_password").setValue("tonda");
        let signIn = $("#genericLogin-button").click();
        expect(browser).toHaveUrl("http://czechitas-shopizer.azurewebsites.net/shop/customer/dashboard.html");
    })
    it.only('vyplneni formulare Contact us', () => {
        browser.url("http://czechitas-shopizer.azurewebsites.net/shop/store/contactus.html");
        let name = $("#name").setValue("Minions");
        let emailAddress = $("#email").setValue("jan.proks@centrum.cz");
        let subject = $("#subject").setValue("reklamace");
        let comments = $("#comment").setValue("nefunguje zip");
        let submit = $(".form-actions #submitContact").click();
        expect($('.alert.alert-success')).toBeDisplayedInViewport();
    })
    })