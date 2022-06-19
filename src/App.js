import logo from "./logo.svg";
import "./App.css";
import add, { sub, div, mul } from "./Calculation";

const num1 = 50;
const num2 = 50;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <li>Sum of two number = {add(num1, num2)}</li>
        <li>subtraction of two number = {sub(num1, num2)}</li>
        <li>Divion of two number = {div(4, 40)}</li>
        <li>Multi of two number = {mul(num1, num2)}</li>
      </header>
    </div>
  );
}
export default App;
