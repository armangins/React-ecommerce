import React from 'react';
import './menu-item.styles.scss'


const MenuItem = ({ title,imgName }) => {

console.log('imgName:', imgName)
console.log('title:', title)

return (
    <div  style={{backgroundImage: `url(${imgName})`}}className="menu-item">

        <div className="content">
            <h1 className="title">{title}</h1>
            <span>buy now</span>
        </div>
    </div>
)
    
}

export default MenuItem;