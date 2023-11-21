import React, { useState } from 'react'

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  }
  const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };
  return (
    <div>
      <form onSubmit={onsubmit}>
        <input 
          value={value}
          onChange={onchange}
          type="text" 
          placeholder='username'
        />
        <button>Log in</button>
      </form>
    </div>
  );
}

export default App;
