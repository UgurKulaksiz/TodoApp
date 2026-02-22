import { FlatList, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { RootState } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleTodo } from "../features/todos/todoSlice";

export default function TodoList() {
    const todos = useSelector((state: RootState) => state.todos.todos);
    const dispatch = useDispatch();

    return (
        <FlatList
            data={todos}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 30 }}
            renderItem={({ item }) => (
                <TouchableOpacity 
                    style={[styles.todoItem, item.completed && styles.itemCompleted]}
                    onPress={() => dispatch(toggleTodo(item.id))}
                    activeOpacity={0.7}
                >
                    <View style={[styles.circle, item.completed && styles.circleCompleted]} />
                    <Text style={[styles.text, item.completed && styles.textCompleted]}>
                        {item.text}
                    </Text>
                </TouchableOpacity>
            )}
        />
    );
}

const styles = StyleSheet.create({
    todoItem: {
        flexDirection: "row",
        alignItems: "center",
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
    }
});