import { Formik } from 'formik';
import { useAppContext } from '../../../context/AppContext';
import { FormNavigation } from '../../Section/FormNavigation/FormNavigation';
import EventNumber from './EventNumber/EventNumber';
import AutoSave from '../../Utils/AutoSave/AutoSave';
import TimeIncident from './TimeIncident/TimeIncident';
import PlaceIncident from './PlaceIncident/PlaceIncident';
import ProviderDetails from './ProviderDetails/ProviderDetails';

const IncidentData = () => {
  const appContext = useAppContext();
  return (
    <>
      <Formik
        initialValues={appContext.incidentData}
        onSubmit={(value, { setSubmitting }) => {
          setSubmitting(false);
          appContext.setIncidentData(value);
        }}
      >
        {({
          handleSubmit,
        }) => (
          <>
            <form onSubmit={handleSubmit}>
              <AutoSave onSave={appContext.setIncidentData} />
              <EventNumber />
              <TimeIncident />
              <PlaceIncident />
              <ProviderDetails />
              <FormNavigation />
            </form>
          </>
        )}
      </Formik >
    </>
  );
};
export default IncidentData;
