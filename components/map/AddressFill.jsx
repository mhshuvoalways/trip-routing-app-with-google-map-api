import { AddressAutofill } from "@mapbox/search-js-react";

function AddressFill() {
  return (
    <AddressAutofill accessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}>
      <input
        autoComplete="shipping address-line1"
        onChange={(e) => setValue(e.target.value)}
        className="bg-[#EFF0F2] rounded-xl text-[#747678] p-2 outline-0 focus:ring w-full"
        placeholder="Address"
      />
    </AddressAutofill>
  );
}

export default AddressFill;
