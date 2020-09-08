import React, { useState, useReducer } from 'react';
import createDataContext from './create_data_context';
import { ActivityIndicatorComponent } from 'react-native';


const blogReducer = (state, action) => {

    switch(action.type){
        case 'add_blog_post': 
            return [...state, {id: Math.floor(Math.random() * 9999), title: action.payload.title, content: action.payload.content}];
        case 'delete_blog_post':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        case 'edit_blog_post':
            return state.map((blogPost) => {
                if(blogPost.id === action.payload.id){
                    return action.payload;
                } else {
                    return blogPost;
                }
            })
        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {
        return (title, content, callback) => {
            dispatch({type: 'add_blog_post', payload: {title, content}});
            if(callback){
                callback();
            }
        }; 
    };
const deleteBlogPost = (dispatch) => {
        return (id) => {
            dispatch({type: 'delete_blog_post', payload: id }
            );
        };
    };
const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({type: 'edit_blog_post', payload: {id: id, title: title, content: content}});
        if(callback){
            callback();
        }
     }
}

export const {Context, Provider} = createDataContext(blogReducer, { addBlogPost, deleteBlogPost, editBlogPost }, [{title: "TEST POST", content: "TEST BLOG", id: 1}]);

