import React from 'react'

const ToolBar=(props)=>{
    return(
        <div>
            <p>Toolbar</p>
            <input type="text" onChange={props.searchHandler}/>
        </div>
    )
}

export default ToolBar