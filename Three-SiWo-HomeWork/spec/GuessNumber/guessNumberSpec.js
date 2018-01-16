let controller = require('../../GuessNumber/CompareNumber');
describe("guessNumber function shouble be corrent", function () {
    it(" guessNumber function", function () {
        let result = controller.CompareNumber();
        expect(result).toEqual('hello')
    });
});
