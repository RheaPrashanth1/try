
import React, {useEffect, useRef} from 'react';

import ReactDOM from 'react-dom'
function App() {
 const test = (el) => {
  ReactDOM.render(

    <h1>hi</h1>,
  
  el)
 }
const ref = useRef(null);


  useEffect(() => {
    test(ref.current)
  })

  return  <div ref = {ref}/>
  
}

export default App;
