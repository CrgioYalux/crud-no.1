import './App.css';
import Timeline from './components/timeline'
import ToolBar from './components/toolbar'
import CreateNewTask from './components/createNewTask'
import { useEffect, useState } from 'react'

function App() {
  const [addingNewTask, setAddingNewTask] = useState(null)
  const [filter, setFilter] = useState(3)

  const handleFilter = (filter) => {
    setFilter(filter)
  }
  
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
      <Timeline refresh={refreshTimeline} filter={filter}/>
    </div>
    {addingNewTask ? <CreateNewTask handleAddingState={handleAddingState}/> : null}
    <ToolBar handleAddingState={handleAddingState} handleFilter={handleFilter}/>
    </>
  );
}

export default App;
