export const tests = [
    {
        nameTest: "История",
        countQuestion: 3,
        nameTeacher: "Сидоров",
        timeTest: 600,
        id: new Date().getTime().toString(),
        subject:"История",
        complexity:"Easy",
        dateCreate: new Date(2018, 12, 5).getTime().toString(),
        questions:
            [
                {
                    textQuestion: "Вопрос 1", pointsForCorrectAnswer: 1, id: '1',
                    answers:
                        [
                            {textAnswer: "Ответ 1", pointCorrect: 1, id: '1',},
                            {textAnswer: "Ответ 2", pointCorrect: 0, id: '2',},
                            {textAnswer: "Ответ 3", pointCorrect: 0, id: '3',}
                        ]
                },

                {
                    textQuestion: "Вопрос 2", pointsForCorrectAnswer: 1, id: '2',
                    answers:
                        [
                            {textAnswer: "Ответ 1", pointCorrect: 0, id: '4',},
                            {textAnswer: "Ответ 2", pointCorrect: 1, id: '5',}
                        ]
                },

                {
                    textQuestion: "Вопрос 3", pointsForCorrectAnswer: 2, id: '3',
                    answers:
                        [
                            {textAnswer: "Ответ 1", pointCorrect: 0, id: '6',},
                            {textAnswer: "Ответ 2", pointCorrect: 0, id: '7',},
                            {textAnswer: "Ответ 3", pointCorrect: 2, id: '8',},
                            {textAnswer: "Ответ 4", pointCorrect: 0, id: '9',}
                        ]
                }
            ]
    },
    {
        nameTest: "Биология",
        countQuestion: 3,
        nameTeacher: "Петров",
        timeTest: 700,
        id: (new Date().getTime() + 1).toString(),
        subject:"Биология",
        complexity:"Easy",
        dateCreate: new Date(2014, 1, 11).getTime().toString(),
        questions:
            [
                {
                    textQuestion: "Вопрос 1", pointsForCorrectAnswer: 1, id: '1',
                    answers:
                        [
                            {textAnswer: "Ответ 1", pointCorrect: 0, id: '1',},
                            {textAnswer: "Ответ 2", pointCorrect: 1, id: '2',},
                            {textAnswer: "Ответ 3", pointCorrect: 0, id: '3',}
                        ]
                },

                {
                    textQuestion: "Вопрос 2", pointsForCorrectAnswer: 1, id: '2',
                    answers:
                        [
                            {textAnswer: "Ответ 1", pointCorrect: 0, id: '1',},
                            {textAnswer: "Ответ 2", pointCorrect: 1, id: '2',}
                        ]
                },

                {
                    textQuestion: "Вопрос 3", pointsForCorrectAnswer: 2, id: '3',
                    answers:
                        [
                            {textAnswer: "Ответ 1", pointCorrect: 0, id: '1',},
                            {textAnswer: "Ответ 2", pointCorrect: 0, id: '2',},
                            {textAnswer: "Ответ 3", pointCorrect: 1, id: '3',},
                            {textAnswer: "Ответ 4", pointCorrect: 0, id: '4',}
                        ]
                }
            ]
    },

]

export const student1 = {
    name: 'Alex',
    email: 'Alex@mail.ru',
    group: '2134',
    course: '3',
    specialty:'IVT',
    pass:'111',
    user: 'student',
    id: '1',
}
export const student2 = {
    name: 'Viki',
    email: 'Viki@mail.ru',
    group: '3541',
    course: '1',
    specialty:'UTS',
    pass:'111',
    user: 'student',
    id: '2',
}
export const teacher1 = {
    name:'John',
    email: 'John@mail.ru',
    subject:'History',
    pass:'111',
    user: 'teacher',
    id: '3',
}
export const teacher2 = {
    name:'Mary',
    email: 'Mary@mail.ru',
    subject:'Biology',
    pass:'111',
    user: 'teacher',
    id: '4',
}