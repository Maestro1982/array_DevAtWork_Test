import { useState } from 'react';
import './App.css';

function App() {
  const [array, setArray] = useState([]);

  function addInputNumber() {
    let inputNumber = prompt('Enter number');

    if (inputNumber === null || isNaN(inputNumber)) {
      return;
    }

    inputNumber = parseInt(inputNumber);

    setArray([...array, inputNumber]);
  }

  function sortArrayNumbers() {
    if (array.length > 0) {
      console.log('Before Sorting:', array);
      setArray((prevArray) => [...prevArray].sort((a, b) => a - b));
    } else {
      alert('Array is empty, there are no numbers to sort!');
    }
  }

  return (
    <>
      <div>
        <button onClick={addInputNumber}>Input Numbers</button>
        <button onClick={sortArrayNumbers}>Sort Array</button>
        <div>
          <span>Array: {array.join(' ')}</span>
        </div>
      </div>
    </>
  );
}

export default App;
