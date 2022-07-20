import React from 'react'
import { Link } from 'react-router-dom'

export default function SidebarLeft() {
  return (
    <div className='profile-content-sidebar'>
        <div className='profile-content-sidebar-item'>
          <Link to="/" href='Feed.js' className='btn-text width-l margin-tb-s  br-m font-bold'>Home</Link>
          <Link to="/login" className='btn-text width-l margin-tb-s br-m'>Explore</Link>
          <Link to="/bookmark" className='btn-text width-l margin-tb-s br-m'>Bookmarks</Link>
          <Link to="" className='btn-text width-l margin-tb-s br-m'>Notifications</Link>
          <Link to="/profile" className='btn-text width-l margin-t-0 br-m'>Profile</Link>
          <Link to="" class="btn-small width-xxl margin-tb font-s padding-m br-m">Create a post</Link>
        </div>
        
      </div>
  )
}
