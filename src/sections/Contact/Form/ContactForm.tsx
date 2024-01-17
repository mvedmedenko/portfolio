import s from "./ContactForm.module.css"
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const initialValues: FormData = {
    name: '',
    email: '',
    message: ''
};

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

const ContactForm = () => {

    const handleSubmit = (values: FormData) => {
        console.log(values)
    }

    return (
        <div className={s.contact_form}>
            <div className={s.inner}>
                <div className={s.form_title}>CONTACT WITH ME</div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form className={s.form}>
                        <Field
                            name="name"
                            placeholder="NAME"
                            className={`${s.input} ${errors.name && touched.name ? s.error_border : ''}`}
                            type="text"
                        />
                        <Field
                            placeholder="EMAIL"
                            className={`${s.input} ${errors.email && touched.email ? s.error_border : ''}`}
                            type="email"
                            name="email" />


                        <Field
                            placeholder="MESSAGE"
                            className={`${s.textarea} ${errors.message && touched.message ? s.error_border : ''}`}
                            as="textarea"
                            name="message" />

                        <div className={s.btn_box}>
                            <button className={s.send_btn} type="submit" disabled={isSubmitting}>
                                SEND
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
            </div>
            <div className={s.green_element}></div>
        </div>
    )
}

export default ContactForm;