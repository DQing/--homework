function GuessNumber() {
    const answer = AnswerGenerator();
    let chances = 6;
    console.log('Welcome!\n');
    console.log(`Please input your number(${chances}): `)
    GetInput(answer, chances);
}

function GetInput(answer, chances) {
    process.stdin.resume();
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (input) => {
        JudeOutput(input, answer, chances);
    });
}

function JudeOutput(input, answer, chances) {
    if (!Jude(input)) {
        console.log('Cannot input duplicate numbers!');
        console.log(`Please input your number(${chances}): `)
    } else if (input.trim() === answer) {
        console.log('Congratulations!');
        process.exit()
    } else {
        console.log(CompareNumber(input, answer));
        chances--;
        if (chances === 0) {
            console.log('Game Over\n');
            console.log(`Answer: ${answer}`);
            process.exit()
        } else {
            console.log(`Please input your number(${chances}): `)
        }
    }
}

/**
 * @return {boolean}
 */
function Jude(input) {
    return input.split('').every((digit, index, array) => {
        return array.lastIndexOf(digit) === index;
    });
}

/**
 * @return {string}
 */
function CompareNumber(input, answer) {
    const inputs = input.split('');
    const answers = answer.split('');
    const count = inputs.filter(input => answers.includes(input)).length;
    const countA = inputs.filter(input => answers.indexOf(input) === inputs.indexOf(input)).length;
    const countB = count - countA;
    return `${countA}A${countB}B`
}

/**
 * @return {string}
 */
function AnswerGenerator() {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const answers = [];
    for (let i = 0; i < 4; i++) {
        const randomNumber = parseInt(Math.random() * digits.length);
        answers.push(digits.splice(randomNumber, 1)[0]);
    }
    return answers.join('');
}


module.exports = {
    GuessNumber: GuessNumber,
    CompareNumber: CompareNumber,
    AnswerGenerator: AnswerGenerator,
    Jude: Jude,
    JudeOutput: JudeOutput,
    GetInput:GetInput
};

