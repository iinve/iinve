import Style from './ProHeading.module.scss'
const ProHeading = (props) => {
  const {children, className} = props
  return <h1 className={`${className} ${Style.heading}`}>{children}</h1>
}

export default ProHeading