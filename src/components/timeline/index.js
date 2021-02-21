import React from 'react'
import Task from '../task'
import { useState, useEffect } from 'react'
import { fetchTasks } from '../../firebase/client'
import Loader from '../loader/index'
import {STATES} from './states'

const Timeline = ({refresh, filter}) => {
    const [tasks, setTasks] = useState([])
    const [ready, setReady] = useState(0)
    const [status, setStatus] = useState(STATES.LOADING)

    const getTasks = () => {
        fetchTasks().then(setTasks)
    }
    
    useEffect(() => {
        getTasks()
    }, [refresh])

    useEffect(() => {
        getTasks()
    }, [])

    useEffect(() => {
        if (!tasks.length) {
            setStatus(STATES.NO_TASKS)
            setReady(0)
        }
        else {
            setReady(1)
        }
    }, [tasks])

    return (
        <>
        <div className="timeline">
            {ready 
                ? tasks.map(task => {
                    if (filter === task.priority) return <Task data={task} key={task.id} refresh={getTasks}/>
                    else if (filter === 3) return <Task data={task} key={task.id} refresh={getTasks}/>
                    
                })
                : status === STATES.LOADING ? <Loader /> : <div className="no-tasks">Add a task</div>
            }
        </div>
        <style jsx="true">
            {`
                .no-tasks {
                    // outline: 1px solid black;
                    height: 100%;
                    display: grid;
                    place-items: center;
                    font-size: 2rem;
                    font-family: monospace;
                }
                .timeline {
                    position: relative;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    padding: .4rem;
                    overflow-y: auto;
                    scrollbar-width: thin;
                    scrollbar-color: gray #ccc;
                }
            `}
        </style>
        </>
    )
}

export default Timeline