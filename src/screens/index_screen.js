import React, { useContext } from'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Context} from '../context/blog_context';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';


const IndexScreen = () => {
    const {state, addBlogPost, deleteBlogPost} = useContext(Context);
    
    return (
        <View>
            <Button 
                title = "Add Blog"
                onPress = {addBlogPost}
            />
            <FlatList 
                data = {state}
                keyExtractor = {blogPost => blogPost.title}
                renderItem = {({item}) => {
                    return (
                    <View style = {styles.row}>
                        <Text style = {styles.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress = {() => deleteBlogPost(item.id)}>
                            <Feather name = 'trash' style = {styles.icon}/>
                        </TouchableOpacity>
                    </View>);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20.0,
        paddingHorizontal: 20.0,
        marginHorizontal: 20.0,
        marginVertical: 10.0,
        top: 10.0,
        borderColor: 'grey',
        borderBottomWidth: 1.0
    },
    title: {
        fontSize: 18.0,
    },
    icon: {
        fontSize: 25.0,
        color: 'red'
    }
});

export default IndexScreen;
