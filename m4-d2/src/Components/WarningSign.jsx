import React from 'react'

const WarningSign = (show)=>{
    return(
        <div className={`${show?"warning": "hidden"}`}>
            <h3>No Result</h3>
        </div>
    )
}

export default WarningSign