import React from "react";
import "./Sidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from "./SidebarChat";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="https://pbs.twimg.com/profile_images/1283302395951243264/Rfq-bfLU_400x400.jpg" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon style={{ fill: "#B1B3B5" }} />
          </IconButton>
          <IconButton>
            <ChatIcon style={{ fill: "#B1B3B5" }} />
          </IconButton>
          <IconButton>
            <MoreVertIcon style={{ fill: "#B1B3B5" }} />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar__chats">
        <SidebarChat
          name="Anita Infy"
          desc="Anita is typing..."
          avatar="https://randomuser.me/api/portraits/women/26.jpg"
          read="#00AF9C"
        />
        <SidebarChat
          name="React Squad"
          desc="You: Whatsapp Dark Web is live"
          avatar="https://hackernoon.com/images/z2xg2bpo.jpg"
          read="#A9AAAC"
        />

        <SidebarChat
          name="Alex HBTF"
          desc="scheduled today's scrum call @6.00pm"
          avatar="https://randomuser.me/api/portraits/men/3.jpg"
          read="#A9AAAC"
        />

        <SidebarChat
          name="PNB Onsite team"
          desc="Someone is typing..."
          avatar="https://media.9curry.com/uploads/organization/image/479/pnb.png"
          read="#00AF9C"
        />
        <SidebarChat
          name="Infy Circle"
          desc="Bonus is here!!!"
          avatar="https://1000logos.net/wp-content/uploads/2020/08/Infosys-Logo.png"
          read="#A9AAAC"
        />
        <SidebarChat
          name="Paula HRD"
          desc="Get ready for the appraisal :D"
          avatar="https://randomuser.me/api/portraits/women/84.jpg"
          read="#A9AAAC"
        />
        <SidebarChat
          name="Mom"
          desc="Jevlas ka ?"
          avatar="https://randomuser.me/api/portraits/women/13.jpg"
          read="#00AF9C"
        />
        <SidebarChat
          name="Elon Musk"
          desc="Welcome to spaceX"
          avatar="https://p7.hiclipart.com/preview/124/1020/1006/elon-musk-tesla-motors-chief-executive-falcon-heavy-business-business.jpg"
          read="#A9AAAC"
        />
        <SidebarChat
          name="Mumbai Photographers"
          desc="Raj: Photowalk on this weekend?"
          avatar="https://www.sportsvideo.org/new/wp-content/uploads/2019/04/canon-512.png"
          read="#A9AAAC"
        />
      </div>
    </div>
  );
}

export default Sidebar;
