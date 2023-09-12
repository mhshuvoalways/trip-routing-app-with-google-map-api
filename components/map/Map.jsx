import { MyContext } from "@/context/Context";
import { useContext, useEffect, useRef } from "react";

function Map({ inputs }) {
  const mapRef = useRef(null);

  const { isLoaded } = useContext(MyContext);

  useEffect(() => {
    if (isLoaded) {
      const directionsService = new window.google.maps.DirectionsService();
      const directionsRenderer = new window.google.maps.DirectionsRenderer();
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 14,
      });
      directionsRenderer.setMap(map);
      const request = {
        origin: { location: inputs[0].location },
        destination: { location: inputs[inputs.length - 1].location },
        waypoints: inputs.map((item) => ({
          location: item.location,
        })),
        travelMode: "DRIVING",
      };
      directionsService.route(request, (result, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(result);
        }
      });
    }
  }, [inputs, isLoaded]);

  return <div ref={mapRef} className="w-full h-screen" />;
}

export default Map;
