import { StyleSheet, View, Text, Pressable, TextInput } from "react-native"
import React, { useState } from "react"


function EntityBar({ onDelete }: { onDelete: () => void }) {
    const [inputValue, setInputValue] = useState("");
    const [health, setHealth] = useState(0);

    const handleHealthChange = (value: string) => {
        const numericValue = parseInt(value, 10);
        if (!isNaN(numericValue)) {
          setHealth(numericValue);
        }
      };

    return (
        <View style={styles.bar}>
            <TextInput
                style={styles.nameInput}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="Enter name"
                keyboardType="numeric"
            />

            <Pressable onPress={() => setHealth(health - 5)}>
                <View style={styles.modifyButton}>
                    <Text style={styles.text} selectable={false}>-5</Text>
                </View>
            </Pressable>

            <Pressable onPress={() => setHealth(health - 1)}>
                <View style={styles.modifyButton}>
                    <Text style={styles.text} selectable={false}>-1</Text>
                </View>
            </Pressable>

            <TextInput
                style={styles.healthInput}
                value={health.toString()}
                onChangeText={handleHealthChange}
                keyboardType="numeric"
                textAlign="center"
            />

            <Pressable onPress={() => setHealth(health + 1)}>
                <View style={styles.modifyButton}>
                    <Text style={styles.text} selectable={false}>+1</Text>
                </View>
            </Pressable>

            <Pressable onPress={() => setHealth(health + 5)}>
                <View style={styles.modifyButton}>
                    <Text style={styles.text} selectable={false}>+5</Text>
                </View>
            </Pressable>

            <Pressable onPress={onDelete}>
                <View style={styles.deleteButton}>
                    <Text style={styles.text} selectable={false}>Delete</Text>
                </View>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    bar: {
        width: '98%',
        backgroundColor: "#11151c",
        borderColor: "#263042",
        borderWidth: 5,
        borderRadius: 10,
        height: 80,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 10,
    },
    healthBox: {
        width: '6%',
        height: 60,
        backgroundColor: "#3b4f73",
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#263042",
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    text: {
        color: "#fff",
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
    modifyButton: {
        width: 60,
        height: 60,
        backgroundColor: "#42bd35",
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#51d444",
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5,
    },
    healthInput: {
        width: '20%',
        height: 60,
        backgroundColor: "#3b4f73",
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#263042",
        color: "#fff",
        marginHorizontal: 5,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
    nameInput: {
        width: '20%',
        height: 60,
        backgroundColor: "#3b4f73",
        borderRadius: 10,
        borderWidth: 3,
        borderColor: "#263042",
        color: "#fff",
        marginHorizontal: 5,
        marginRight: 50,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'monospace',
    },
    deleteButton: {
        backgroundColor: '#ff4444',
        padding: 10,
        margin: 50,
        borderRadius: 5,
    },
});

export default EntityBar;