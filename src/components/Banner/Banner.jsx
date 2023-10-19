
const Banner = () => {

return (
<div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.ibb.co/qd7xJcc/banner3.jpg)'}}>
  <div className="hero-overlay bg-opacity-10"></div>
  <div className="hero-content  text-neutral-content">
    <div className=" lg:pl-[700px]">
    <div className="max-w-md ">
      <h1 className="mb-5 text-5xl font-bold">The New Brand</h1>
      <p className="mb-5">The New Brand is more than just a car; it s a symbol of innovation, style, and cutting-edge technology in the automotive world.</p>
      <button className="btn btn-secondary capitalize">read more ..</button>
    </div>
    </div>
  </div>
</div>
 );
};

export default Banner;