import {ReactComponent as EditSVG} from '../../assets/edit.svg'

const EditBT = ({setEditingState}) => {
    return (
        <>
            <div className="edit-bt" onClick={() => setEditingState(1)}>
                <EditSVG />
            </div>
            <style jsx="true">
                {`
                    .edit-bt > * {
                        width: 20px;
                        height: 20px;
                        cursor: pointer;
                    }
                `}
            </style>
        </>
    )
}

export default EditBT