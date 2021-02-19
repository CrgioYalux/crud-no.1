import './App.css';
import Timeline from './components/timeline'
import ToolBar from './components/toolbar'
import CreateNewTask from './components/createNewTask'
import { useEffect, useState } from 'react'

function App() {
  const [addingNewTask, setAddingNewTask] = useState(null)
  
  const handleAddingState = () => {
    setAddingNewTask(prev => !prev)
  }

  const refreshTimeline = (refresh) => {
    refresh()
  }

  useEffect(() => {
    addingNewTask === 0 && refreshTimeline() 
  })

  return (
    <>
    <div className="App">
      <Timeline refresh={refreshTimeline}/>
    </div>
    {addingNewTask ? <CreateNewTask handleAddingState={handleAddingState}/> : null}
    <ToolBar handleAddingState={handleAddingState}/>
    </>
  );
}

export default App;
