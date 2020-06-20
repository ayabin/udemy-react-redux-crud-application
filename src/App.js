import React from 'react';

function App() {
  // const greeting = 'Hi,Tom!';
  // const dom = <h1 className="foo">{greeting}</h1>;
  // return dom;
  //return <input type="text" onClick={() => console.log('i am clicked!')} />;
  //return <input type="text" onChange={() => console.log('i am changed!')} />;
  return (
    <div>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => console.log('i am changed!')} />
    </div>
  );
}

export default App;
