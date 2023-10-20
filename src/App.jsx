import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const getInput = (input) => {
    const results = [];

    const permute = (arr, permutation = []) => {
      if (arr.length === 0) {
        results.push(permutation.join(''));
      } else {
        for (let i = 0; i < arr.length; i++) {
          const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
          permute(rest, [...permutation, arr[i]]);
        }
      }
    }

    permute(input.split(''));

    return [...new Set(results)];
  }

  const inputA = getInput('a');

  const inputAB = getInput('ab');

  const inputABC = getInput('abc');

  const inputAABB = getInput('aabb');

  const findOddInt = (arr) => {
    const counts = {};

    for (const num of arr) {
      counts[num] = (counts[num] || 0) + 1;
    }

    for (const num in counts) {
      if (counts[num] % 2 !== 0) {
        return num;
      }
    }
  }

  const arrOdd1 = [7];
  const oddResult1 = findOddInt(arrOdd1);

  const arrOdd2 = [0];
  const oddResult2 = findOddInt(arrOdd2);

  const arrOdd3 = [1, 1, 2];
  const oddResult3 = findOddInt(arrOdd3);

  const arrOdd4 = [0, 1, 0, 1, 0];
  const oddResult4 = findOddInt(arrOdd4);

  const arrOdd5 = [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1];
  const oddResult5 = findOddInt(arrOdd5);

  const countSmileys = (arr) => {
    const textSymbol = /^[:;][-~]?[)D]$/;
    return arr.filter(symbol => textSymbol.test(symbol)).length;
  }

  const arrTextSymbol1 = [':)', ';(', ';}', ':-D'];
  const textSymbolResult1 = countSmileys(arrTextSymbol1);

  const arrTextSymbol2 = [';D', ':-(', ':-)', ';~)'];
  const textSymbolResult2 = countSmileys(arrTextSymbol2);

  const arrTextSymbol3 = [';]', ':[', ';*', ':$', ';-D'];
  const textSymbolResult3 = countSmileys(arrTextSymbol3);

  return (
    <>
      <h1>Examples 1</h1>
      <h3>With input 'a':</h3>
      <p>results : {JSON.stringify(inputA)}</p>
      <h3>With input 'ab':</h3>
      <p>results : {JSON.stringify(inputAB)}</p>
      <h3>With input 'abc':</h3>
      <p>results : {JSON.stringify(inputABC)}</p>
      <h3>With input 'aabb':</h3>
      <p>results : {JSON.stringify(inputAABB)}</p>

      <hr />

      <h1>Examples 2</h1>
      <h3>[7] should return 7 :</h3>
      <p>results : {oddResult1}</p>
      <h3>[0] should return 0 :</h3>
      <p>results : {oddResult2}</p>
      <h3>[1,1,2] should return 2 :</h3>
      <p>results : {oddResult3}</p>
      <h3>[0,1,0,1,0] should return 0 :</h3>
      <p>results : {oddResult4}</p>
      <h3>[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4 :</h3>
      <p>results : {oddResult5}</p>

      <hr />

      <h1>Examples 3</h1>
      <h3>{[':)', ';(', ';}', ':-D']} :</h3>
      <p>results : {textSymbolResult1}</p>
      <h3>{[';D', ':-(', ':-)', ';~)']} :</h3>
      <p>results : {textSymbolResult2}</p>
      <h3>{[';]', ':[', ';*', ':$', ';-D']} :</h3>
      <p>results : {textSymbolResult3}</p>
    </>
  )
}

export default App
