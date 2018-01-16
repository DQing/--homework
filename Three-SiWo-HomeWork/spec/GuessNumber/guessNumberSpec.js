let controller = require('../../GuessNumber/guessNumber');
describe("guessNumber function shouble be corrent", function () {
    it("test function", function () {
        let result = controller.guessNumber();
        expect(result).toEqual('hello')
    });
});
