//PACOTES
import {useState} from 'react';
import * as C from './App.styles';
import {Item} from '../src/types/Item'; 

const App = () => {
  const[list, setList] = useState<Item[]>([
    {id:1, name:"Levantar", done:true},
    {id:1, name:"Ir ao trabalho", done:true}
  ]);

  return (
    <C.Container>
      <C.Area>
        <C.Header>To-do List</C.Header>
        {list.map((item, index)=>(
          <div>{item.name}</div>
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;