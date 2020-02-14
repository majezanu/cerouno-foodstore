import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const AddCart = (props) => (
    <button className='btn' onClick={props.action}><FontAwesomeIcon icon={faShoppingCart} /></button>
)
export default AddCart