function VideoSection({props}:{props:{url:string}}) {
  return (
    <div className="w-3/4 h-3/4 rounded-lg shadow-lg drop-shadow-lg shadow-black bg-white">
        <video className="w-full h-auto" autoPlay loop muted>
            <source src={props.url} type="video/mp4" />
        </video>
    </div>
  );
}
export default VideoSection;