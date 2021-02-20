import {ReactComponent as EditSVG} from '../../assets/edit.svg'

const EditBT = () => {
    return (
        <>
            <div className="edit-bt">
                <EditSVG />
            </div>
            <style>
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