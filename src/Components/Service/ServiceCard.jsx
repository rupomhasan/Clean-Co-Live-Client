import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  console.log(service);
  const { _id, serviceName, servicePrice, serviceImg } = service;
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <figure>
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{serviceName}</h2>
          <div className=" flex justify-between items-center">
            <p className="text-xl font-bold">{servicePrice}</p>
            <button className="btn btn-primary btn-sm text-white">
              Buy Now <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
