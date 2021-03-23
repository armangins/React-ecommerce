import React from 'react';
import MenuItem from '../menu-item/menu-item.component'
import './main-menu.style.scss'
import shirts from '../../assets/shirts.jpg'
import pants from '../../assets/pants.jpg'
import hats from '../../assets/hats.jpg'
import shoes from '../../assets/shoes.jpg'
import jackets from '../../assets/jackets.jpg'

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
                title: 'jackets',
                imgName: jackets,
                id: 12
            },
            {
                title: 'shoes',
                imgName: shoes,
                id: 6
            }
            ]

        }
    }


    render() {
        return (
            <div className="main-menu">
                {this.state.sections.map(({ title, id, imgName }) => {
                    return (
                        <MenuItem imgName={imgName} title={title} key={id} />
                    )
                })}
            </div>
        )

    }
}

export default MainMenu