import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    const fruit1 = 'mangga';
    const fruit2 = 'apple';
    const fruit3 = 'delima';
    

    
  }

  render() {
    // higher order function map
    const fruits = [
      "mangga",
      "apple",
      "delima",
      "nanas"
    ];
    fruits.push('anggur'); // method push untuk menambahkan array tanpa harus tau index ke berapa.
    fruits.pop(); // method pop untuk menghapus index terakhir.
    fruits.shift(); // method shift untuk menghapus index pertama.
    // fruits.splice(1); // method splice untuk menghapus index tertentu.
    console.log(fruits.includes('delima')); // method includes untuk mengecek data termasuk didalam index atau tidak.
    const fruit = fruits.map((f, index) => <li key={index}>{f}</li>);

    // higher order function filter
    const numbers = [1, 3, 5, 9, 2, 10];
    const number = numbers.filter((n) => n < 6);
    const num = number.map((n) => <li key={n.toString()}>{n}</li>);

    // higher order function reduce
    const total = numbers.reduce( (value, acc) => value + acc);
    

    return (
      <div>
        <h1>higher order function map</h1>
        <ul>{fruit}</ul>

        <h1>higher order function filter and map</h1>
        <ul>{num}</ul>
      </div>
    );
  }
}


export default App;
