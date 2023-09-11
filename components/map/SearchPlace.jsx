// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function LocationAutocomplete() {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [selectedResultIndex, setSelectedResultIndex] = useState(-1);

//   const handleInputChange = async (e) => {
//     const inputValue = e.target.value;
//     setQuery(inputValue);

//     try {
//       const response = await axios.get(
//         `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`
//       );
//       const features = response.data.features;
//       setResults(features);
//       console.log(response.data);
//       setSelectedResultIndex(-1);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleKeyDown = (e) => {
//     if (e.key === "ArrowDown" && selectedResultIndex < results.length - 1) {
//       setSelectedResultIndex(selectedResultIndex + 1);
//     } else if (e.key === "ArrowUp" && selectedResultIndex > 0) {
//       setSelectedResultIndex(selectedResultIndex - 1);
//     }
//   };

//   useEffect(() => {
//     if (results.length > 0 && selectedResultIndex !== -1) {
//       const selectedResult = results[selectedResultIndex];
//       setQuery(selectedResult.place_name);
//     }
//   }, [selectedResultIndex, results, query]);

//   return (
//     <>
//       <input
//         type="text"
//         placeholder="Enter a location"
//         value={query}
//         onChange={handleInputChange}
//         onKeyDown={handleKeyDown}
//         className="bg-[#EFF0F2] p-2 rounded-xl text-[#747678] outline-0 focus:ring w-full"
//       />
//       <ul
//         className={
//           results.length &&
//           "top-12 w-full border absolute bg-white rounded shadow-2xl"
//         }
//       >
//         {results.map((result, index) => (
//           <li
//             key={result.id}
//             className={
//               index === selectedResultIndex
//                 ? "bg-[#EFF0F2] py-1 px-2 border-b rounded"
//                 : "py-1 px-2 border-b"
//             }
//           >
//             {result.place_name}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default LocationAutocomplete;

import { useState } from "react";
import { SearchBox } from "@mapbox/search-js-react";

function SearchPlace() {
  const [value, setValue] = useState("test");
  
  return (
    <SearchBox
      accessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      value=""
      marker={true}
    />
  );
}

export default SearchPlace;
