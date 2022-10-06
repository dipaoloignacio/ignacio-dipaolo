import React from 'react';
import { useState, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import emailjs from '@emailjs/browser';

function Contact() {
    const [formSend, setFormSend] = useState(false);
    const form = useRef<any>();

    const sendEmail = () => {
        emailjs.sendForm('nachobeatbox', 'template_ap8quob', form.current, '_96mtxYTIA0BDQxuw')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <section className="contact" id="contact">
                <h1>Contacto</h1>
                <hr />

                <div className="content">

                    <div className="form">

                        <Formik
                            initialValues={{
                                from_name: '',
                                email: '',
                                message: ''
                            }}
                            validate={(values) => {
                                let errores: any = {}
                                if (!values.from_name) {
                                    errores.from_name = 'el nombre no puede estar vacio'
                                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.from_name)) {
                                    errores.from_name = 'el nombre solo puede contener letras y espacios.'
                                }
                                if (!values.email) {
                                    errores.email = 'ingresa un correo'
                                } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
                                    errores.email = 'correo invalido'
                                }
                                if (!values.message) {
                                    errores.message = 'ingresa un mensaje'
                                }
                                return errores;
                            }}
                            onSubmit={(values, { resetForm }) => {
                                resetForm();
                                sendEmail();
                                setFormSend(true);
                                setTimeout(() => setFormSend(false), 4000);
                            }}
                        >
                            {
                                ({ errors }) => (
                                    <Form action="#" method="post" ref={form}>

                                        <Field
                                            name="from_name" id="your-name" placeholder="Nombre..." />
                                        <ErrorMessage name='from_name' component={() => (
                                            <div style={{ color: '#ff0000' }}>{errors.from_name}</div>
                                        )} />

                                        <Field name="email" id="your-email" placeholder="Email..." />
                                        <ErrorMessage name='email' component={() => (
                                            <div style={{ color: '#ff0000' }}>{errors.email}</div>
                                        )} />

                                        <Field as="textarea" id="message" name="message" placeholder="Mensaje..." />
                                        <ErrorMessage name='message' component={() => (
                                            <div style={{ color: '#ff0000' }}>{errors.message}</div>
                                        )} />

                                        <div>
                                            <button type="submit" value="Send" className='button'><span>Enviar</span></button>
                                        </div>
                                        {formSend ? <p className='text-center mt-3' style={{ color: 'rgb(102, 238, 113)' }}>Correo enviado con exito</p> : ''}
                                    </Form>
                                )
                            }
                        </Formik>
                    </div>


                    <div className="contact-text">

                        Podes contactarme a través de este formulario<br /><br />

                        Asegurate de poner correctamente tu email<br />
                        y todos los datos al enviar.<br /><br />

                        <strong>Soy Ignacio Di Paolo</strong><br /><br />

                        e-mail: <strong>nachobeatbox@gmail.com</strong>

                    </div>


                </div>

            </section>
        </div>
    )
}

export default Contact