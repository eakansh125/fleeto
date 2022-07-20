import React from 'react'
import ChipFollow from './ChipFollow'

function SidebarRight() {
  return (
    <div className='profile-content-main-rt'>
            <input class="input-outlined width-xl margin-t-m" type="text" placeholder="Search" />
            <div className='rt-body width-xl'>
              <div>
                <div className='text-align-start'>
                  <h3>Follow suggestions</h3>
                </div>
                <div>
                  <ChipFollow />
                  <ChipFollow />
                  <ChipFollow />
                 
                </div>
              </div>
            </div>
        </div>
  )
}

export default SidebarRight