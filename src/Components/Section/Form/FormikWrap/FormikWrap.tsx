import { Formik, FormikHelpers } from 'formik';
import { FormNavigation } from '../../FormNavigation/FormNavigation';

interface FormikWrapProps<T> {
    initialValues: T;
    onSubmit: (values: T, helpers: FormikHelpers<T>) => void | Promise<any>;
    children: React.ReactNode;
}

const FormikWrap = <T extends object>({
    initialValues,
    onSubmit,
    children,
}: FormikWrapProps<T>) => {
    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {({
                    handleSubmit,
                }) => (
                    <>
                        <form onSubmit={handleSubmit}>
                            {children}
                            <FormNavigation />
                        </form>
                    </>
                )}
            </Formik >
        </>
    );
};
export default FormikWrap;