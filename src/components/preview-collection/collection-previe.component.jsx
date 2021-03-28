import React from 'react';

const PreviewCollection = ({ title, items }) => {

    return (
        <div className="preview-collection">
            <h1 className="title">{title}</h1>
            <div className="preview">
                {items.filter((items, index) => index < 4).map(item => (
                    <div className="" key={item.id} >
                        {item.name}
                    </div>
                )
                )}
            </div>

        </div>
    )
}

export default PreviewCollection