import { useRef, useEffect } from "react";

function Map({ inputs }) {
  const mapRef = useRef(null);

  useEffect(() => {
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer();
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 37.7749, lng: -122.4194 },
      zoom: 10,
    });
    directionsRenderer.setMap(map);

    const request = {
      origin: inputs[0].value,
      destination: inputs[inputs.length - 1].value,
      waypoints: inputs.map((destination) => ({ location: destination.value })),
      travelMode: "DRIVING",
    };

    directionsService.route(request, (result, status) => {
      if (status === "OK") {
        directionsRenderer.setDirections(result);
      }
    });
  }, [inputs]);

  return <div ref={mapRef} className="w-full h-screen" />;
}

export default Map;
