import CustomRadio from '../../../Shared/CustomRadio/CustomRadio';
import NumberInput from '../../../Shared/NumberInput/NumberInput';
import WrapList from '../../../Shared/WrapList/WrapList';
import RadioNodeList from '../../../Shared/RadioListItem/RadioListItem';

const Pulse = () => {
    return (
        <WrapList title="TĘTNO">
            <li>
                <NumberInput name='assessHealthConditionBreathEyes.pulse' id='pulse1' adornment='/min' />
            </li>
            <RadioNodeList description="Miarowe">
                <CustomRadio name='assessHealthConditionBreathEyes.heartRhythm' value="Regular" id='heartRhythm1' />
            </RadioNodeList>
            <RadioNodeList description="Niemiarowe">
                <CustomRadio name='assessHealthConditionBreathEyes.heartRhythm' value="Irregular" id='heartRhythm2' />
            </RadioNodeList>
        </WrapList>
    )
}
export default Pulse