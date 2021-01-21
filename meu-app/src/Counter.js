import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props)

        this.state = {count:this.props.count}
        this.clickado = this.clickado.bind(this)
    }

   count= 1; 

    clickado = ()=> {
        
       /*  this.setState({count:this.state.count +1}) */
        this.setState((state)=> {return{count:state.count + 1}})
        console.log(this.state.count)
    }
        
    render(){
        return(
            <div>
            <h1>Counter:{this.state.count}</h1>
            <button onClick ={this.clickado}>add</button>
            </div>
        )
    }
}

export default Counter