import React, { useContext } from'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Context} from '../context/blog_context';
import { FlatList, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native-gesture-handler';
import {Feather} from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {
    const {state, deleteBlogPost} = useContext(Context);
    
    return (
        <View>
            <FlatList 
                data = {state}
                keyExtractor = {blogPost => blogPost.title}
                renderItem = {({item}) => {
                    return (
                        <TouchableOpacity onPress = {() => {
                            navigation.navigate('Show', {id: item.id});
                        }}>
                            <View style = {styles.row}>
                        <Text style = {styles.title}>{item.title} - {item.id}</Text>
                        <TouchableOpacity onPress = {() => deleteBlogPost(item.id)}>
                            <Feather name = 'trash' style = {styles.icon}/>
                        </TouchableOpacity>
                    </View>
                        </TouchableOpacity>
                    
                    );
                }}
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => <TouchableOpacity style = {{paddingRight: 15.0}} onPress = {() => {
            navigation.navigate('Create');
        }}>
            <Feather name = "plus" size = {30.0}/>
        </TouchableOpacity>
    };
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
