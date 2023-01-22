import React from "react"
import { useFormik } from "formik"
import { logIn } from "../api/auth"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import * as Yup from "yup"

export default function LogInForm() {
    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Please enter your username"),
            password: Yup.string().required("Please enter your password"),
        }),
        onSubmit: (values) => {
            //console.log(logIn(values))
            logIn(values)
                .then((res) => {
                    console.log(res)
                    toast.success("Logged In Successfully ", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                })
                .catch((err) => {
                    //console.log(err.response.data.message)
                    toast.error(err.response.data.message, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    })
                })
            toast("User info submitted ", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        },
    })
    return (
        <div className="  flex flex-col justify-center items-center w-1/2 bg-white">
            <form className="flex flex-col" onSubmit={formik.handleSubmit}>
                <label htmlFor="username">User Name</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    className={`block w-full rounded border py-1 px-2 ${
                        formik.touched.username && formik.errors.username
                            ? "border-red-400"
                            : "border-blue-300"
                    }`}
                    onChange={formik.handleChange}
                    value={formik.values.username}
                />
                {formik.touched.username && formik.errors.username && (
                    <span className="text-red-400">
                        {formik.errors.username}
                    </span>
                )}
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    name="password"
                    type="text"
                    className={`block w-full rounded border py-1 px-2 ${
                        formik.touched.password && formik.errors.password
                            ? "border-red-400"
                            : "border-blue-300"
                    }`}
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
                {formik.touched.password && formik.errors.password && (
                    <span className="text-red-400">
                        {formik.errors.password}
                    </span>
                )}
                <button type="submit">Submit</button>
            </form>
            <ToastContainer />
        </div>
    )
}
