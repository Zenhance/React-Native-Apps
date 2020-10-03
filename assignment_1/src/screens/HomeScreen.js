import { SimpleCard } from "@paraboly/react-native-card";
import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity, Image } from "react-native";
import { color } from "react-native-reanimated";

const HomeScreen = props => {
    return (
        <View style={{ alignItems: 'center', justifyContent: 'space-evenly' }}>
            <View >
                <Image
                    style={styles.logo}
                    source={require('../../assets/IUT.png')}
                />

                <Text style={styles.headingText}>Depatment of CSE</Text>
                <Text style={styles.headingText}>Programme: SWE</Text>
            </View>
            <View >
                <TouchableOpacity
                    style = {{alignItems:'center'}}>
                    <SimpleCard 
                    title ='My Profile' 
                    styles ={{width:250}}
                    onPress = {() => props.navigation.navigate('Profile')}
                    />
                </TouchableOpacity>
                <Button
                    title="Semester Wise Course List"
                    onPress = {() =>
                        props.navigation.navigate('Semester')
                    }
                />
                <Button
                    title="List of Faculty Members"
                    onPress = {() =>
                        props.navigation.navigate('Faculty')
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 30,
        fontWeight: "bold",
        margin: 15,
    },
    logo: {
        width: 250,
        height: 250,
        resizeMode: 'contain'
    },
});

export default HomeScreen;