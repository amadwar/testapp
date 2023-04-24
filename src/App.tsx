import React from 'react';

import ContentTree from './ContentTree';

const data = [
  {
    id: 1,
    title: 'Root 1',
    children: [
      {
        id: 2,
        title: 'Child 1',
        children: [
          {
            id: 3,
            title: 'Grand Child 1',
          },
          {
            id: 4,
            title: 'Grand Child 2',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Root 2',
    children: [
      {
        id: 6,
        title: 'Child 2',
        children: [
          {
            id: 7,
            title: 'Grand Child 3',
          },
        ],
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <ContentTree nodes={data} />
    </div>
  );
}

export default App;
