// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

//CH1 - useState ex1
// function App() {
//   const [time, setTime] = useState(1)
  
//   const handleClick = () =>{
//     let newTime;
//     if(time >= 12){
//       newTime = 1;
//     }
//     else{
//       newTime = time + 1;
//     }
//     setTime(newTime);
//   };

//   return (
//     <div>
//       <span>현재 시각 : {time}</span>
//       <button onClick={handleClick}>Update</button>
//     </div>
//   );
// }

// export default App


// CH1 - useState ex2
// 입력 값을 리스트 업데이트
// const heavyWork = () =>{
//   return ['홍길동' , '김동연'];
// };

// function App() {
//   const [names, setNames] = useState(() => {
//     return heavyWork();
//   });
//   const [input, setInput] = useState('');

//   const handleInputChange = (e) =>{
//     setInput(e.target.value);
//   };  // 사용자가 인풋을 입력할 때마다 state가 하나씩 업데이트 된다

//   const handleUpload = () =>{
//     setNames((prevState) =>{  //prevStae = 이전 값 홍길동, 김민수
//       console.log("이전 state : ", prevState);  // 이전 state 출력
//       return ([input, ...prevState]);
//     });
//   };

//   return (
//     <div>
//       <input type="text"  value={input} onChange={handleInputChange}/>
//       <button onClick={handleUpload}>Upload</button>
//       {names.map((name, idx) =>{
//         return <p key ={idx}>{name}</p>
//       })}
//     </div>
//   );
// }

// export default App;


// CH2 useEffect ex1
// import React, {useState, useEffect} from "react"

// function App() {
//   const [count ,setCount] = useState(1);
//   const [name, setName] = useState('');

//   // // 랜더링 시 매번 실행
//   // useEffect(() =>{
//   //   console.log("랜더링")
//   // });  

//   // // 마운트 + [ count ] 변경될 때 실행
//   // useEffect(() =>{
//   //   console.log("cout 변화")
//   // }, [count]); 

//   // // 마운트 + [ name ] 변경될 때 실행
//   // useEffect(() =>{
//   //   console.log("name 변화")
//   // }, [name]);  


//   // 마운팅 될 때만
//   useEffect(() =>{
//     console.log("마운팅");
//   },[])
  
//   const handleCountUpdate = () =>{
//     setCount(count + 1);
//   };

//   const handleInputChange = (e) =>{
//     setName(e.target.value);
//   }

//   return (
//     <div>
//       <button onClick={handleCountUpdate}>Update</button>
//       <span>count : {count}</span>
//       <input type="text" value={name} onChange={handleInputChange}></input>
//       <span>name : {name}</span>
//     </div>
//   )
// }

// export default App


// CH2 - useEffec ex2
// import React, {useState, useEffect} from "react"
// import Timer from "./component/Timer"

// function App() {
//   const [showTimer, setShowTimer] = useState(false);

//   return (
//      // 쇼 타이머가 true일 때만 타이머 출력
//     <div>
//       {showTimer && <Timer />}  
//       <button onClick={() => setShowTimer(!showTimer)}>Toggle Timer</button>
//     </div>
//   )
// }

// export default App


// CH3 - useRef ex
// import React, { useState, useRef } from 'react'

// function App() {
//   const [count, setCount] = useState(0);
//   const countRef = useRef(0);

//   console.log(countRef.current );

//   const increaseCountState = () => {
//     setCount(count + 1);
//   };  // 클릭 시마다 재랜더링

//   const increaseCountRef = () =>{
//     countRef.current += 1;
//     console.log("Ref :", countRef.current);
//   } // 랜더링이 되지 않기 때문에 랜더링 되기 전까지는 변화가 없다


//   return (
//     <div>
//       <p>State : {count} </p>
//       <p>Ref : {countRef.current}</p>
//       <button onClick={increaseCountState}>State Plus</button>
//       <button onClick={increaseCountRef}>Ref Plus</button>
      
//     </div>
//   )
// }

// export default App


// // CH3 - useRef ex2
// import React, { useState, useRef } from 'react'

// function App() {
//   const [render, setRender] = useState(0);
//   const countRef = useRef(0);
//   let countVar = 0; 

//   const doRendering = () =>{
//     setRender(render + 1);
//   }

//   const increaseRef = () =>{
//     countRef.current += 1;
//     console.log("ref : ", countRef.current);
//   };

//   const increaseVar = () =>{
//     countVar += 1;
//     console.log("var : ", countVar);
//   }; // 컴포넌트 재랜더링 될 때마다 변수가 초기화 되기 때문에 값에 변화가 없다

//   return (
//     <div>
//       <p>Ref : {countRef.current}</p>
//       <p>let : {countVar}</p>
//       <button onClick={doRendering}>랜더!</button>
//       <button onClick={increaseRef}>Ref Plus</button>
//       <button onClick={increaseVar}>Var Plus</button>
//     </div>
//   )
// }

// export default App



// CH3 - useRef ex3
// import React, { useState, useRef, useEffect } from 'react'

// function App() {
//   const [count, setCount] = useState(0);
//   const renderCount = useRef(1);

//   useEffect (() => {
//     renderCount.current += 1;
//     console.log("렌더링 수 : ", renderCount.current);
//   });

//   return (
//     <div>
//       <p>Count : {count}</p>
//       <button onClick={() => setCount(count + 1) }>Count Plus!</button>
//     </div>
//   )
// }

// export default App


// CH4 - useRef 활용
// import React, {useEffect, useRef} from 'react'

// function App() {
//   const inputRef = useRef();

//   useEffect(() => {
//     // console.log(inputRef)
//     inputRef.current.focus();
//   }, []);

//   const login = () =>{
//     alert(` 환영합니다 ${inputRef.current.value}`);
//     inputRef.current.focus();
//   }

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder='username' />
//       <button onClick={login}>로그인</button>
//     </div>
//   )
// }

// export default App



// CH5 - useContext
import {useState} from 'react';
import './App.css';
import Page from './component/Page';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';


function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <UserContext.Provider value={'김동연'}>
      <ThemeContext.Provider value={{isDark, setIsDark}}>
        <Page />;
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App

