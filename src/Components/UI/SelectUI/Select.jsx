import React from 'react'
import './Select.css'

export const SelectUI = ({ event,nameCard,choose}) =>
{
    return (
        <div className="divSelect">
            <select name="select" id="chooseCard" onChange = { event }>
                <option value="option" id="option">{nameCard}</option>
                <option value="allOptions" id="options">All Cards</option>
                {
                    choose.map(element =>
                    (
                        <option key={element.id} value={element.id}>{element.name}</option>
                    )) 
                }
            </select>
        </div>
    )
}