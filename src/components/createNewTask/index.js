import {useEffect, useState} from 'react'
import {addTask} from '../../firebase/client'
import {STATES} from "./states";
import {createDate} from '../createDate'

const CreateNewTask = ({handleAddingState}) => {
    const [taskContent, setTaskContent] = useState(0)
    const [priority, setPriority] = useState(undefined)
    const [status, setStatus] = useState(STATES.NOT_SET)

    const handlePriorityChange = (state) => {
        setPriority(state)
    }

    const handleTaskContentChange = (e) => {
        setTaskContent(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        addTask({
            content: taskContent,
            priority,
            createdAt: createDate()
        })

        .then(() => {
            setStatus(STATES.SUCCESS)
        })
        .catch(err => {
            setStatus(STATES.ERROR)
        })
    }

    useEffect(() => {
        status === STATES.SUCCESS && handleAddingState()
    })

    return (
        <>
        <div className="back">
            <form onSubmit={handleSubmit} className="front">
                <textarea onChange={handleTaskContentChange} className="task-input" placeholder="What has to be done?"/>
                <div className="set-priority">
                    <p>Choose a priority:</p>
                    <ul className="priorities">
                        <li onClick={() => handlePriorityChange(2)} className="priority set-high">high</li>
                        <li onClick={() => handlePriorityChange(1)} className="priority set-medium">medium</li>
                        <li onClick={() => handlePriorityChange(0)} className="priority set-low">low</li>
                    </ul>
                </div>
            <button disabled={priority === undefined || !taskContent.length}>add</button>
            </form>
            <button className="exit-bt" onClick={handleAddingState}>exit</button>
        </div>
        <style jsx="true">
            {`
                .back {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: rgba(0,0,0,.8);

                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;

                    // filter: blur(8px);
                    // -webkit-filter: blur(8px);
                }

                .front > button {
                    position: absolute;
                    top: 80%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                    width: 8rem;
                    height: 4rem;
                    border: 0;
                    border-radius: 10px;
                    cursor: pointer;
                }

                .front {
                    outline: 1px solid black;
                    width: 50%;
                    height: 50%;
                    background-color: #ccc;
                }

                .task-input {
                    resize: none;
                    padding: 1rem;
                    font-family: sans-serif;
                    scrollbar-width: thin;
                    width: 100%;
                    height: 75%;
                    border: 0;
                    outline: 0;
                }
            
                .set-priority {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    height: 25%;
                }

                .set-priority > p {
                    font-family: sans-serif;
                    font-size: 1.6rem;
                    font-weight: 600;
                }

                .priorities {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                    height: 50%;
                    padding: .5rem;
                    gap: .5rem;                    
                }
                
                .priority {
                    list-style: none;
                    flex: 1 0 auto;
                    height: 100%;
                    
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border: 1px solid black;
                    border-radius: 9999px;

                    font-size: 1.5rem;
                    font-weight: 700;
                    color: black;


                    cursor: pointer;

                    transition: background-color .2s;                    
                    user-select: none;
                }

                .priority:active {
                    background-color: black;
                }
                
                .set-low {
                    background-color: rgba(18, 254, 9, 1);
                }

                .set-low:hover {
                    background-color: rgba(18, 254, 9, .7);
                }

                .set-medium {
                    background-color: rgba(59, 166, 238, 1);
                }
                
                .set-medium:hover {
                    background-color: rgba(59, 166, 238, .7);
                }

                .set-high {
                    background-color: rgba(254, 33, 9, 1);
                }

                .set-high:hover {
                    background-color: rgba(254, 33, 9, .7);
                }
                .exit-bt {
                    position: absolute;
                    top: 85%;
                    left: 50%;
                    transform: translate(-50%, 50%);

                    border: 0;
                    padding: .4rem 2rem;
                    
                    cursor: pointer;
                }
            `}
        </style>
        </>
    )
}

export default CreateNewTask