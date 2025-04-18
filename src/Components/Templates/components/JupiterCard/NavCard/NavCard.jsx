import React from 'react'
import Style from './NavCard.module.scss'

const NavCard = () => {
  return (
    <div className={Style.navigations}>
      <ul>
        <li>All</li>
        <li>Connect</li>
        <li>Highlights</li>
      </ul>
      <div className={Style.blur_two}></div>
      <div className={Style.blur_blue}></div>
    </div>
  )
}

export default NavCard
