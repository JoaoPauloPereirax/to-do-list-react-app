//PACOTES
import {useState} from 'react';
import * as C from './App.styles';
import {Item} from '../src/types/Item'; 
import {ListItem} from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const[list, setList] = useState<Item[]>([
    {id:1, name:"Levantar", done:true},
    {id:1, name:"Ir ao trabalho", done:false}
  ]);

  const handleAddTask = (taskname: string) =>{
    let newList = [...list];
    newList.push({
      id: list.length+1,
      name: taskname,
      done: false
    });
    setList(newList);
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>LISTA DE TAREFAS</C.Header>
        <AddArea onEnter={handleAddTask} />
        {list.map((item, index)=>(
          <ListItem key={index} item={item}/>
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App;