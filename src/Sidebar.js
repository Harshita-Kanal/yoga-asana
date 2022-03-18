import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';
import {SearchOutlined} from '@material-ui/icons';
import {Avatar} from '@material-ui/core'

function Sidebar() {
    return ( 
        <div className = 'sidebar' >
            <div className='sidebar_header'>
                <Avatar />

            </div>

            <div className='sidebar_search'>
                <div className='sidebar_searchContainer'>
                    <SearchOutlined />
                    <input type='text' placeholder='Search or start new chat'></input>
                </div>
            </div>

            <div className='sidebar_chats'>
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar