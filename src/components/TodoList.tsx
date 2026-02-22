import { FlatList, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo, removeTodo } from "../features/todos/todoSlice";

export default function TodoList() {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const dispatch = useDispatch();

    return (
        <FlatList
            data={todos}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 30 }}
            renderItem={({ item }) => (
                <View style={[styles.todoContainer, item.completed && styles.itemCompleted]}>
                    <TouchableOpacity 
                        style={[styles.todoContent, item.completed && styles.itemCompleted]}
                        onPress={() => dispatch(toggleTodo(item.id))}
                        activeOpacity={0.7}
                    >
                        <View style={[styles.circle, item.completed && styles.circleCompleted]} />
                        <Text style={[styles.text, item.completed && styles.textCompleted]}>
                        {item.text}
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        style={styles.deleteButton}
                        onPress={() => dispatch(removeTodo(item.id))}
                    >
                        <Text style={styles.deleteButtonEmoji}>🗑️</Text>
                    </TouchableOpacity>
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    todoContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 16,
        borderRadius: 14,
        backgroundColor: "#ffffff",
        marginBottom: 12,
        borderWidth: 1,
        borderColor: "#f0f0f0",
    },
    itemCompleted: {
        backgroundColor: "#f7f7f7",
    },
    todoContent: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    circle: {
        width: 18,
        height: 18,
        borderRadius: 9,
        borderWidth: 2,
        borderColor: "#007bff",
        marginRight: 12,
    },
    circleCompleted: {
        backgroundColor: "#007bff",
    },
    text: {
        fontSize: 16,
        color: "#333",
    },
    textCompleted: {
        textDecorationLine: "line-through",
        color: "#999",
    },
    deleteButton: {
        padding: 6,
        marginLeft: 12,
    },
    deleteButtonEmoji: {
        fontSize: 20,
    },
});