import React, { useState, useReducer } from 'react';
import createDataContext from './create_data_context';


const blogReducer = (state, action) => {

    switch(action.type){
        case 'add_blog_post': 
            return [...state, {id: Math.floor(Math.random() * 9999), title: action.payload.title, content: action.payload.content}];
        case 'delete_blog_post':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
        return (title, content, callback) => {
            dispatch({type: 'add_blog_post', payload: {title, content}});
            callback();
        }; 
    };
const deleteBlogPost = (dispatch) => {
        return (id) => {
            dispatch({type: 'delete_blog_post', payload: id }
            );
        }; 
    };

export const {Context, Provider} = createDataContext(blogReducer, { addBlogPost, deleteBlogPost }, []);

