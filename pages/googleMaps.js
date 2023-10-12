// googleMaps.js
const googleMapsScript = document.createElement('script');
googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places&callback=initAutocomplete`;
googleMapsScript.async = true;
document.head.appendChild(googleMapsScript);
