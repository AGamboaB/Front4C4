import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const DetalleUsuarios = () => {
    const formik = useFormik({
        initialValues: {
            id: '',
            identification: '',
            birthtDay: '',
            monthBirthtDay: '',
            mescumpleaños: '',
            address: '',
            cellPhone: '',
            email: '',
            password: '',
            zone: '',
            type: '',
        },
        validationSchema: Yup.object({
            id: Yup.number()
                .min(1, 'Debes agregar un número')
                .required('El id es obligatorio'),
            identification: Yup.number()
                .min(1, 'Debes Identificarte')
                .required('La identificacion es obligatoria'),
            name: Yup.string()
                .min(1, 'Debes escribir tu nombre')
                .required('El mombre es obligatorio'),


        }),
        onSubmit: datos => {

            console.log(datos);

        }
    });

    return (
        <>

            <h1 className="text-3xl font-light mb-4">Detalle Usuarios</h1>
            <div className="flex justify-center mt-10">
                <div className="w-full max-w-3xl">
                    <form

                    >
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">ID</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="id"
                                type="number"
                                placeholder="ID "
                                value={formik.values.id}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                            />

                        </div>
                        {formik.touched.id && formik.errors.id ? (
                            <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5' role='alert'>
                                <p activeclassname='font-bold'>Hubo un error:</p>
                                <p>{formik.errors.id} </p>
                            </div>
                        ) : null}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Identificación</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="identification"
                                type="text"
                                placeholder="Identification "
                                value={formik.values.identificacion}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                            />
                        </div>
                        {formik.touched.identification && formik.errors.identification ? (
                            <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5' role='alert'>
                                <p activeclassname='font-bold'>Hubo un error:</p>
                                <p>{formik.errors.identification} </p>
                            </div>
                        ) : null}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Nombre</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Nombre "
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}

                            />
                        </div>
                        {formik.touched.name && formik.errors.name ? (
                            <div className='bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5' role='alert'>
                                <p activeclassname='font-bold'>Hubo un error:</p>
                                <p>{formik.errors.name} </p>
                            </div>
                        ) : null}

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Fecha Cumpleaños</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="birthtDay"
                                type="date"
                                placeholder="Fecha de cumpleaños "

                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Mes de cumpleaños</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="monthBirthtDay"
                                type="number"
                                placeholder="Mes de cumpleaños "

                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Dirección</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="address"
                                type="text"
                                placeholder="Dirección "

                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Teléfono</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="cellPhone"
                                type="number"
                                placeholder="Telefono "

                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">E-mail</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Correo electrónico "

                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Contraseña</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Contraseña "

                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Zona</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="zone"
                                type="text"
                                placeholder="Zona "

                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">Tipo de Usuario</label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="type"
                                type="text"
                                placeholder="Tipo de usuario "

                            />
                        </div>
                        <input
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="Agregar usuario"
                        />
                    </form>
                </div>
            </div>
        </>
    );
}

export default DetalleUsuarios;
