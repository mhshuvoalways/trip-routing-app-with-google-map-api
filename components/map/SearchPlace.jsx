import { SearchBox } from "@mapbox/search-js-react";

function SearchPlace({ autoCompleteHandler, item }) {
  return (
    <SearchBox
      accessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      value={item.value}
      onRetrieve={(value) => autoCompleteHandler(value, item.id)}
    />
  );
}

export default SearchPlace;
