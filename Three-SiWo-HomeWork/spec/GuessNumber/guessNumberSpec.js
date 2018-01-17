const stdin = require('mock-stdin').stdin();
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
    it("Jude function should be right", function () {
        const input = "1234";
        expect(controller.Jude(input)).toBeTruthy();
    })
});
describe("guessNumber function shouble be corrent", function () {
    beforeEach(() => {
        spyOn(console, 'log');
        spyOn(process, 'exit');

        new controller.GuessNumber();
    });
    it('when input is 1234, should console  Congratulations!', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6): ');
        controller.GetInput('1234', 6);
        stdin.send('1234');
        expect(console.log).toHaveBeenCalledWith('Congratulations!');
    })
    it('when input is 5678, should console Game over', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');

        for (let i = 0; i < 6; i++) {
            expect(console.log).toHaveBeenCalledWith('Please input your number(6): ');
            controller.GetInput('1234', 6 - i);
            stdin.send('5678');
            expect(console.log).toHaveBeenCalledWith('0A0B');
        }

        expect(console.log).toHaveBeenCalledWith('Game Over\n');
        expect(console.log).toHaveBeenCalledWith('Answer: 1234');
    });
    it('when input is 1123, should console Cannot input duplicate numbers!', () => {
        expect(console.log).toHaveBeenCalledWith('Welcome!\n');
        expect(console.log).toHaveBeenCalledWith('Please input your number(6): ');
        controller.GetInput('1234', 6);
        stdin.send('1123');
        expect(console.log).toHaveBeenCalledWith('Cannot input duplicate numbers!');
    })

})
