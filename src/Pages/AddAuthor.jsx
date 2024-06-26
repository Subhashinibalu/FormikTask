// importing
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// function to post the data to the api

const AddAuthor = () => {
  const navigate = useNavigate();
  // formik declaration
  const formik = useFormik({
    initialValues: {
      id: "",
      Title: "",
      ISBN: "",
      DOP: "",
      Author: "",
      DOB: "",
      Bio: "",
    },
    validationSchema: Yup.object({
      Title: Yup.string().required("Title is required"),
      ISBN: Yup.string().required("ISBN is required"),
      DOP: Yup.string().required("DOP is required"),
      Author: Yup.string().required("Author is required"),
      DOB: Yup.string().required("DOB is required"),
      Bio: Yup.string().required("Bio is required"),
    }),
    onSubmit: async (values) => {
      try {
        let res = await axios.post(
          `https://6666aa8ca2f8516ff7a44d76.mockapi.io/api/library`,
          values
        );
        if (res.status === 201) {
          navigate("/authorinfo");
        }
      } catch (error) {
        console.error("Error creating user:", error);
      }
    },
  });

  return (
    <>
      <div className="container mt-5">
        <h2 className="form-title text-white">Add Author Details</h2>
        <div className="card p-4">
          {/* form to get the details of the book which need to be added */}
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Author Name</label>
              <input
                type="text"
                className="form-control"
                name="Author"
                value={formik.values.Author}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter the Author Name"
              />
              <div className="text-danger">{formik.errors.Author}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Author Birth Date</label>
              <input
                type="date"
                className="form-control"
                name="DOB"
                value={formik.values.DOB}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Author's Birth Date"
              />
              <div className="text-danger">{formik.errors.DOB}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Author Bio</label>
              <input
                type="text"
                className="form-control"
                name="Bio"
                value={formik.values.Bio}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter Author's Bio"
              />
              <div className="text-danger">{formik.errors.Bio}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Famous Book </label>
              <input
                type="text"
                className="form-control"
                name="Title"
                value={formik.values.Title}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter a Famous Book of the Author"
              />
              <div className="text-danger">{formik.errors.Title}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">ISBN Number</label>
              <input
                type="text"
                className="form-control"
                name="ISBN"
                value={formik.values.ISBN}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter the ISBN number of the Famous Book"
              />
              <div className="text-danger">{formik.errors.ISBN}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Date Of Publication</label>
              <input
                type="date"
                className="form-control"
                name="DOP"
                value={formik.values.DOP}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Select date of publication"
              />
              <div className="text-danger">{formik.errors.DOP}</div>
            </div>

            <button type="submit" className="btn btn-primary">
              AddAuthor
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddAuthor;
