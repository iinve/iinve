import ReactPlayer from 'react-player';
export function ProPlayer(props) {
  const { url, ...rest } = props;
  return <div className="rounded-3xl overflow-hidden w-full !h-[225px]">
    <ReactPlayer url={url || "https://www.youtube.com/watch?v=Rcv1WZt3P_E"} {...rest} width={'100%'} style={{ borderRadius: "20px" }} />
  </div>

}