import Priority from '../priority/index'
const Filter = ({handleFilter}) => {
    return (
        <>
            <div className="filter-options">
                <div className="filter-option option-low" onClick={() => handleFilter(0)}><Priority level={0}/></div> 
                <div className="filter-option option-medium" onClick={() => handleFilter(1)}><Priority level={1}/></div>
                <div className="filter-option option-high" onClick={() => handleFilter(2)}><Priority level={2}/></div>
                <div className="filter-option option-high" onClick={() => handleFilter(3)}><p>all</p></div>
            </div>
            <style>
                {`
                    .filter-options {
                        height: 100%;
                        flex: 1 1 auto;
                        display: flex;
                        flex-direction: row;
                        background-color: rgba(0,0,0,.2);
                    }
                    .filter-option {
                        flex: 1 1 auto;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                    }
                    .filter-option > .ball {
                        cursor: pointer;
                        transition: transform .2s;
                    }
                    .filter-option > .ball:hover {
                        transform: scale(1.1);
                    }
                    .filter-option > p {
                        font-size: 2rem;
                        cursor: pointer;
                    }
                    .filter-option > p:hover {
                        text-decoration: underline;
                    }
                `}
            </style>
        </>
    )
}

export default Filter