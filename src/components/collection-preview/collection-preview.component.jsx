import React from "react";
import CollectionItem from "./collection-item/collection-item.component";
import "./collection-preview.styles.scss";
import { withRouter } from 'react-router-dom';



const CollectionPreview = ({ title, items, match, routeName, history }) => {
  console.log(history);
  return (
    <div className="collection-preview">
      <h1 onClick={() => history.push(`${match.path}/${routeName}`)} className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((items, index) => index < 4)
          .map((item) => {
            return <CollectionItem key={item.id} item={item} />;
          })}
      </div>
    </div>
  )
}

export default withRouter(CollectionPreview);
050711504