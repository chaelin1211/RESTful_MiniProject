
import './App.css';
import TodoTemplate from './components/TodoTemplate';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
function App() {
  return (
    <TodoTemplate>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </TodoTemplate>
  );
}
export default App;
