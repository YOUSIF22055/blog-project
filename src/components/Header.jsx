import React from 'react'
import {images} from "../constants"

const Header = () => {
  return (
   <section>
    <header>
      <div>
        <img src={images.Logo} alt="logo" />
      </div>
    </header>
   </section>
  )
}

export default Header