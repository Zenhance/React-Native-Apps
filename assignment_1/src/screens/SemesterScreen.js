import React, { useState } from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image, State } from "react-native";



const SemesterScreen = props => {


    const firstSemesterCourse = [
        { id: 'SWE 4101' },
        { id: 'CSE 4105' },
        { id: 'Math 4103' },
    ];

    const secondSemesterCourse = [
        { id: 'SWE 4201' },
        { id: 'CSE 4205' },
        { id: 'Math 4203' },
    ];

    const thirdSemesterCourse = [
        { id: 'SWE 4301' },
        { id: 'CSE 4305' },
        { id: 'Math 4303' },
    ];

    return (
        <View style={styles.viewStyle}>
            <Button
                title="First Semester"
                onPress={() => { props.navigation.navigate('Course', { data: firstSemesterCourse }) }} />
            <Button
                title="Second Semester"
                onPress={() => { props.navigation.navigate('Course', { data: secondSemesterCourse }) }} />
            <Button
                title="Third Semester"
                onPress={() => { props.navigation.navigate('Course', { data: thirdSemesterCourse }) }} />
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }
});

export default SemesterScreen;