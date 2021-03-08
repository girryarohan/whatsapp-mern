import { Avatar } from "@material-ui/core";
import React from "react";
import "./SidebarChat.css";

function SidebarChat({ name, desc, avatar, read }) {
  return (
    <div className="sidebarChat">
      {/* Avatar */}
      <Avatar className="chat__avatar" src={avatar} />
      {/* Chatinfo */}
      <div className="sidebarChat__info">
        <h2>{name}</h2>
        <p style={{ color: read }}>{desc}</p>
      </div>
    </div>
  );
}

export default SidebarChat;
