import CardItem from "./CardItem/CardItem";

const JupiterCard = ({data}) => {
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 w-full">
    {data?.links?.map((item) => (
      <CardItem key={item.id} data={item} />
    ))}
  </div>
  
  )
}

export default JupiterCard
