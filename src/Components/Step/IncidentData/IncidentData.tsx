import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';
import EventNumber from './EventNumber/EventNumber';
import TimeIncident from './TimeIncident/TimeIncident';
import PlaceIncident from './PlaceIncident/PlaceIncident';
import ProviderDetails from './ProviderDetails/ProviderDetails';

const IncidentData = () => {
  return (
    <>
      <EventNumber />
      <TimeIncident />
      <PlaceIncident />
      <ProviderDetails />
      <FormNavigation />
    </>
  );
};
export default IncidentData;



