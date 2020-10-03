import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image,FlatList } from "react-native";
import {SimpleCard} from "@paraboly/react-native-card";

const FacultyScreen = () => {
    const facultyList = [
        {id:'1', name:'Muhammad Mahbub Alam'},
        {id:'2', name:'Abu Raihan Mostofa Kamal'},
        {id:'3', name:'Md. Hasanul Kabir'},
        {id:'4', name:'Rafsanjany Kushol'},
        {id:'5', name:'Redwan Karim Sony'},
        {id:'6', name:'Ridwan Kabir'},
        {id:'7', name:'Mohayeminul Islam'},
        {id:'8', name:'Bakhtiar Hasan'},
        {id:'9',name:'Tasnim Ahmed'},
    ];

    return(
        <View style ={{ alignItems: 'center' }}>
        <FlatList
            keyExtractor = {facultyList.id} 
            data = {facultyList}
            renderItem = {({item}) => {
                return <SimpleCard title = {item.name} styles = {{width:200}}/>
            }}
        />
        </View>
    );
}

export default FacultyScreen;