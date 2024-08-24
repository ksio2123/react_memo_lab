import React from 'react';
import Decoration from './Decoration';

function App() {
  return (
    <>
      <Counter />
      <footer>
        <p>Copyright 2022 Big Count Inc.</p>
      </footer>
    </>
  );
}

function Counter() {
  const [count, setCount] = React.useState(0);
  
  return (
    <main>
      <BigCountNumber count={count} />
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <Decoration />
    </main>
  );
}

function BigCountNumber({ count }) {
  return (
    <p>
      <span className="prefix">Count:</span>
      {count}
    </p>
  );
}

export default App;