import "./App.css";

let result = [];
const filter = (numbers, greaterThan) => {
  for (const number of numbers) {
    if (number > greaterThan) {
      result.push(number);
    }
  }
  return result;
};
console.log(filter([1, 2, 3, 4, 5], 3));

function App() {
  return <></>;
}

export default App;
