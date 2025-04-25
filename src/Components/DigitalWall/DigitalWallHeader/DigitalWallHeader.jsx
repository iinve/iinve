import { WallLogo } from "../WallLogo/WallLogo"
import Style from "./DigitalWallHeader.module.scss"

export const DigitalWallHeader= () => {
  return (
    <div className={Style.digital_wall_header}>
    <WallLogo width={100} height={100} />
  </div>
  )
}