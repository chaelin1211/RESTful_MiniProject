import './App.css';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';
function App() {
  return (
    <TodoTemplate>
      <TodoList></TodoList>
    </TodoTemplate>
  );
}
export default App;
