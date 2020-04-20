import React from 'react'
import './Modal.scss'

const Modal = (props) => {
    return (
        <div className="model">
            <div className="modelContainer">
                {props.children}
            </div>
        </div>
    )

}

export default Modal