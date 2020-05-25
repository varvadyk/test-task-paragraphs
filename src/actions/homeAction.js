import {ADD_PARAGRAPH} from '../reducer/homeReduser';
export const  newPost=(post)=>{
    return {
        type:ADD_PARAGRAPH,
        value:post,
    }
}