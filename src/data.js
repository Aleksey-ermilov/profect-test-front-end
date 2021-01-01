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
                    Answers:
                        [
                            {textAnswer: "Ответ 1", isTrue: true, id: '1',},
                            {textAnswer: "Ответ 2", isTrue: false, id: '2',},
                            {textAnswer: "Ответ 3", isTrue: false, id: '3',}
                        ]
                },

                {
                    textQuestion: "Вопрос 2", pointsForCorrectAnswer: 1, id: '2',
                    Answers:
                        [
                            {textAnswer: "Ответ 1", isTrue: false, id: '1',},
                            {textAnswer: "Ответ 2", isTrue: true, id: '2',}
                        ]
                },

                {
                    textQuestion: "Вопрос 3", pointsForCorrectAnswer: 2, id: '3',
                    Answers:
                        [
                            {textAnswer: "Ответ 1", isTrue: false, id: '1',},
                            {textAnswer: "Ответ 2", isTrue: false, id: '2',},
                            {textAnswer: "Ответ 3", isTrue: true, id: '3',},
                            {textAnswer: "Ответ 4", isTrue: false, id: '4',}
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
                    Answers:
                        [
                            {textAnswer: "Ответ 1", isTrue: true, id: '1',},
                            {textAnswer: "Ответ 2", isTrue: false, id: '2',},
                            {textAnswer: "Ответ 3", isTrue: false, id: '3',}
                        ]
                },

                {
                    textQuestion: "Вопрос 2", pointsForCorrectAnswer: 1, id: '2',
                    Answers:
                        [
                            {textAnswer: "Ответ 1", isTrue: false, id: '1',},
                            {textAnswer: "Ответ 2", isTrue: true, id: '2',}
                        ]
                },

                {
                    textQuestion: "Вопрос 3", pointsForCorrectAnswer: 2, id: '3',
                    Answers:
                        [
                            {textAnswer: "Ответ 1", isTrue: false, id: '1',},
                            {textAnswer: "Ответ 2", isTrue: false, id: '2',},
                            {textAnswer: "Ответ 3", isTrue: true, id: '3',},
                            {textAnswer: "Ответ 4", isTrue: false, id: '4',}
                        ]
                }
            ]
    },

]
