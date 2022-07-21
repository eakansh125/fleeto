import React from 'react'
import { Navbar, SidebarLeft, SidebarRight, ChipNotification } from '../ResuablesImporter';

function Notification() {
  return (
    <div className='profile'>
    <Navbar />
    <div className='profile-content'>
      <SidebarLeft />
      
      <main className='profile-content-main'>
        <div className='profile-content-main-lt'>  
         
          <div className='text-align-start'>
            <h3>Notifications</h3>
          </div>

          <ChipNotification />
          <ChipNotification />
          <ChipNotification />
          <ChipNotification />
          <ChipNotification />
          </div>
        <SidebarRight />
    </main>
  </div>
</div>
  )
}

export default Notification