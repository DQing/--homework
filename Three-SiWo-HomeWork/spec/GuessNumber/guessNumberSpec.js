let controller = require('../../GuessNumber/GuessNumber');
describe("guessNumber function shouble be corrent", function () {
    it("CompareNumber function should output XAXB", function () {
        const input = "3456";
        const answer = "2957";
        const XAXB = "1A0B";
        let result = controller.CompareNumber(input, answer);
        expect(result).toEqual(XAXB);
    });
    it("AnswerGenerator function should be right", function () {

        expect(controller.AnswerGenerator().length).toEqual(4);

        expect(controller.AnswerGenerator()).not.toEqual(controller.AnswerGenerator());

        const answers = controller.AnswerGenerator().split('');
        answers.forEach((answer) => {
            expect(answers.indexOf(answer)).toEqual(answers.lastIndexOf(answer));
        })

    })
});
