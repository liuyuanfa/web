import React,{useState,useEffect} from 'react'
// import ReactDOM from 'react-dom'
function Example() {
    const [count,setCount] = useState(0)
    useEffect(()=>{
        document.title = `你点了${count}次`;
    });
    // unmount=()=>{
    //     ReactDOM.unmountComponentAtNode(document.getElementById('count'))
    //   };
    return(
      <div id='count'>
        <p>你点了{count}次</p>
      <button onClick={()=>setCount(count+1)}>点我</button>
      </div>
    )
  }

  export default Example
  