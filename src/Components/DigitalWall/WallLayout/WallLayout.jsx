'use client'
import { WallLogo } from '../WallLogo/WallLogo'
import Style from './WallLayout.module.scss'

const WallLayout = ({ children, background }) => {
  return (
    <div className={Style.WallLayout} style={{ '--backgroundColor': background }}>
      <div className={Style.badge}>
        <WallLogo width={120} height={120} />
      </div>
      {children}

      {/* footer drawer */}
      <div className={Style.footer}>
        {/* <WallLogo width={120} height={120} /> */}
        <h1 className='text-black'>Logo of the company</h1>
        <button>Contact us</button>
      </div>
    </div>
  )
}

export default WallLayout