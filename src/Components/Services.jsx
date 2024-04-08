import React from "react";
import Service from "./Service";
import { Heading } from "@chakra-ui/react";

const Services = () => {
  // Dummy service data
  const servicesData = [
    { serviceName: "1 day food tour in Dombivli", price: 20 },
    { serviceName: "Guided city tour", price: 30 },
    { serviceName: "Adventure trekking", price: 50 },
    { serviceName: "Scuba diving experience", price: 80 },
    { serviceName: "Photography workshop", price: 40 },
    { serviceName: "Wine tasting event", price: 25 },
  ];

  return (
    <div>
      <Heading sz="sm" p={2}>
        Services
      </Heading>
      {servicesData.map((service, index) => (
        <Service
          key={index}
          serviceName={service.serviceName}
          price={service.price}
        />
      ))}
    </div>
  );
};

export default Services;
