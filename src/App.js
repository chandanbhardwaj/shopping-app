import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const [items, setItems] = useState([
    "Milk", "Bread", "Butter"
  ]);
  return (
    <div class="App">
      
      <InputText handleSubmit={(item) => {
          setItems(items.concat(item));
        }}
      />
       <ListDisplay items={items} 
       
       />
    </div>
  )
}
const onClick=(items)=>{
  console.log(items)
}

const ListItem = (props) => (
  <li  >{props.name}</li>
)
 
const ListDisplay = (props) => {
  const items = props.items.map((item, i) => (
    <ListItem
      key={i}
      name={item}
      handleClick={props.handleClick}
    />
  ))
  return (
    <ul>
      {items}
    </ul>
  )
}
const InputText = (props) => {
  const [value, setValue] = useState('');
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      props.handleSubmit(value);
      setValue('');
    }}>
    <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
    </form>
  )
}

export default App;