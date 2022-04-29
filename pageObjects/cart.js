import waitPage from "./waitUntil";

class cart extends waitPage{
    checkTitle(){
        super.waitUntilAction(browser.getTitle(),('Cart - LolaFlora'))
        //expect(browser.getTitle()).equals('Cart - LolaFlora')
    }

    continueShop(){
        const button = $("a[title='Continue Shopping']")
        button.click()
    }
}

module.exports = new cart();