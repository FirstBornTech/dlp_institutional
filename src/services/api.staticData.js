export const userDetail = { userId: 101, userName: 'binusuresh', firstName:'Binu', lastName:'Suresh', emailId: 'binu.suresh@gmail.com', password: 'binu123' }

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
                                        content : staticContentPage('Reading'),
                                        status: 'completed'
                                    }
                                ]
                            }
                        ]
                        case 'Writing': return [
                            {
                                key: 1,
                                title: 'Introduction',
                                content : staticContentPage('Writing'),
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
                                        content : staticContentPage('Vistiqulum'),
                                        status: 'completed'
                                    },
                                    {
                                        key: 2,
                                        title: 'Triqulum',
                                        content : staticContentPage('Triqulum'),
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
                                status: 'inprogress',
                                subcontent: [
                                    {
                                        key: 1,
                                        title: ' Speak-Subcourse',
                                        content : staticContentPage('Speaking'),
                                        status: 'inprogress'
                                    }
                                ]
                            }
                        ];
                        case 'Listening': return [
                            {
                                key: 1,
                                title: ' Listen-Course',
                                status: 'inprogress',
                                subcontent: [
                                    {
                                        key: 1,
                                        title: ' Listen-Subcourse',
                                        content : staticContentPage('Listening'),
                                        status: 'inprogress'
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
                                status: 'inprogress'
                            }
                        ]
                        case 'Speaking': return [
                            {
                                key: 1,
                                title: ' Speak-Tips',
                                status: 'inprogress'
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
                                status: 'inprogress'
                            }
                        ]
                        case 'Writing': return [
                            {
                                key: 1,
                                title: ' Write-Mock',
                                status: 'inprogress'
                            }
                        ]
                        case 'Listening': return [
                            {
                                key: 1,
                                title: ' Listen-Mock',
                                status: 'inprogress'
                            }
                        ]
                        case 'Speaking': return [
                            {
                                key: 1,
                                title: ' Speak-Mock',
                                status: 'inprogress'
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

const staticContentPage = (content) => {
    return(
        <>
        <h1>{content} Course Content</h1>
                <p>
                    Morbi dictum. Vestibulum adipiscing
                    pulvinar quam. In aliquam rhoncus sem.
                    In mi erat, sodaleseget, pretium interdum,
                    malesuada ac, augue. Aliquam sollicitudin
                    Morbi dictum. Vestibulum adipiscing
                    pulvinar quam. In aliquam rhoncus sem.
                    In mi erat, sodaleseget, pretium interdum,
                    malesuada ac, augue. Aliquam sollicitudinMorbi dictum. Vestibulum adipiscing
                    pulvinar quam. In aliquam rhoncus sem.
                    In mi erat, sodaleseget, pretium interdum,
                    malesuada ac, augue. Aliquam sollicitudin
                </p>
                <br />
                <div style={{textAlign:'center'}}>
                <iframe width="420" height="315" title="youtube" 
                    src="https://www.youtube.com/embed/6ncL7kUFBsI">
                </iframe>
                </div>
                <br/>
                <p>
                    Morbi dictum. Vestibulum adipiscing
                    pulvinar quam. In aliquam rhoncus sem.
                    In mi erat, sodaleseget, pretium interdum,
                    malesuada ac, augue. Aliquam sollicitudin
                    Morbi dictum. Vestibulum adipiscing
                    pulvinar quam. In aliquam rhoncus sem.
                    In mi erat, sodaleseget, pretium interdum,
                    malesuada ac, augue. Aliquam sollicitudinMorbi dictum. Vestibulum adipiscing
                    pulvinar quam. In aliquam rhoncus sem.
                    In mi erat, sodaleseget, pretium interdum,
                    malesuada ac, augue. Aliquam sollicitudin
                </p>
        </>
    )
}