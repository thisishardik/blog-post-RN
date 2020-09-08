import React, { useContext, useState } from'react';
import {View, Text, StyleSheet} from 'react-native';
import { Context, editBlogPost } from '../context/blog_context';
import BlogPostForm from '../components/blog_post_form';


const EditScreen = ({navigation}) => {

    const id = navigation.getParam('id');
    const { state, editBlogPost } = useContext(Context);
    const blogPost = state.find((blogPost) => blogPost.id === id);

    return (
        <BlogPostForm
        initialValues = {{title: blogPost.title, content: blogPost.content}} 
        onSubmit = {(title, content) => {
            editBlogPost(id, title, content, () => navigation.pop());
        }}/>
    );
};



const styles = StyleSheet.create({

});



export default EditScreen;