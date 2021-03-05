
export const disassemblyTest = (test) => {
    return ({
        complexity: test.complexity,
        countQuestion: test.countQuestion,
        dateCreate: test.dateCreate,
        id: test._id,
        idStudent: test.idStudent,
        idTeacher: test.idTeacher,
        nameTest: test.nameTest,
        questions: test.questions.map( question => disassemblyQuestion(question) ),
        subject: test.subject,
        timeTest: test.timeTest
    })
}

const disassemblyQuestion = (question) => {
    return ({
        id: question._id,
        textQuestion: question.textQuestion,
        pointsForCorrectAnswer: question.pointsForCorrectAnswer,
        answers: question.answers.map( answer => disassemblyAnswer(answer) )
    })
}
const disassemblyAnswer = (answer) => {
    return ({
        id: answer._id,
        textAnswer: answer.textAnswer,
        pointCorrect: answer.pointCorrect
    })
}