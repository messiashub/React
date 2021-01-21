/* import React from 'react'; */
import React, { useState, useEffect} from 'react';


function Counter(props){
    const [count, setCount] = useState(props.count)

    useEffect(()=>{
        setCount(parseInt(localStorage.getItem("count")));
    },[])

    useEffect(()=>{
        document.title = count
        localStorage.setItem("count",count);
    },[count]);
 

   function clicado(){
    setCount(count + 1);
    }

    return(
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={clicado}>clique</button>
        </div>
    )
    
}




// class Counter extends React.Component{
//     constructor(props){
//         super(props)

//         this.state = {count:this.props.count}
//         this.clickado = this.clickado.bind(this)
//     }

//    count= 1; 

//     clickado = ()=> {
        
//        /*  this.setState({count:this.state.count +1}) */
//         this.setState((state)=> {return{count:state.count + 1}})
//         console.log(this.state.count)
//     }
        
//     render(){
//         return(
//             <div>
//             <h1>Counter:{this.state.count}</h1>
//             <button onClick ={this.clickado}>add</button>
//             </div>
//         )
//     }
// } 
 
export default Counter