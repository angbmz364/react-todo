import { useState } from 'react';
import CircleIcon from './CircleIcon';
import CompletedIcon from './CompletedIcon';
import XIcon from './XIcon';

export default function Task( {name, removeTask, id} ) {

  const [ completed, setCompleted ] = useState(false)

  const toggleCompleted = () => {
    setCompleted(prev => !prev)
  }

  return (
    <li 
      className={completed ? 'completed' : ''}
    >
      <CircleIcon toggleCompleted={toggleCompleted} /> 
      <CompletedIcon toggleCompleted={toggleCompleted} /> 
      <p>{name}</p>
      <XIcon removeTask={() => {removeTask(id)}} />
    </li>
  )

}