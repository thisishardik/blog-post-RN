import React, { useState, useContext } from'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {Context} from '../context/blog_context';


const CreateScreen = ({navigation}) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlogPost } = useContext(Context);

    return (
        <View>
            <Text style = {styles.label}>Enter title</Text>
            <TextInput style = {styles.input} value = {title} onChangeText = {text => setTitle(text)}/>
            <Text style = {styles.label}>Enter Content</Text>
            <TextInput style = {styles.input} value = {content} onChangeText = {text => setContent(text)}/>
            <Button title = "Add Blog" onPress = {() => {
                addBlogPost(title, content, () => {
                    navigation.navigate('Index');
                });
                }}/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18.0,
        borderWidth: 1.0,
        borderColor: 'black',
        margin: 5.0,
        padding: 10.0,
        marginHorizontal: 15.0

    }, label: {
        fontSize: 20.0,
        marginBottom: 10.0,
        marginLeft: 5.0
    }
});

export default CreateScreen;
