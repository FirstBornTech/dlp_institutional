import axios from 'axios';

const http = axios.create({
    baseURL:process.env.REACT_APP_BASEURL,
})

export const getUserDetail = async () => {
    try{
        // const res = await http.get(`/me`);
        const res = {userId:101, userName: 'binusuresh', emailId:'binu.suresh@gmail.com'}
        return res;
    }
    catch(err){
        return {status: 'error', message: err}
    }
}

export const getCourseDetail = async (userId) => {
    try{
        // const res = await http.get(`/courses/${userId}`);
        const res = [{ id: 1, courseTitle: 'OET' },
        { id: 2, courseTitle: 'CBT' },
        { id: 3, courseTitle: 'OSCE' },
        { id: 4, courseTitle: 'IELTS' }];
        return res || [];
    } catch (err) {
        return {status: 'error', message: err};
    }
}

export const getContentById = async (sidebarSelection,optionSelection,courseId) => {
    try{
        // const res = await http.get(`/course/content/${sidebarSelection}/${optionSelection}/${courseId}`);
        const res = [
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

        return res || [];
    } catch (err) {
        return {status:'error', message: err};
    }
}