const mcqs = require('../Model/mcqs');

const getMCQs = (req, res) => {
    const shuffled = mcqs.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 5);
    
    // Include correct answers in the response
    const questionsToServe = selected.map(({ id, question, options, answer }) => ({ id, question, options, answer }));
    
    res.json(questionsToServe);
};
const sayHello = (req, res) => {
    res.json({ message: 'Hello from the dummy route!' });
};

const submitAnswers = (req, res) => {
    const userAnswers = req.body; // Assuming this is an array of { questionId, answer } objects
    let score = 0; // Initialize score

    const results = userAnswers.map(({ questionId, answer }) => {
        const question = mcqs.find(q => q.id === questionId);
        if (!question) {
            return null; // Or handle this scenario appropriately
        }
        const isCorrect = question.answer === answer;
        if (isCorrect) {
            score++; // Increment score for each correct answer
        }
        return {
            question: question.question,
            correctAnswer: question.answer,
            userAnswer: answer,
            isCorrect: isCorrect
        };
    }).filter(Boolean); // Filter out any null responses if a question wasn't found

    // Include the total score in the response
    const response = {
        results: results,
        totalScore: score
    };

    res.json(response);
};

module.exports = {
    getMCQs,
    submitAnswers,
    sayHello
};
