
import Header from "Components/Header/Header"
import MainFooter from "Components/MainFooter/MainFooter"

const layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="pt-[150px]">
        {children}
      </div>
      <MainFooter />
    </>
  )
}

export default layout