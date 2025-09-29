import Style from './Pupil.module.scss'
import WrapList from '../../../Shared/WrapList/WrapList';
import DualSidedChecklist from '../../../Shared/DualSidedChecklist/DualSidedChecklist';
import DualListItem from '../../../Shared/DualListItem/DualListItem';
import CustomCheckbox from '../../../Shared/CustomCheckbox/CustomCheckbox';

const Pupil = () => {
    return (
        <WrapList title="ŹRENICE">
            <DualSidedChecklist>
                <DualListItem description="prawidłowa">
                    <CustomCheckbox name="assessHealthConditionBreathEyes.pupil.normal.left" id="pupil1" />
                    <CustomCheckbox name="assessHealthConditionBreathEyes.pupil.normal.right" id="pupil2" />
                </DualListItem>
                <DualListItem description="powolna">
                    <CustomCheckbox name="assessHealthConditionBreathEyes.pupil.slow.left" id="pupil3" />
                    <CustomCheckbox name="assessHealthConditionBreathEyes.pupil.slow.right" id="pupil4" />
                </DualListItem>
                <DualListItem description="brak">
                    <CustomCheckbox name="assessHealthConditionBreathEyes.pupil.absent.left" id="pupil5" />
                    <CustomCheckbox name="assessHealthConditionBreathEyes.pupil.absent.right" id="pupil6" />
                </DualListItem>
                <p className={Style.description}>Reakcja na światło:</p>
                <DualListItem description="normalne">
                    <CustomCheckbox name="assessHealthConditionBreathEyes.pupil.regular.left" id="pupil7" />
                    <CustomCheckbox name="assessHealthConditionBreathEyes.pupil.regular.right" id="pupil8" />
                </DualListItem>
                <DualListItem description="wąskie">
                    <CustomCheckbox name="assessHealthConditionBreathEyes.pupil.narrow.left" id="pupil9" />
                    <CustomCheckbox name="assessHealthConditionBreathEyes.pupil.narrow.right" id="pupil10" />
                </DualListItem>
                <DualListItem description="szerokie">
                    <CustomCheckbox name="assessHealthConditionBreathEyes.pupil.wide.left" id="pupil11" />
                    <CustomCheckbox name="assessHealthConditionBreathEyes.pupil.wide.right" id="pupil12" />
                </DualListItem>
            </DualSidedChecklist>
        </WrapList >
    )
}
export default Pupil