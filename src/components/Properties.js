import React, { useEffect, useState } from "react";
import sanityClient from '../client';

export default function Properties() {
  const [allProperties, setAllProperties] = useState(null);
  useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "property"]{
      title,
      price,
      province,
    }`
			)
			.then((data) => setAllProperties(data))
			.catch(console.error);
	}, []);
  console.log(allProperties);
  return (
    <>
      {allProperties?.map(property => {
        return(
          <div>{property.title} | {property.price} | {property.province}</div>
        )
      })}
    </>
  );
}