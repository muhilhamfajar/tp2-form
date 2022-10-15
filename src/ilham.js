// import { useEffect, useRef, useState } from "react";

// function App() {
//   const [count, setCount] = useState(0)
//   const [limit, setLimit] = useState(3)

  // const isMounted = useRef()
  
  // useEffect(() => {
  //   if (count === limit) {
  //     setRestrictTime()
  //   }
  // }, [count])

  // useEffect(() => {
    // if (!isMounted.current) {
    //   isMounted.current = true
    //   return
    // }

  //   const canLoginAt = localStorage.getItem('canLoginAt')
  //   if (canLoginAt) {
  //     const dateNow = new Date()
  //     const dateCanLogin = new Date(canLoginAt)

  //     if (dateNow < dateCanLogin) {
  //       // TODO:: Redirect ke halaman restrict
  //     }      
  //   }    
  // }, [])

//   const increment = () => {
//     setCount(count + 1)  
//   }

//   const setRestrictTime = () => {
//     const canLoginAt = localStorage.getItem('canLoginAt')
//     if (!canLoginAt) {      
//       return
//     }

//     const t = new Date()
//     t.setSeconds(t.getSeconds() + 5)

//     localStorage.setItem('canLoginAt', t)
//   }

//   return (
//     <div className="App">
//       <h1>{ count }</h1>
//       <button onClick={increment}>Button</button>
//     </div>
//   );
// }

// export default App;
