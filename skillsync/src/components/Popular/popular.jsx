import React, { useEffect, useState } from "react";
import axios from "axios";
import "./popular.css";
import { CompanyCard } from "../CompanyCard/companyCard";

export const Popular = () => {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/displayData');
        setDataProduct(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="Popular">
      {dataProduct.map((item, i) => (
        <CompanyCard
          key={i}
          id={item.id}
          company_name={item.company_name}
          title={item.title}
          duration={item.duration}
          job_type={item.job_type}
          location={item.location}
        />
      ))}
    </div>
  );
};