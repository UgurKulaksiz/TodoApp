import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import TodoInput from "./src/components/TodoInput";
import TodoList from "./src/components/TodoList";

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={ styles.container }>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
          <TodoInput />
          <TodoList />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 20,
    margin: 20,
  },
});