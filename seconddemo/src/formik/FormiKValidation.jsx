// import React from "react";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const myvalidation = Yup.object({
//   name: Yup.string()
//     .max(15, "Must be 15 characters or less")
//     .required("Filled column Required")
//     .matches(),
//   email: Yup.string()
//     .max(20, "Must be 20 characters or less")
//     .required("Required"),
//   confireEmail: Yup.string()
//     .required("Required")
//     .oneOf([Yup.ref("email"), null], "email should be martch"),
//   number: Yup.string()
//     .email("Invalid email address")
//     .required("Required")
//     .matches(/^[6-9][0-9]{9} $/),
// });

// const FormiKValidation = () => {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       number: "",
//       conforeemail: "",
//     },
//     validationSchema: myvalidation,
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });
//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name : </label>
//           <input
//             id="name"
//             name="name"
//             type="name"
//             className="form-control"
//             onChange={formik.handleChange}
//           />
//           {formik.touched.name && formik.errors.name ? (
//             <div className="alert alert-danger">{formik.errors.name}</div>
//           ) : null}
//           <br />
//         </div>
//         <div className="form-group">
//           <label htmlFor="email">Email Address</label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             className="form-control"
//             onChange={formik.handleChange}
//           />{" "}
//           <br />
//         </div>
//         <div className="form-group">
//           <label htmlFor="conforeemail"> confore Email Address</label>
//           <input
//             id="conforeemail"
//             name="conforeemail"
//             type="conforeemail"
//             className="form-control"
//             onChange={formik.handleChange}
//           />{" "}
//           <br />
//         </div>

//         <div className="form-group">
//           <label htmlFor="number">Phone Number:</label>
//           <input
//             id="number"
//             name="number"
//             type="number"
//             className="form-control"
//             onChange={formik.handleChange}
//           />{" "}
//           <br />
//         </div>
//         <button type="submit" className="btn btn-success">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FormiKValidation;
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { data } from "@remix-run/router";
const myvalidation = Yup.object({
  fullname: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Filled column Required")
    .matches(/^[a-zA-Z]{1,15}$/, "fill ja"),
  email: Yup.string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  confimemail: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("email"), null], "email should be martch"),
  mobile: Yup.string()
    .required("Required")
    .matches(/^[6-9][0-9]{9} $/, "Moblie number"),
});

const FormiKValidation = () => {
  const formik = useFormik({
    initialValues: { fullname: "", email: "", mobile: "", confimemail: "" },
    validationSchema: myvalidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div>
      <h2 className="text-center">Formikvalidation</h2>
      <form action="#" onSubmit={formik.handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name:</label>
          <input
            type="text"
            className="form-control"
            name="fullname"
            onChange={formik.handleChange}
          />
          {formik.touched.fullname && formik.errors.fullname ? (
            <div>{formik.errors.fullname}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="confimemail">Confime Email:</label>
          <input
            type="email"
            className="form-control"
            name="confimemail"
            onChange={formik.handleChange}
          />
          {formik.touched.confimemail && formik.errors.confimemail ? (
            <div>{formik.errors.confimemail}</div>
          ) : null}
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="mobile"
            className="form-control"
            name="mobile"
            onChange={formik.handleChange}
          />
          {formik.touched.mobile && formik.errors.mobile ? (
            <div>{formik.errors.mobile}</div>
          ) : null}
        </div>
        <div className="form-group p-8">
          <input type="submit" className="btn btn-success " />
        </div>
      </form>
    </div>
  );
};

export default FormiKValidation;
