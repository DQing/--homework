let controller = require('../../GuessNumber/GuessNumber');
describe("guessNumber function shouble be corrent", function () {
    let randomData = "7486";
    it("CompareNumber function should output XAXB", function () {
        let input = "3456";
        let answer = "2957";
        let XAXB = "1A0B";
        let result = controller.CompareNumber(input, answer);
        expect(result).toEqual(XAXB);
    });
});
