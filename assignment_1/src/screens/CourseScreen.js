import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image,FlatList } from "react-native";
import {SimpleCard} from "@paraboly/react-native-card";


const CourseScreen = ({navigation}) =>{
    return(
        <View style ={{ alignItems: 'center' }}>
        <FlatList
            keyExtractor = {navigation.getParam('data').id} 
            data = {navigation.getParam('data')}
            renderItem = {({item}) => {
                return <SimpleCard title = {item.id} styles = {{width:200}}/>
            }}
        />
        </View>
    );
}

export default CourseScreen;