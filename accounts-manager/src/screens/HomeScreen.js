import React from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import {AuthContext} from "../providers/AuthProvider";
import {Logout} from "../requests/LogoutRequest";

const HomeScreen = (props) => {



    return (
        <AuthContext.Consumer>
            {
                (auth) => (
                    <View style={styles.container}>
                        <Text>Logged In</Text>
                        <Button
                            title={"Log Out"}
                            onPress={() => {
                                Logout();

                            }}
                        />

                    </View>
                )
            }
        </AuthContext.Consumer>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});

export default HomeScreen;

