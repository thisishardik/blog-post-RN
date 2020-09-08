import React, { useContext } from'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Context} from '../context/blog_context';
import BlogPostForm from '../components/blog_post_form';


const CreateScreen = ({navigation}) => {

    const { addBlogPost } = useContext(Context);

    return <BlogPostForm onSubmit = {(title, content) => {
        addBlogPost(title, content, () => navigation.navigate('Index'));
    }}/>
};



export default CreateScreen;
