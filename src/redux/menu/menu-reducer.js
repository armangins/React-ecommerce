import hats from "../../assets/hats.jpg";
import male from "../../assets/male.jpg";
import female from "../../assets/female.jpg";

const INIT_STATE = {
  sections: [
    {
      title: "Sneakers",
      imgName: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
      id: 72622,
      linkURL: "shop/sneakers",
    },

    {
      title: "Jackets",
      imgName: "https://i.ibb.co/XzcwL5s/black-shearling.png",
      id: 2,
      linkURL: "shop/jackets",
    },
    {
      title: "Hats",
      imgName: hats,
      id: 14,
      linkURL: "shop/hats",
    },
    {
      title: "Men",
      imgName: male,
      id: 12,
      size: "large",
      linkURL: "shop/mens",
    },
    {
      title: "Women",
      imgName: female,
      id: 6,
      size: "large",
      linkURL: "shop/womens",
    },
  ],
};

const menuReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default menuReducer;
