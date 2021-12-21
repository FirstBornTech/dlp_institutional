import axios from 'axios';

const http = axios.create({
    baseURL:process.env.REACT_APP_BASEURL,
})

export const getCourseDetail = async () => {
    try{
        // const res = await http.get(`/courses`);
        const res = [{ id: 1, courseTitle: 'OET' },
        { id: 2, courseTitle: 'CBT' },
        { id: 3, courseTitle: 'OSCE' },
        { id: 4, courseTitle: 'IELTS' }];
        return res || {};
    } catch (err) {
        return {};
    }
}

export const getContentById = async (courseId) => {
    try{
        const res = await http.get(`/course/content/${courseId}`);
        return res || {};
    } catch (err) {
        return {};
    }
}