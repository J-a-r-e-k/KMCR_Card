import Style from './AssessHealthCondition.module.scss';
import { useFormikContext } from 'formik';
import { useGlasgowCalculator } from './useGlasgowCalculator';
import {
  openingEyesOptions,
  verbalResponseOptions,
  motorResponseOptions
} from './gcsConstants';
import GcsCategory from './GcsCategory';
import { FullFormData } from '../../../context/AppContext';

const AssessHealthCondition = () => {
  useGlasgowCalculator()
  const { values } = useFormikContext<FullFormData>();
  return (
    <>
      <div className={Style.wrapGlasgow}>
        <h2>GLASGOW-COMA-SCALE</h2>
        <GcsCategory
          title="OTWIERANIE OCZU"
          name="assessHealthCondition.gcs.openingEyes"
          options={openingEyesOptions}
        />
        <GcsCategory
          title="REAKCJA SŁOWNA"
          name="assessHealthCondition.gcs.reactWords"
          options={verbalResponseOptions}
        />
        <GcsCategory
          title="REAKCJA RUCHOWA"
          name="assessHealthCondition.gcs.reakcjaMotoryczna"
          options={motorResponseOptions}
        />
        <div className={`${Style.wrapCheck} ${Style.wrapSum}`}>
          <p>SUMA:</p>
          <p className={Style.sumCheck}>{values.assessHealthCondition.gcs.sumGcs}</p>
        </div>
      </div>
    </>
  );
};
export default AssessHealthCondition;
