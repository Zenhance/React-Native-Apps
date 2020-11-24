import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import {AuthContext} from "../providers/AuthProvider";

const HomeScreen = (props) => {
    return (
        <AuthContext.Consumer>
            {
                (auth) => (
                    <View>
                        <Text>Logged In</Text>
                        <Button
                            title={"Log Out"}
                            onPress={() => auth.setIsLoggedIn(false)}
                        />

                    </View>
                )
            }
        </AuthContext.Consumer>

    );
};

const styles = StyleSheet.create({});

export default HomeScreen;

