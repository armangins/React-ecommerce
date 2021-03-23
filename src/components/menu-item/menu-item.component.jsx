import React from 'react';
import './menu-item.styles.scss'


const MenuItem = ({ title, imgName, size }) => {

    return (
        <div className={`${size} menu-item`}>
            <div style={{ backgroundImage: `url(${imgName})` }}  className="background-image"></div>
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span>buy now</span>
            </div>
        </div>
    )

}

export default MenuItem;