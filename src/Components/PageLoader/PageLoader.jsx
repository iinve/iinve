import Style from './PageLoader.module.scss'
const PageLoader = () => {
  return <div className={Style.loaderContainer}>
    <div className={Style.loader}></div>
  </div>
}
export default PageLoader
