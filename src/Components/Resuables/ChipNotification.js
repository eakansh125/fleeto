import React from 'react'

export default function ChipNotification() {
  return (
    <div className='profile-posts'>
              <div className='post margin-tb padding-m'>
              <div className='margin-lr'>
              <img src="https://img.icons8.com/ios-glyphs/50/8A1010/like--v1.png" alt='like'/>
              </div>
                
                <div class="avatar-small">
                  <img class="avatar-img" src="https://fleetui.netlify.app/img/australian-shepherd-g9fc9360d4_1920.jpg" alt="avatar" />
                </div>
                <div className='post-content padding-lr-m'>
                      <h3 className='font-bold'>Eakansh <span className='font-normal'>liked your post</span></h3>
                      {/* <h4 className='margin-t-0 font-normal text-align-start'>Liked your post</h4> */}
                </div>
              </div>
          </div>
  )
}
