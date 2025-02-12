import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import localforage from "localforage";
import { toast } from "react-toastify";

const TicketForm = ({ onSubmit }) => {
  // Validation Schema
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    avatar: Yup.string().url("Must be a valid URL").required("Avatar URL is required"),
  });

  return (
    <Formik
      initialValues={{ fullName: "", email: "", avatar: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        // Save to IndexedDB
        localforage.setItem("ticketData", values);
        toast.success("Ticket Generated!");
        onSubmit(values);
        resetForm();
      }}
    >
      {({ values }) => (
        <Form className="form-container">
          <label htmlFor="fullName">Full Name</label>
          <Field type="text" name="fullName" id="fullName" />
          <ErrorMessage name="fullName" component="div" className="error" />

          <label htmlFor="email">Email Address</label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" component="div" className="error" />

          <label htmlFor="avatar">Avatar URL (Accepts only Cloudinary)</label>
          <Field type="url" name="avatar" id="avatar" />
          <ErrorMessage name="avatar" component="div" className="error" />

          <button type="submit">Generate Ticket</button>
        </Form>
      )}
    </Formik>
  );
};

export default TicketForm;