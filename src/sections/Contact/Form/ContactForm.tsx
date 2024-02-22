import s from "./ContactForm.module.css"
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

interface FormData {
    to_name: string;
    from_name: string;
    message: string;
}

const initialValues: FormData = {
    to_name: '',
    from_name: '',
    message: ''
};

const validationSchema = Yup.object().shape({
    to_name: Yup.string().required('Name is required'),
    from_name: Yup.string().email('Invalid email').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

const ContactForm = () => {

    const ref = useRef<HTMLFormElement | null>(null);
    const [sendingFormStatus, setSendingFormStatus] = useState<string>("")

    const handleSubmit = () => {
        if (ref.current) {
            emailjs
                .sendForm('service_1dap2zm', 'template_7vkjmy2', ref.current, {
                    publicKey: 'pnGJA-N4tf0Ejcsts',
                })
                .then(
                    () => {
                        setSendingFormStatus("success")
                    },
                    () => {
                        setSendingFormStatus("failed")
                    },
                );
        }
    }

    return (
        <div className={s.contact_form}>
            <div className={s.inner}>
                <div className={s.form_title}>CONTACT ME</div>
                <div>
                    {sendingFormStatus === ""
                        && (
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ isSubmitting, errors, touched }) => (
                                    <Form ref={ref} className={s.form}>
                                        <Field
                                            name="to_name"
                                            placeholder="NAME"
                                            className={`${s.input} ${errors.to_name && touched.to_name ? s.error_border : ''}`}
                                            type="text"
                                        />
                                        <Field
                                            placeholder="EMAIL"
                                            className={`${s.input} ${errors.from_name && touched.from_name ? s.error_border : ''}`}
                                            type="email"
                                            name="from_name" />


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
                        )}
                    {sendingFormStatus === "success"
                        && (
                            <div className={s.submitted_message}>
                                Your message is successfully submitted
                            </div>
                        )}
                    {sendingFormStatus === "failed"
                        && (
                            <div className={s.failed_message}>
                                Something went wrong, please try again later.
                            </div>
                        )}
                </div>
            </div>
            <div className={s.green_element}></div>
        </div>
    )
}

export default ContactForm;