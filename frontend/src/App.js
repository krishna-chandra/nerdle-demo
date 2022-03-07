import './App.css';
import ColumnDropDown from './components/ColumnDropDown';
import GameTable from './components/GameTable';
import Submit from './components/Submit';
import { useEffect, useState } from 'react';

function App() {
  let [numColumns, setNumColumns] = useState(5);
  let [tableData, setTableData] = useState([[]]);
  let [attempts, setAttempts] = useState(0);
  let [won, setWon] = useState(false);

  useEffect(() => {
    fillTable(numColumns);
    gameInit();
  }, []);

  useEffect(() => {
    fillTable(numColumns);
    setAttempts(0);
    setWon(false);
    updateDifficultyLevel();
  }, [numColumns]);

  async function gameInit() {
    try {
      await fetch('/game/init', {
        method: 'POST'
      });
    }
    catch(err) {
        console.log(err);
    }
  }

  function updateCellValue(value, row, column) {
    let temp = [...tableData];
    temp[row] = [...tableData[row]];
    temp[row][column] = { ...temp[row][column], value: value };
    setTableData(temp);
  }

  async function updateDifficultyLevel() {
    try {
      await fetch(`/game/difficultyLevel/${numColumns}`, {
        method: 'PUT'
      });
    }
    catch(err) {
        console.log(err);
    }
  }

  function fillTable(numColumns) {
    let numRows = 6;
    let rows = new Array(numRows).fill([]);
    rows.forEach((row, index) => {
      rows[index] = new Array(numColumns).fill({ value: '' });
    });
    setTableData(rows);
  }

  async function handleSubmit(e) {
    try {
      let gameInput = tableData[attempts];
      let postData = {};
      gameInput.forEach((value, index) => {
        postData[index + 1] = value.value;
      });
      let result = await fetch(`/game`, {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      result = await result.json();
      let temp = [...tableData];
      let rowIndex = attempts;
      let row = [];
      temp[rowIndex].forEach((column, index) => {
        row.push({ ...column, state: result[index + 1] });
      });
      temp[rowIndex] = row;
      setTableData(temp);
      setAttempts(attempts + 1);
      let correctCount = Object.values(result).filter((value) => {
        return value === 'Correct';
      }).length;
      if(correctCount === numColumns) {
        setWon(true);
      }
    }
    catch(err) {
        console.log(err);
    }
  }

  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
      
      <ColumnDropDown setNumColumns={setNumColumns} />
      <GameTable tableData={tableData} updateCellValue={updateCellValue} attempts={attempts} />
      <Submit handleSubmit={handleSubmit} attempts={attempts} won={won} />
    </div>
  );
}

export default App;
