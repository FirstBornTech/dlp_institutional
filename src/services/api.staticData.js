export const userDetail = { userId: 101, userName: 'binusuresh', firstName:'Binu', lastName:'Suresh', emailId: 'binu.suresh@gmail.com' }

export const allCourseData = [{ id: 1, courseTitle: 'OET' },
{ id: 2, courseTitle: 'CBT' },
{ id: 3, courseTitle: 'OSCE' },
{ id: 4, courseTitle: 'IELTS' }];

export const courseContentData = (sidebarSelection, optionSelection, courseId) => {
    switch (courseId) {
        case 1:
        case 2:
        case 3:
        case 4: {
            switch (optionSelection) {
                case 'course': {
                    switch (sidebarSelection) {
                        case 'Reading': return [
                            {
                                key: 1,
                                title: ' Read-Course',
                                status: 'completed',
                                subcontent: [
                                    {
                                        key: 1,
                                        title: ' Read-Subcourse',
                                        status: 'completed'
                                    }
                                ]
                            }
                        ]
                        case 'Writing': return [
                            {
                                key: 1,
                                title: 'Introduction',
                                status: 'completed'
                            },
                            {
                                key: 2,
                                title: 'Understanding questions ',
                                status: 'inprogress',
                                subcontent: [
                                    {
                                        key: 1,
                                        title: 'Vistiqulum',
                                        status: 'completed'
                                    },
                                    {
                                        key: 2,
                                        title: 'Triqulum',
                                        status: 'inprogress'
                                    },
                                    {
                                        key: 3,
                                        title: 'Aliquam',
                                        status: 'incompleted'
                                    }
                                ]
                            },
                            {
                                key: 3,
                                title: 'Identify Keywords',
                                status: 'incompleted',
                                subcontent: [
                                    {
                                        key: 1,
                                        title: 'Vistiqulum',
                                        status: 'incompleted'
                                    },
                                    {
                                        key: 2,
                                        title: 'Triqulum',
                                        status: 'incompleted'
                                    }
                                ]
                            },
                            {
                                key: 4,
                                title: 'The six questions',
                                status: 'incompleted',
                                subcontent: [
                                    {
                                        key: 1,
                                        title: 'One',
                                        status: 'incompleted'
                                    },
                                    {
                                        key: 2,
                                        title: 'Two',
                                        status: 'incompleted'
                                    },
                                    {
                                        key: 3,
                                        title: 'Three',
                                        status: 'incompleted'
                                    },
                                    {
                                        key: 4,
                                        title: 'Four',
                                        status: 'incompleted'
                                    },
                                    {
                                        key: 5,
                                        title: 'Five',
                                        status: 'incompleted'
                                    },
                                    {
                                        key: 6,
                                        title: 'Six',
                                        status: 'incompleted'
                                    }
                                ]
                            },
                            {
                                key: 5,
                                title: 'Categorise case note',
                                status: 'incompleted'
                            },
                        ];
                        case 'Speaking': return [
                            {
                                key: 1,
                                title: ' Speak-Course',
                                status: 'incompleted',
                                subcontent: [
                                    {
                                        key: 1,
                                        title: ' Speak-Subcourse',
                                        status: 'incompleted'
                                    }
                                ]
                            }
                        ];
                        case 'Listening': return [
                            {
                                key: 1,
                                title: ' Listen-Course',
                                status: 'incompleted',
                                subcontent: [
                                    {
                                        key: 1,
                                        title: ' Listen-Subcourse',
                                        status: 'incompleted'
                                    }
                                ]
                            }
                        ];
                        default: return [];
                    }
                }
                case 'tips': {
                    switch (sidebarSelection) {
                        case 'Reading': return [
                            {
                                key: 1,
                                title: ' Read-Tips',
                                status: 'completed'
                            }
                        ]
                        case 'Writing': return [
                            {
                                key: 1,
                                title: ' Write-Tips',
                                status: 'completed'
                            }
                        ]
                        case 'Listening': return [
                            {
                                key: 1,
                                title: ' Listen-Tips',
                                status: 'incompleted'
                            }
                        ]
                        case 'Speaking': return [
                            {
                                key: 1,
                                title: ' Speak-Tips',
                                status: 'incompleted'
                            }
                        ]
                        default: return [];
                    }
                }
                case 'mock': {
                    switch (sidebarSelection) {
                        case 'Reading': return [
                            {
                                key: 1,
                                title: ' Read-Mock',
                                status: 'incompleted'
                            }
                        ]
                        case 'Writing': return [
                            {
                                key: 1,
                                title: ' Write-Mock',
                                status: 'incompleted'
                            }
                        ]
                        case 'Listening': return [
                            {
                                key: 1,
                                title: ' Listen-Mock',
                                status: 'incompleted'
                            }
                        ]
                        case 'Speaking': return [
                            {
                                key: 1,
                                title: ' Speak-Mock',
                                status: 'incompleted'
                            }
                        ]
                        default: return [];
                    }
                }
                default: return [];
            }
        }
        default: return [];
    }
}