import React from 'react'
import './ToolBar.scss'

import SearchIcon from '@material-ui/icons/Search';


const ToolBar = (props) => {
    return (
        <div className="toolBar">
            <p className="titleName">Grades</p>
            <div className="searchBar">
                {/* <div style={{color:"#dddddd",backgroundColor:"white",height:"29px",width:"50px",alignContent:"center" }}>
                <SearchIcon  />
                </div> */}
                <input type="text"
                    className="inputTextStyle"
                    placeholder="Search"
                    onChange={props.searchHandler} />


            </div>
            {/* <SearchIcon /> */}
        </div>
    )
}

export default ToolBar