import React from "react";
import "./SidebarRow.css";
import { Avatar } from "@material-ui/core";

function SidebarRow({ src, Icon, title }) {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src}/>} 
            {/* if there is a source prop then we going to render out an avatar with the source being used as the source we prop in */}
            {Icon && <Icon/>}        
            {/* you can pass the component as a prop  so no import needed, but capital letter required */}
            <h4>{title}</h4>
            
        </div>
    );
}

export default SidebarRow

//rfce fuctional component