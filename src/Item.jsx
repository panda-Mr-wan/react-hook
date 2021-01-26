import React from 'react';

const Item = ({todo}) => {
    return ( 
        <li>
            <div className="view">
                <input type="checkbox" className="toggle"/>
                <label>{todo.value}</label>
                <button className="destroy"></button>
            </div>
            <input type="text" className="edit"/>
        </li>
     );
}
 
export default Item;
