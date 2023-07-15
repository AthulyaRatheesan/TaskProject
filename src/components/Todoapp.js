import React, { Component } from 'react'
import './todoapp.css'

export default class Todoapp extends Component {
  state = {
    input:"",
    items:[]
  }
  handlechange = event =>{
    this.setState({
      input: event.target.value
    });
    
  };
  storeItems =(event) =>{
    event.preventDefault();
  const  {input}=this.state;

  this.setState({
    items: [...this.state.items,input],
    input:""
  })

  }
  deleteItems=key =>{



  this.setState({
    items:this.state.items.filter((data,index)=>index !==key)
  })
  };
  render() {
    const {input,items} =this.state;
console.log(items);
    return (
      <div className='todo-container'>
       
        <form className='input-section'  onSubmit={this.storeItems}>
        <h1>Todo App</h1>

            <input type='text'  value={input} onChange={this.handlechange} placeholder='Enter items.....'/>
            </form>
        
       <ul>
      

        {items.map((data,index)=>(
          <li key={index}>
            {data} <i className="fa-solid fa-trash" onClick={()=>this.deleteItems(index)}></i>
          </li>
        ))}
        
       </ul>
        </div>
    )
  }
}


// import React, { useState, useCallback } from 'react';
// import './todoapp.css';

// function Todoapp() {
//   const [input, setInput] = useState('');
//   const [items, setItems] = useState([]);

//   const handleChange = useCallback(event => {
//     setInput(event.target.value);
//   }, []);

//   const storeItems = useCallback(event => {
//     event.preventDefault();
//     setItems([...items, input]);
//     setInput('');
//   }, [input, items]);

//   const deleteItem = useCallback(key => {
//     setItems(items.filter((data, index) => index !== key));
//   }, [items]);

//   return (
//     <div className='todo-container'>
//       <form className='inputsection' onSubmit={storeItems}>
//         <h1>Todo App</h1>
//         <input
//           type='text'
//           value={input}
//           onChange={handleChange}
//           placeholder='Enter Items....'
//         />
//       </form>
//       <ul>
//         {items.map((data, index) => (
//           <li key={index}>
//             {data}{' '}
//             <i
//               className='fa-solid fa-trash-can'
//               onClick={() => deleteItem(index)}
//             ></i>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Todoapp;