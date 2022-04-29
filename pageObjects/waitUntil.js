module.exports = class waitPage{
    waitUntilAction(situation, expected) {
        browser.waitUntil(
            () => (situation) === (expected),
            {
                timeout: 10000,
                timeoutMsg: 'The expected time for result is exceeded.'
            }
        );
    }
}