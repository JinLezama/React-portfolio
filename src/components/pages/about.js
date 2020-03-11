import React from "react";
import profilePicture from "../../../static/assets/images/bio/bioimage.jpg"
import { convertFromHTML } from "draft-js";

export default function() {
  return (
  <div className="content-page-wrapper">
    <div 
      className="left-column"
      style={{
        background: "url(" + profilePicture + ") no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    />
    <div className="right-column">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      A ad quas labore harum nisi in perferendis nihil nobis eum est consequuntur,
       debitis asperiores reprehenderit soluta reiciendis placeat tempora nostrum fuga?
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum nobis, optio 
       possimus atque dolorem unde! Tempora nulla pariatur eligendi magnam, illum odit 
       repellat expedita consequatur veniam aspernatur provident adipisci aut.
       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa nulla tempora 
       molestiae minima labore suscipit libero corrupti architecto? Nulla veniam quo, 
       itaque voluptatum sit velit modi aliquam explicabo nihil error.
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor quo cupiditate, 
       blanditiis voluptatem, magni voluptate harum eligendi nostrum repudiandae asperiores 
       neque, nesciunt exercitationem fuga ipsa saepe deleniti dolore sed praesentium.
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quasi qui vitae i
    </div>
  </div>
  );
}