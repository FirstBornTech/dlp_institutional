export const userDetail = {userId:101, userName: 'binusuresh', emailId:'binu.suresh@gmail.com'}

export const allCourseData = [{ id: 1, courseTitle: 'OET' },
{ id: 2, courseTitle: 'CBT' },
{ id: 3, courseTitle: 'OSCE' },
{ id: 4, courseTitle: 'IELTS' }];

export const courseContentData = (sidebarSelection,optionSelection,courseId) => {
    switch(courseId){
        case 1 :
        case 2 :
        case 3 :
        case 4 : {
            switch(optionSelection){
                case 'course': {
                    switch(sidebarSelection){
                        case 'Reading': return [
                            {
                                key: 1,
                                title :' Read-Course',
                                subcontent: [
                                    {
                                        key: 1,
                                        title :' Read-Subcourse', 
                                    }
                                ]
                            }
                        ]
                        case 'Writing': return [
                            {
                                key: 1,
                                title: 'Introduction'
                            },
                            {
                                key: 2,
                                title: 'Understanding questions ',
                                subcontent: [
                                    {
                                        key: 1,
                                        title: 'Vistiqulum'
                                    },
                                    {
                                        key: 2,
                                        title: 'Triqulum'
                                    },
                                    {
                                        key: 3,
                                        title: 'Aliquam'
                                    }
                                ]
                            },
                            {
                                key: 3,
                                title: 'Identify Keywords',
                                subcontent: [
                                    {
                                        key: 1,
                                        title: 'Vistiqulum'
                                    },
                                    {
                                        key: 2,
                                        title: 'Triqulum'
                                    }
                                ]
                            },
                            {
                                key: 4,
                                title: 'The six questions',
                                subcontent: [
                                    {
                                        key: 1,
                                        title: 'One'
                                    },
                                    {
                                        key: 2,
                                        title: 'Two'
                                    },
                                    {
                                        key: 3,
                                        title: 'Three'
                                    },
                                    {
                                        key: 4,
                                        title: 'Four'
                                    },
                                    {
                                        key: 5,
                                        title: 'Five'
                                    },
                                    {
                                        key: 6,
                                        title: 'Six'
                                    }
                                ]
                            },
                            {
                                key: 5,
                                title: 'Categorise case note'
                            },
                        ];
                        case 'Speaking': return [
                            {
                                key: 1,
                                title :' Speak-Course',
                                subcontent: [
                                    {
                                        key: 1,
                                        title :' Speak-Subcourse', 
                                    }
                                ]
                            }
                        ];
                        case 'Listening': return [
                            {
                                key: 1,
                                title :' Listen-Course',
                                subcontent: [
                                    {
                                        key: 1,
                                        title :' Listen-Subcourse', 
                                    }
                                ]
                            }
                        ];
                        default: return [];
                    }
                }
                case 'tips': {
                    switch(sidebarSelection){
                        case 'Reading': return [
                            {
                                key: 1,
                                title :' Read-Tips'
                            }
                        ]
                        case 'Writing': return [
                            {
                                key: 2,
                                title :' Read-Tips'
                            }
                        ]
                        case 'Listening': return [
                            {
                                key: 3,
                                title :' Listen-Tips'
                            }
                        ]
                        case 'Speaking': return [
                            {
                                key: 4,
                                title :' Speak-Tips'
                            }
                        ]
                        default: return [];
                    }
                }
                case 'mock': {
                    switch(sidebarSelection){
                        case 'Reading': return [
                            {
                                key: 1,
                                title :' Read-Mock'
                            }
                        ]
                        case 'Writing': return [
                            {
                                key: 2,
                                title :' Read-Mock'
                            }
                        ]
                        case 'Listening': return [
                            {
                                key: 3,
                                title :' Listen-Mock'
                            }
                        ]
                        case 'Speaking': return [
                            {
                                key: 4,
                                title :' Speak-Mock'
                            }
                        ]
                        default: return [];
                    }
                }
                default: return [];
            }
        }
        default : return [];
    }
}