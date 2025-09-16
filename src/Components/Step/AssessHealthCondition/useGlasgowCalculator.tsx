import { useEffect } from 'react';
import { useFormikContext } from 'formik';
import { FullFormData } from '../../../context/AppContext';

export const useGlasgowCalculator = () => {
    const { values, setFieldValue } = useFormikContext<FullFormData>();
    const gcs = values.assessHealthCondition.gcs;
    useEffect(() => {
        const { reactWords, openingEyes, reakcjaMotoryczna } = gcs;

        if (reactWords && openingEyes && reakcjaMotoryczna) {
            const sumGcs = +reactWords + +openingEyes + +reakcjaMotoryczna;

            const gcsRts =
                sumGcs >= 13 && sumGcs <= 15
                    ? 4
                    : sumGcs >= 9 && sumGcs <= 12
                        ? 3
                        : sumGcs >= 6 && sumGcs <= 8
                            ? 2
                            : sumGcs >= 4 && sumGcs <= 5
                                ? 1
                                : sumGcs == 3
                                    ? 0
                                    : NaN;
            setFieldValue('assessHealthCondition.gcs.sumGcs', sumGcs);
            setFieldValue('assessHealthCondition.rts.gcs', gcsRts);
        }
    }, [gcs.reactWords, gcs.openingEyes, gcs.reakcjaMotoryczna, setFieldValue]);
}