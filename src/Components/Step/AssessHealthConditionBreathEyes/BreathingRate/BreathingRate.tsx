
import Style from './BreathingRate.module.scss'
import CustomRadio from '../../../Shared/CustomRadio/CustomRadio'
import { Field } from 'formik';
import CustomCheckbox from '../../../Shared/CustomCheckbox/CustomCheckbox';
import WrapList from '../../../Shared/WrapList/WrapList';
import DualSidedChecklist from '../../../Shared/DualSidedChecklist/DualSidedChecklist';
import DualListItem from '../../../Shared/DualListItem/DualListItem';
import NumberInput from '../../../Shared/NumberInput/NumberInput';


const BreathingRate = () => {
    return (
        <WrapList>
            <ul>
                <li>
                    <NumberInput name='assessHealthConditionBreathEyes.respiratorySystem.respiratoryRate' id='respiratory1' label='częstość oddechów' adornment='/min' />
                </li>
                <DualListItem description="duszność">
                    <CustomRadio name="assessHealthConditionBreathEyes.respiratorySystem.dyspnea" value="yes" id="dyspneaYes">TAK</CustomRadio>
                    <CustomRadio name="assessHealthConditionBreathEyes.respiratorySystem.dyspnea" value="no" id="dyspneaNo" >NIE</CustomRadio>
                </DualListItem>
                <DualListItem description="sinica">
                    <CustomRadio name="assessHealthConditionBreathEyes.respiratorySystem.cyanosis" value="yes" id="cyanosisYes" >TAK</CustomRadio>
                    <CustomRadio name="assessHealthConditionBreathEyes.respiratorySystem.cyanosis" value="no" id="cyanosisNo" >NIE</CustomRadio>
                </DualListItem>
                <DualListItem description="bezdech">
                    <CustomRadio name="assessHealthConditionBreathEyes.respiratorySystem.apnea" value="yes" id="apneaYes" >TAK</CustomRadio>
                    <CustomRadio name="assessHealthConditionBreathEyes.respiratorySystem.apnea" value="no" id="apneaNo" >NIE</CustomRadio>
                </DualListItem>
            </ul>
            <DualSidedChecklist >
                <DualListItem description="szmer prawidłowy ">
                    <CustomCheckbox name="respiratorySystem.normalBreathSounds.left" id="s1" />
                    <CustomCheckbox name="respiratorySystem.normalBreathSounds.right" id="s2" />
                </DualListItem>
                <DualListItem description="furczenie">
                    <CustomCheckbox name="respiratorySystem.wheezing.left" id="s3" />
                    <CustomCheckbox name="respiratorySystem.wheezing.right" id="s4" />
                </DualListItem>
                <DualListItem description="świsty">
                    <CustomCheckbox name="respiratorySystem.whistling.left" id="s5" />
                    <CustomCheckbox name="respiratorySystem.whistling.right" id="s6" />
                </DualListItem>
                <DualListItem description="trzeszczenie">
                    <CustomCheckbox name="respiratorySystem.crepitation.left" id="s7" />
                    <CustomCheckbox name="respiratorySystem.crepitation.right" id="s8" />
                </DualListItem>
                <DualListItem description="rzężenie">
                    <CustomCheckbox name="respiratorySystem.rales.left" id="s9" />
                    <CustomCheckbox name="respiratorySystem.rales.right" id="s10" />
                </DualListItem>
                <DualListItem description="brak szmeru">
                    <CustomCheckbox name="respiratorySystem.noBreathSounds.left" id="s11" />
                    <CustomCheckbox name="respiratorySystem.noBreathSounds.right" id="s12" />
                </DualListItem>
                <DualListItem description="inne:">
                    <CustomCheckbox name="respiratorySystem.otherSounds.left" id="s13" />
                    <CustomCheckbox name="respiratorySystem.otherSounds.right" id="s14" />
                </DualListItem>
                <Field
                    className={Style.breathDifferent}
                    name="respiratorySystem.otherSounds.description"
                    placeholder="Inne"
                    type="text"
                />
                <li>
                    <NumberInput name='respiratorySystem.oxygenSaturation' id='oxygenSaturation1' label='Saturacja' adornment='%' />
                </li>
            </DualSidedChecklist>
        </WrapList>
    )
}
export default BreathingRate