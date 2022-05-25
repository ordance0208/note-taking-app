import { useLocation } from 'react-router-dom';

const PageTitle = () => {
  const pagePrefix = 'Noteify';
  const location = useLocation();

  // Removes the "/" from the string and capitalizes the first letter
  let formattedLocation = location.pathname.substring(1);
  formattedLocation = formattedLocation.charAt(0).toUpperCase() + formattedLocation.substring(1);

  document.title = `${pagePrefix} | ${formattedLocation}`;
  return <></>;
};

export default PageTitle;
