import { Field } from 'formik';
import Style from './Recommendations.module.scss'

const Recommendations = () => {
    return (
        <div className={Style.wrapRecommendations}>
            <p className={Style.title}>ZALECENIA / UWAGI:</p>
            <Field
                className={Style.text}
                name="recommendations"
                as="textarea"
            />
        </div>
    )
}
export default Recommendations