import React from 'react'

export default function Post() {
  return (
    <div className='profile-posts'>
              <div className='post margin-tb padding-m'>
                <div class="avatar-small">
                  <img class="avatar-img" src="https://fleetui.netlify.app/img/australian-shepherd-g9fc9360d4_1920.jpg" alt="avatar" />
                </div>
                <div className='post-content padding-lr-m'>
                      <h3 className='margin-t-0 font-bold'>Eakansh</h3>
                      <h4 className='margin-t-0 font-normal text-align-start'>Application Development Analyst @Accenture | 
                      Creator of wide variety of industry level applications | Tweets about Javascript, 
                      React and sings in his free time. <br/><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h4>
                      
                      <div class="post-buttons">
                        <img className='btn-hover-primary br-m padding-m' src="https://img.icons8.com/ios/18/000000/like--v1.png" alt="like"/>
                        <img className='btn-hover-primary br-m padding-m' src="https://img.icons8.com/ios/18/000000/comments.png" alt="comment"/>
                        <img className='btn-hover-primary br-m padding-m' src="https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/18/000000/external-share-interface-royyan-wijaya-detailed-outline-royyan-wijaya.png" alt="share" />
                        <img className='btn-hover-primary br-m padding-m' src="https://img.icons8.com/ios/18/000000/bookmark-ribbon--v1.pn" alt='bookmark'/>
                      </div>
  
                </div>
              </div>
          </div>
  )
}
