import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    
        <div class="nav-header">
            <div class="nav-header-div">
            <div class="nav-header-div-lt">
      <a class="text-dec-none font-bold margin-lr font-primary-color" href="/">Fleeto</a>
      {/* <a class="text-dec-none font-bold margin-lr font-primary-color" href="/">Docs</a>
      <a class="text-dec-none font-bold margin-lr font-primary-color" href="/">About</a>
      <a class="text-dec-none font-bold margin-lr font-primary-color" href="/">Blogs</a> */}
    </div>
    <div class="nav-header-div-mid">
      <input class="input-outlined width-full" type="text" placeholder="Search" />
    </div>
    <div class="nav-header-div-rt">                    
      <a href="/"><img class="margin-lr"
            src="https://img.icons8.com/ios-glyphs/30/user-male-circle.png" alt="icon"/>
        </a>              
    </div>            
  </div>                
</div>
    
  )
}

export default Navbar