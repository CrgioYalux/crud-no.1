import {deleteTask} from '../../firebase/client'
import {ReactComponent as DeleteSVG} from '../../assets/delete.svg'

function DeleteBT({id, refresh}) {
    const handleDeleteTask = () => {
        deleteTask(id)
        refresh()
    }
  return (
    <>
        <div className="delete-bt" onClick={handleDeleteTask}>   
            <DeleteSVG />
        </div>
        <style jsx="true">
            {`
                .delete-bt > * {
                    width: 20px;
                    height: 20px;
                    cursor: pointer;
                }
            `}
        </style>
    </>
  )
}

export default DeleteBT
