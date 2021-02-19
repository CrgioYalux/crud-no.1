import Priority from '../priority'

const Task = ({data}) => {
    return (
        <>
        <article>
            {
                <p className="date">{data.createdAt}</p>
            }
            <p className="message">{data.content}</p>
            <Priority level={data.priority}/>
        </article>
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
                
            `}
        </style>
        </>
    )
}

export default Task