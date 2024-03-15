import CountUp from "react-countup";
import Container from "../Components/UI/Container";

const Home = () => {
  return (
    <Container >
      <div className="md:flex items-center ">
        <div className="flex-1 space-y-4 text-center md:text-left mb-12">
          <h1 className=" text-3xl  md:text-4xl lg:text-6xl xl:text-7xl font-bold">
            Quality Cleaning <br />{" "}
            <span className="text-primary">For Your Home</span>
          </h1>
          <p>
            Cleanliness Redefined: Elevate Your Space with Clean Co.
            Professional Cleaning Services. Experience the Difference Today!
          </p>
          <div className=" flex flex-col md:flex-row gap-5">
            <button className="btn btn-primary hover:btn-success hover:text-white text-white">
              Explore More
            </button>
            <button className="btn text-white btn-error">Get Started</button>
          </div>
          <div className="avatar-group -space-x-10  flex justify-center md:justify-start rtl:space-x-reverse">
            <div className="avatar">
              <div className="w-16 object-cover">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-16">
                <img src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-16">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
            </div>
            <div className="avatar">
              <div className="w-16">
                <img src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" />
              </div>
            </div>
            <div className="avatar placeholder">
              <div className="w-16 bg-neutral text-neutral-content">
                <span className="text-xl font-bold">
                  +
                  <CountUp end={99} duration={5} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 w-full rounded-lg overflow-hidden">
          <img
            className="w-full h-[70vh]  object-cover"
            src="https://images.unsplash.com/photo-1580256081112-e49377338b7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNsZWFuaW5nJTIwY29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default Home;
