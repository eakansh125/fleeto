import React from 'react'
import { Navbar, SidebarLeft, SidebarRight, Post } from '../ResuablesImporter';

function Bookmark() {
  return (
    <div className='profile'>
    <Navbar />
    <div className='profile-content'>
      <SidebarLeft />
      
      <main className='profile-content-main'>
        <div className='profile-content-main-lt'>  
         
          <div className='text-align-start'>
            <h3>Bookmarks</h3>
          </div>

          <Post />

          <Post />

          <Post />
          
          </div>
        <SidebarRight />
    </main>
  </div>
</div>
  )
}

export default Bookmark