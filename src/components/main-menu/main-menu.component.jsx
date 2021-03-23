import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './main-menu.style.scss'
import shirts from '../../assets/shirts.jpg'
import pants from '../../assets/pants.jpg'
import hats from '../../assets/hats.jpg'
import male from '../../assets/male.jpg'
import female from '../../assets/female.jpg'


class MainMenu extends React.Component {

    constructor() {
        super()

        this.state = {

            sections: [{
                title: 'pants',
                imgName: pants,
                id: 1
            },

            {
                title: 'shirts',
                imgName: shirts,
                id: 2
            },
            {
                title: 'hats',
                imgName: hats,
                id: 14
            },
            {
                title: 'men',
                imgName: male,
                id: 12,
                size:'large'
            },
            {
                title: 'women',
                imgName: female,
                id: 6,
                size: 'large'
            }
            ]

        }
    }


    render() {
        return (
            <div className="main-menu">
                {this.state.sections.map(({ title, id, imgName,size }) => {
                    return (
                        <MenuItem size={size} imgName={imgName} title={title} key={id} />
                    )
                })}
            </div>
        )

    }
}

export default MainMenu