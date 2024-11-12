import React, { useState } from 'react';
import './App.css'

function App() {
  const [person, setPerson] = useState({ name: 'John', age: 25 });

  const handleClick = () => {
    // person.age += 1; // 상태를 직접 변경
    // console.log(person); // 콘솔에서는 변경된 값이 보이지만, 화면에는 반영되지 않음
    
    //  리액트는 상태변경 함수를 통해 새로운 상태 값을 인자로 받아 컴포넌트의 상태를 업데이트하고, 그 결과 React는 해당 상태 변경을 감지하여 컴포넌트를 다시 렌더링한다. 위의 코드에서는 person객체의 상태를 직접 변경하므로 상태변화를 React가 인지하지 못하여 리렌더링 하지 않는다.

    setPerson({...person, age: person.age+1})
    
  };

  return (
    <div>
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <button onClick={handleClick}>Increase Age</button>
    </div>
  );
}

export default App;
