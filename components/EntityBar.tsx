import { StyleSheet, View } from "react-native"
import React, { useState } from "react"


function EntityBar() {

    const [health, setHealth] = useState(-1);

    return (
        <View style={styles.bar}/>
    );
};

const styles = StyleSheet.create({
    bar: {
        width: '98%',
        backgroundColor: "#11151c",
        borderColor: "#263042",
        borderWidth: 5,
        borderRadius: 10,
        height: 50,
        marginBottom: 10,
    },
    healthBox: {
        
    }
});

export default EntityBar;