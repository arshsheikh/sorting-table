import React from 'react';
import ReactDOM from 'react-dom';
import TableComponent from './TableComponent';

const App = () => {
const jsonData = [
  { id: 1, name: 'Yadav', age: 30 },
  { id: 2, name: 'Zempa', age: 25 },
  { id: 3, name: 'Arsh', age: 40 }
];

ReactDOM.render(
  <TableComponent data={jsonData} />,
  document.getElementById('root')
);
};

export default App;