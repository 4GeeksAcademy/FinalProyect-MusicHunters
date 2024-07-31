import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { Context } from "../store/appContext";
import { NavbarUser } from "../component/navbarUser";
import { Profile } from "../component/profile";

export const EditProfile = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const inputValue = (e) => {
    const { name, value } = e.target;
    setDataContact((prevDataContact) => ({
      ...prevDataContact,
      [name]: value,
    }));
  };
  const [dataContact, setDataContact] = useState({
    photo: store.user.photo ? store.user.photo : "",
    userName: store.user.userName ? store.user.userName : "",
    name: store.user.name ? store.user.name : "Name",
    lastName: store.user.lastName ? store.user.lastName : "Last name",
    emailAdress: store.user.email ? store.user.email : "",
    phoneNumber: store.user.phoneNumber
      ? store.user.phoneNumber
      : "Phone number",
    address: store.user.address ? store.user.address : "Addres",
  });

  const handleAddContact = (event) => {
    event.preventDefault();

    actions.editUser(
      dataContact.photo,
      store.user.id,
      dataContact.userName,
      dataContact.name,
      dataContact.lastName,
      dataContact.phoneNumber,
      dataContact.address
    );
    setDataContact({
      userName: dataContact.userName,
      name: dataContact.name,
      lastName: dataContact.lastName,
      emailAdress: dataContact.emailAdress,
      phoneNumber: dataContact.phoneNumber,
      adress: dataContact.address,
    });
  };
  const [image, setImage] = useState(null); //Para guardar imagen de usuario

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <NavbarUser />
      <h1 className="text-center register-header mb-3">Edit Profile</h1>
      <form className="mx-auto" onSubmit={handleAddContact}>
        <div className="file-input-container mb-3 mt-3">
          <input
            type="file"
            id="user-img-input"
            className="user-img-input"
            onChange={handleImageChange}
            style={{ display: "none" }} // Oculta el input de archivo
          />
          <label htmlFor="user-img-input" className="custom-file-upload">
            {image ? (
              <img
                src={image}
                alt="User Profile"
                className="user-img-preview"
              />
            ) : (
              <p
                className="upload-img-letters"
                style={{ color: "#000000", fontStyle: "bold" }}
              >
                Upload Image{" "}
              </p>
            )}
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">
            User Name
          </label>
          <input
            onChange={inputValue}
            type="text"
            className="form-control mb-3"
            id="userName"
            name="userName"
            aria-describedby="userName"
            placeholder="Enter a new user name"
            value={dataContact.userName}
          />

          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={inputValue}
            type="text"
            className="form-control mb-3"
            id="name"
            name="name"
            aria-describedby="name"
            placeholder="Enter your name"
            value={dataContact.name}
          />

          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            onChange={inputValue}
            type="text"
            className="form-control mb-3"
            id="lastName"
            name="lastName"
            aria-describedby="lastName"
            placeholder="Enter your last name"
            value={dataContact.lastName}
          />

          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            onChange={inputValue}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="emailAdress"
            aria-describedby="emailHelp"
            placeholder="example@email.com"
            value={dataContact.emailAdress}
            readOnly
          />

          <div id="emailHelp" className="form-text">
            You can't change your email.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Phone number
          </label>
          <input
            onChange={inputValue}
            type="tel"
            className="form-control"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="612345678"
            value={dataContact.phoneNumber}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="adress" className="form-label">
            Adress
          </label>
          <input
            onChange={inputValue}
            type="text"
            className="form-control"
            id="address"
            name="address"
            placeholder="Main St 123"
            value={dataContact.address}
          />
        </div>

        <div className="form-buttons d-flex justify-content-between">
          {/* <Link to="/homeUser/:id"> */}
          <button
            type="submit"
            className="btn btn-warning"
            // onClick={() => actions.register()}
          >
            Update
          </button>
          {/* </Link> */}
          <Link to="/userProfile">
            <button type="button" className="btn btn-dark">
              Back
            </button>
          </Link>
        </div>
      </form>
    </>
  );
};
