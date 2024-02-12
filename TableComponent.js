import React, { useState } from 'react';

const TableComponent = ({ data }) => {
  const [sortedData, setSortedData] = useState([...data]); 

  const handleSort = () => {
    const sorted = [...sortedData].sort((a, b) => a.name.localeCompare(b.name));
    setSortedData(sorted);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSort}>Sort by Name</button>
    </div>
  );
};

export default TableComponent;
