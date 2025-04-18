import Style from './ProHeading.module.scss'
const ProHeading = (props) => {
  const {children, className} = props
  return <h2 className={`${className} ${Style.heading}`}>{children}</h2>
}

export default ProHeading