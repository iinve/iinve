import Style from './InfoChip.module.scss'

const InfoChip = ({icon , name, isLeft}) => {
  return (
      <span className={`${Style.chip} ${isLeft && Style.left}`}>
        {icon}
        {name}
        </span>
  )
}

export default InfoChip
