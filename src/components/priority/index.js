import { levels } from './levels'

const Priority = ({level}) => {
    return (
        <>
            { (level === levels.LOW_PRIO) ? <span className="ball low"></span> : null }
            { (level === levels.MEDIUM_PRIO) ? <span className="ball medium"></span> : null }
            { (level === levels.HIGH_PRIO) ? <span className="ball high"></span> : null }
        <style jsx="true">
            {`
                .ball {
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                }
                .low {
                    background-color: #12fe09;
                }
                .medium {
                    background-color: #3ba6ee;
                }
                .high {
                    background-color: #fe2109;
                }
            `}
        </style>
        </>
    )
}

export default Priority