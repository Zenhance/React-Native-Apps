import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity,Image } from "react-native";


const ProfileScreen = () =>{
    return (
        <View style = {styles.view}>
        <Image
            style = {styles.iamge}
            source = {require('../../assets/IMG_0947.jpg')}/>
        <Text style = {styles.text}>Name: Zadid Bin Azad</Text>
        <Text style = {styles.text}>Student ID: 170042046</Text>
        <Text style = {styles.text}>Email: zadidbinazad@iut-dhaka.edu</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontWeight: '100',
        margin: 10,
    },
    iamge: {
        width: 300,
        height: 300,
        resizeMode: 'contain'
    },
    view: {
        borderWidth: 0,
        alignItems: 'center',
    }
});

export default ProfileScreen;