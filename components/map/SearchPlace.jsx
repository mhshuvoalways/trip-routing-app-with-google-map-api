import { useState } from "react";
import { SearchBox } from "@mapbox/search-js-react";

function SearchPlace({ autoCompleteHandler, itemId }) {
  const [value, setValue] = useState("test");

  return (
    <SearchBox
      accessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      value=""
      marker={true}
      onRetrieve={(value) =>
        autoCompleteHandler(value.features[0].properties.full_address, itemId)
      }
    />
  );
}

export default SearchPlace;
