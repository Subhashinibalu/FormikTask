import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = ({setId}) => {
  const [deleteData, setDeleteData] = useState([]);

  const [details, setDetails] = useState([]);

  const navigate = useNavigate(); //for navigation purpose
  // fetching the data inside useEffect hook
  useEffect(() => {
    fetchData(); //function call for fetching data
  }, [deleteData,details]);
  //to re-render the page after deleting deledata is given inside this dependency array

  //function for fetching data
  const fetchData = async () => {
    await axios
      .get("https://6666aa8ca2f8516ff7a44d76.mockapi.io/api/library")
      .then((result) => setDetails(result.data))
      .catch((error) => console.log(error));
  };
  //This function is written for edit button. 
  //This function set the id of which data need to be edited and navigated to the edit page to edit that data(which has the passed id)
  const handleEdit = (id) => {
    setId(id);
    navigate(`/editdetails/:${id}`);
  };

  //This is the function written for delete button , 
  //its function is deleting the particular data using the id value
  const handleDelete = async (id) => {
    await axios
      .delete(
        `
        https://6666aa8ca2f8516ff7a44d76.mockapi.io/api/library/${id}`
      )
      .then((result) => setDeleteData(result.data))
      .catch((error) => console.log(error));
  };
    return (
        
        <>
         <div className="container side-nav">
          <h2 className="text-center mt-5 text-white">Details of Book And its Authors</h2>
        <div className="row row-cols-lg-3 row-cols-xl-4 row-cols-md-2 row-cols-1 d-flex justify-content-center align-items-center mt-5">
          {details.map((element, index) => {
            return (
              <div key={index}>
                <div
                  className="card  mt-3 ms-auto me-auto"
                  style={{ width: "18rem", height:"30rem"}}
                >
                 
                  <div className="card-body">
                    <p className="card-title fw-bold mb-3 fs-6 text-center ">
                      {element.Title} 
                    </p>
                    <hr />
                   
                   
                    <p className="contact">
                      <span className="bolder">
                        {" "}
                        Author<i className="bi bi-pen-fill"></i> :{" "}
                      </span>{" "}
                      <span className="small  ">
                        {" "}
                        {element.Author}
                      </span>{" "}
                    </p>
                    <p className="contact">
                      <span className="bolder ">
                        ISBN :{" "}
                      </span>{" "}
                      <span className="small  "> {element.ISBN}</span>{" "}
                    </p>
                    <p className="contact">
                      <span className="bolder ">
                        Published On :{" "}
                      </span>{" "}
                      <span className="small  "> {element.DOP}</span>{" "}
                    </p>
                   
                    <hr />
                    <p className="text-center workdetail ">
                      Author Details <i className="bi bi-person-vcard"></i>
                    </p>
                    <p className="small ">
                    {element.Bio}
                    </p>
<hr/>
                  </div>
                  <div className="d-flex justify-content-between ms-3 me-3 mb-4 cardend small ">
                    {/* 
    onclicking the edit button handleEdit function is called and id is passed as parameter to achieve the required action */}
                    <button
                      className="btn edit"
                      onClick={() => handleEdit(element.id)}
                    >
                      Edit <i className="bi bi-pencil-square"></i>
                    </button>

                    {/* onclicking the delete button handleDelete function is called and id is passed as parameter to achieve the required action */}
                    <button
                      className="btn  delete"
                      onClick={() => {
                        handleDelete(element.id);
                      }}
                    >
                      Delete <i className="bi bi-trash3"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
               
        </>
    );
};

export default Home;