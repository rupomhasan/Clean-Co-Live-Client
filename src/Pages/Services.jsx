import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import { iterate } from "localforage";
import ServiceCard from "../Components/Service/ServiceCard";

const Services = () => {
  const axios = useAxios();

  const getService = async () => {
    return await axios.get("/services");
  };

  const { data, isLoading } = useQuery({
    queryKey: ["service"],
    queryFn: getService,
  });
  console.log(data, isLoading);

  return (
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-5xl text-center font-bold  my-7">Our Service</h2>
      <p className="max-w-lg mx-auto text-center">
        Transform your space with our premium cleaning services.Let us handle
        the mess while you relax. Experience cleanliness redefined today!
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-5 my-10">
        {data?.data?.map((item, idx) => (
          <ServiceCard key={idx} service={item}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
