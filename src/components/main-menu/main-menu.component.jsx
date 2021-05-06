import React from 'react';
import MenuItem from './menu-item/menu-item.component'
import './main-menu.styles.scss'
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
                id: 1,
                linkURL: ''
            },

            {
                title: 'shirts',
                imgName: shirts,
                id: 2,
                linkURL: '',

            },
            {
                title: 'hats',
                imgName: hats,
                id: 14,
                linkURL: 'hats',
            },
            {
                title: 'men',
                imgName: male,
                id: 12,
                size: 'large',
                linkURL: '',
            },
            {
                title: 'women',
                imgName: female,
                id: 6,
                size: 'large',
                linkURL: '',
            }
            ]

        }
    }


    render() {
        return (
            <div className="main-menu">
                {this.state.sections.map(({ id, ...sectionProps }) => {
                    return (
                        <MenuItem key={id} {...sectionProps} />
                    )
                })}
            </div>
        )
    }
}

export default MainMenu