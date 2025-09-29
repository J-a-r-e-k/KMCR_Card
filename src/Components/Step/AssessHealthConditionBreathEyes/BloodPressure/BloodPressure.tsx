import NumberInput from '../../../Shared/NumberInput/NumberInput';
import WrapList from '../../../Shared/WrapList/WrapList';

const BloodPressure = () => {
    return (
        <WrapList title="CIŚNIENIE TĘTNICZE">
            <li>
                <NumberInput name='assessHealthConditionBreathEyes.bloodPressure.systolic' id='bloodPressure1' adornment='/' />
                <NumberInput name='assessHealthConditionBreathEyes.bloodPressure.diastolic' id='bloodPressure2' adornment='mm/Hg' />
            </li>
        </WrapList>
    )
}
export default BloodPressure