import axios from 'axios';
import { allCourseData, courseContentData, userDetail } from './api.staticData';

const http = axios.create({
    baseURL:process.env.REACT_APP_BASEURL,
})

export const getUserDetail = async () => {
    try{
        // const res = await http.get(`/me`);
        const res = userDetail;
        return res;
    }
    catch(err){
        return {status: 'error', message: err}
    }
}

export const getCourseDetail = async (userId) => {
    try{
        // const res = await http.get(`/courses/${userId}`);
        const res = allCourseData;
        return res || [];
    } catch (err) {
        return {status: 'error', message: err};
    }
}

export const getContentById = async (sidebarSelection,optionSelection,courseId) => {
    try{
        // const res = await http.get(`/course/content/${sidebarSelection}/${optionSelection}/${courseId}`);
        const res = courseContentData(sidebarSelection,optionSelection,courseId)

        return res || [];
    } catch (err) {
        return {status:'error', message: err};
    }
}