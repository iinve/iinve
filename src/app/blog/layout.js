import Header from 'Components/Header/Header'
import MainFooter from 'Components/MainFooter/MainFooter'

const layout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
      <MainFooter />
      </div>
  )
}

export default layout