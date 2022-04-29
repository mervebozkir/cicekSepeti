import waitPage from "./waitUntil";

class trackOrder extends waitPage{
    pageTitle(){
        super.waitUntilAction(browser.getTitle(),('Mizu - Track Your Order (Where is My Order?)'))
        //expect(browser.getTitle()).equals('Mizu - Track Your Order (Where is My Order?)')
    }
}

module.exports = new trackOrder();