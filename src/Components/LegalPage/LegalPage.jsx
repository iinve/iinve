import Header from "../Header/Header";

const LegalPage = ({ data }) => {
  return (
    <>
    <Header/>
    <div className="pt-[120px] terms_conditions w-full min-h-screen ">
      <div className="terms_container w-full md:w-3/5  p-8  mx-auto">
        {data?.main_heading && (
          <h2 className="text-2xl	font-bold text-justify">
            {data?.main_heading}
          </h2>
        )}
        {data?.discription && (
          <p className="text-md md:text-lg py-3">{data?.discription}</p>
        )}
        <ul className="p-8 ">
          {data.main_content.map((point, i) => (
            <li key={i} className="!list-disc py-2">
              <h4 className="text-xl	font-bold	">{point.heading}</h4>
              <p className="content text-lg text-justify">{point.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
};

export default LegalPage