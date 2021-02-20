import Priority from '../priority'
import DeleteBT from '../deleteTask'
import EditBT from '../editTask'
import {useEffect, useState} from 'react'
import {editTask} from '../../firebase/client'
import {createDate} from '../createDate'

const Task = ({data, refresh}) => {
    const [editingState, setEditingState] = useState(0)
    const [newPriority, setNewPriority] = useState(undefined)
    const [newContent, setNewContent] = useState(undefined)

    const handleTaskChange = () => {
        const change = {
                content: newContent,
                priority: newPriority,
                createdAt: `edited ${createDate()}`
        }
        if (newPriority === undefined) change.priority = data.priority
        if (newContent === undefined) change.content = data.content
        editTask(data.id, change)
        setEditingState(0)
        refresh()
    }

    useEffect(() => {
        setNewPriority(undefined)
        setNewContent(undefined)
    }, [editingState])

    const handleNewPriority = (new_prio) => {
        const priorities = document.querySelector('.edit-priority')
        priorities.children[0].children[0].classList.remove('selected-new-prio')
        priorities.children[1].children[0].classList.remove('selected-new-prio')
        priorities.children[2].children[0].classList.remove('selected-new-prio')

        priorities.children[new_prio].children[0].classList.add('selected-new-prio')
        setNewPriority(new_prio)
    }

    const handleContentChange = (e) => {
        setNewContent(e.target.value)
    }

    return (
        <>
        {editingState === 0 
            ?   <article className="editing-false">
                    <div className="task-tools">
                        <DeleteBT id={data.id} refresh={refresh}/>
                        <EditBT setEditingState={setEditingState}/>
                    </div>
                    <p className="date">{data.createdAt}</p>
                    <p className="message">{data.content}</p>
                    <Priority level={data.priority}/>
                </article>
            :   <article className="editing-true">
                    <form onSubmit={() => handleTaskChange()}>
                        <textarea onChange={handleContentChange} placeholder={`before: ${data.content}`} autoFocus/>
                        <button>edit</button>
                    </form>
                    <div className="edit-priority">
                        <div onClick={() => handleNewPriority(0)}><Priority level={0} /></div>
                        <div onClick={() => handleNewPriority(1)}><Priority level={1} /></div>
                        <div onClick={() => handleNewPriority(2)}><Priority level={2} /></div>
                    </div>
                </article>
        }
        <style jsx="true">
            {`
                article {
                    min-height: 10rem;
                    width: 100%;
                    background-color: #cfe;
                    border-radius: 10px;
                    display: flex;
                    flex-flow: column wrap;
                    align-items: center;
                    overflow-x: hidden;
                    position: relative;
                    padding: 1rem;
                }
                .message {
                    font-size: 1.4rem;
                    font-weight: 600;
                    overflow-y: auto;
                    scrollbar-width: thin;
                    margin-top: 20px;
                }
                .date {
                    position: absolute;
                    top: 5px;
                    font-size: 1.2rem;
                    font-family: arial;
                }

                .task-tools {
                    visibility: hidden;
                    display: flex;
                    flex-direction: row;
                    gap: 5px;
                    position: absolute;
                    top: 5px;
                    left: 5px;

                    transition: transform .2s;
                }

                article:hover .task-tools {
                    visibility: visible;
                }

                .task-tools > div:hover {
                    transform: scale(1.1);
                }

                .editing-false > .ball {
                    position: absolute;
                    top: 4px;
                    right: 4px;
                }

                .editing-true {
                    display: flex;
                    flex-direction: row;
                }

                .editing-true > form {
                    position: relative;
                    width: 90%;
                    height: 100%;
                    border: 0;
                }

                .editing-true > form > textarea {
                    font-family: sans-serif;
                    font-size: 1.5rem;
                    resize: none;
                    padding: 5px;
                    width: 100%;
                    height: 100%;
                    border: 0;
                }

                .editing-true > form > button {
                    position: absolute;
                    bottom: 5px;
                    right: 15px;

                    padding: .4rem 1rem;
                    border: 0;
                    color: white;
                    background-color: rgba(0,0,0, .4);
                    
                    border-radius: 9999px;

                    cursor: pointer;

                    opacity: 0.4;

                    transition: opacity .2s;
                }
                
                .editing-true > form > button:hover {
                    opacity: 1;
                    background-color: rgba(0,0,0, 1);
                }


                .edit-priority {
                    flex: 1 1 auto;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: end;
                    
                }
                
                .edit-priority > div {
                    display: flex;
                    // outline: 1px solid black;
                }

                .edit-priority > div > .ball {
                    cursor: pointer;
                }

                .edit-priority > div > .ball {
                    transition: transform .2s ease;
                }

                .edit-priority > div > .ball:hover {
                    transform: scale(1.2);
                }
                .selected-new-prio {
                    border: 1px solid black;
                }
            `}
        </style>
        </>
    )
}

export default Task