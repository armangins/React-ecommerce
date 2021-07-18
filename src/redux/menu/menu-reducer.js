import shirts from '../../assets/shirts.jpg';
import pants from '../../assets/pants.jpg';
import hats from '../../assets/hats.jpg';
import male from '../../assets/male.jpg';
import female from '../../assets/female.jpg';


const INIT_STATE = {
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

const menuReducer = (state = INIT_STATE,action)=>{

    switch(action.type){
        default:
            return state;
    }
}

export default menuReducer;