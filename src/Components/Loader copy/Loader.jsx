import Style from './Loader.module.scss'

const Loader = ({width, height}) => {
  return (
    <div class={Style.loader} style={{'--width': width, '--height':height}}>
    </div>


  )
}

export default Loader