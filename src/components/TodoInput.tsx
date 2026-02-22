import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function TodoInput() {
    const [text, setText] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (!text.trim()) return;
        dispatch(addTodo(text));
        setText("");
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Ajouter une tâche..."
                value={text}
                onChangeText={setText}
                style={styles.input}
                placeholderTextColor="#999"
            />
            <TouchableOpacity style={styles.button} onPress={handleAdd} >
                <Text style={styles.buttonText}>Ajouter</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: "#f2f2f2",
        padding: 15,
        borderRadius: 12,
        fontSize: 16,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#007bff",
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 16,
    },
});