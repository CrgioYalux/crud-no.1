import Filter from '../filter'
const ToolBar = ({handleAddingState, handleFilter}) => {
    return (
        <>
        <div className="nav">
            <ul className="tools">
                <li className="tool" onClick={handleAddingState}>add new</li>
                <Filter handleFilter={handleFilter} />
                <li className="tool">search</li>
            </ul>
        </div>
        <style jsx="true">
            {`
                .tools {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-around;
                    align-items: center;
                    outline: 1px solid black;
                    height: 100%;
                    width: 100%;
                }
                
                .tool {
                    list-style: none;
                    font-size: 2rem;
                    outline: 1px solid black;

                    flex: 1 1 auto;
                    height: 100%;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    background-color: rgba(0,0,0,.2);

                    transition: background-color .2s;

                    cursor: pointer;
                }

                .tool:hover {
                    background-color: rgba(0,0,0,.4);
                }
                
                .nav {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    margin: 0;
                    padding: 0;
                    height: 5rem;
                }
            `}
        </style>
        </>
    )
}

export default ToolBar