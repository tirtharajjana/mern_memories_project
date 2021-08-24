// // import { axios } from "axios";
// import axios from 'axios';

// const url = 'http://localhost:5000/posts';

// export const fetchPosts = () => {
//     axios.get(url);
// }

// export const createPost=(newPost)=>{
//     axios.post(url,newPost);
// }

import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => {
    // console.log(newPost);
    axios.post(url, newPost)};