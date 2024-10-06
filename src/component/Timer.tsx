// CH2 - useEffect ex2
// import React, {useEffect} from 'react'

// const Timer = (props) => {
//   useEffect(() =>{
//     const timer = setInterval(() =>{
//       console.log("타이머 돌아가는 중,,,");
//     }, 1000);

//     return () => {
//       clearInterval(timer); // 타이머가 화면에서 사라질 때 정리함
//       console.log("타이머가 종료되었습니다.")
//     }
//   }, []);

//   return (
//     <div>
//       <span>타이머를 시작합니다.</span>
//     </div>
//   )
// }

// export default Timer
