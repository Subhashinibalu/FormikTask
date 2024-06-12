import axios from "axios";
import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const EditDetails = ({ id }) => {
  const navigate = useNavigate(); // used for navigation purpose whereever required
  // initially the values need to be empty
  const [editdata, setEditData] = useState({
    id: "",
    Title: "",
    ISBN: "",
    DOP: "",
    Author: "",
    DOB: "",
    Bio: "",
  });

  useEffect(() => {
    fetchData();
  }, []);
  //The data which need to be edited is  fetched  inside use effect hook using the id of the data
  const fetchData = async () => {
    await axios
      .get(` https://6666aa8ca2f8516ff7a44d76.mockapi.io/api/library/${id}`)
      .then((result) => setEditData(result.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    formik.setValues(editdata);
  }, [editdata]);
  //the values which need to be updated should be in the form data field while the page is initially rendering pa
  //so that they can be updated later (for that reason useEffect hook is used here)
  const validationSchema = Yup.object().shape({});
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
    validationSchema,
    onSubmit: async (values) => {
      await axios
        .put(
          `https://6666aa8ca2f8516ff7a44d76.mockapi.io/api/library/${id}`,
          values
        )
        .then((result) => {
          result.data;
        })
        .catch((error) => console.log(error));
      navigate("/");
    },
  });

  return (
    <>
      <div className="container text-center  ">
        <div className="row  ">
          <h3 className="text-center editform text-white">EDIT FORM</h3>
          <br />
          {/* form to edit the details using useformik hook */}
          <form onSubmit={formik.handleSubmit}>
            <div className="row ms-auto me-auto">
              <label className="text-white">Title</label>
              <input
                type="text"
                className="col-12 text-center  mb-3 p-1 border-dark-subtle"
                name="Title"
                value={formik.values.Title}
                onChange={formik.handleChange}
              />

              <div className="text-danger">{formik.errors.Title}</div>
              <label className="text-white">ISBN</label>
              <input
                type="text"
                className="col-12 text-center  mb-3 p-1 border-dark-subtle"
                name="ISBN"
                value={formik.values.ISBN}
                onChange={formik.handleChange}
              />

              <div className="text-danger">{formik.errors.ISBN}</div>
              <label className="text-white">Date Of Publication</label>
              <input
                type="text"
                name="DOP"
                className="col-12 text-center  mb-3 p-1 border-dark-subtle "
                value={formik.values.DOP}
                onChange={formik.handleChange}
              />
              <div className="text-danger">{formik.errors.DOP}</div>

              <label className="text-white">Author Name</label>
              <input
                type="text"
                name="Author"
                className="col-12 text-center mb-3 p-1 border-dark-subtle"
                value={formik.values.Author}
                onChange={formik.handleChange}
              />
              <div className="text-danger">{formik.errors.Author}</div>
              <br />

              <label className="text-white">Author DOB</label>
              <input
                type="text"
                className="col-12 text-center  mb-3 p-1 border-dark-subtle"
                name="DOB"
                value={formik.values.DOB}
                onChange={formik.handleChange}
              />
              <div className="text-danger">{formik.errors.DOB}</div>
              <label className="text-white">Author Bio</label>
              <input
                type="text"
                name="Bio"
                className="col-12 text-center  mb-3 p-1 border-dark-subtle"
                value={formik.values.Bio}
                onChange={formik.handleChange}
              />

              <div className="text-danger">{formik.errors.Bio}</div>
              <div>
                <br />
                <button
                  className="btn btn-success col-sm-3 col-md-3 ms-auto me-auto col-lg-1 "
                  type="submit"
                >
                  update
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <br />
    </>
  );
};

export default EditDetails;
