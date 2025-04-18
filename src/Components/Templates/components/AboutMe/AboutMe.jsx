import ActionButton from "@/ProUI/ActionButton/ActionButton";

const AboutMe = ({ about, isLightMode, showButton, isCenter, connect }) => {
  const dummyData = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, rerum blanditiis.<br/><br/> Unde rerum placeat harum recusandae ipsum nisi dicta, quod ratione odit obcaecati quis tempore molestiae, quam aliquid fugiat necessitatibus.ß`
  return (
    <div className={`md:p-14 w-full p-6 mx-auto ${isCenter && "text-center"}`}>
      <p dangerouslySetInnerHTML={{ __html: about || dummyData }} className={`${isLightMode && 'text-black'} mb-10`}></p>
      {showButton && <ActionButton
        as="a"
        className="w-full"
        href={connect?.mode === "email"
            ? `mailto:${connect?.value}`
            : `https://wa.me/${connect?.value.replace(/\D/g, "")}` 
        }
        target="_blank"
        rel="noopener noreferrer"
        isDisabled={!connect?.value} 
      >
        Start Collaboration
      </ActionButton>
      }
    </div>
  )
}

export default AboutMe