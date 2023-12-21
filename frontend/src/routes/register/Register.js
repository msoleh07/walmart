import React from "react";
import "./Register.css";

const Register = () => {
  return (
    <div className="register_page">
      <div className="register_form_container">
        <div className="register_form_container_header">
          <h2>Registration</h2>
        </div>
        <form>
          <div className="register_form_input_container">
            <label>First name</label>
            <input type="text" />
          </div>
          <div className="register_form_input_container">
            <label>Lest name</label>
            <input type="text" />
          </div>
          <div className="register_form_input_container">
            <label>Age</label>
            <input type="text" />
          </div>
          <div className="register_form_input_container">
            <label>Gender</label>
            <div className="register_form_input_gender_container">
              <div className="input_gender_container_item">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="input_border"
                />
                <label>Male</label>
              </div>
              <div className="input_gender_container_item">
                <input
                  type="radio"
                  name="gender"
                  value="woman"
                  className="input_border"
                />
                <label>Woman</label>
              </div>
            </div>
          </div>
          <div className="register_form_input_container">
            <label>User name</label>
            <input type="text" />
          </div>
          <div className="register_form_input_container">
            <label>Password</label>
            <input type="text" />
          </div>
          <div className="register_form_input_container">
            <label>Email</label>
            <input type="text" />
          </div>
          <div className="register_form_input_container">
            <label>Phone</label>
            <input type="number" />
          </div>
          <div className="register_form_input_container">
            <label>Address</label>
            <input type="text" />
          </div>
          <div className="register_form_input_container">
            <label>Role</label>
            <select>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
          </div>
          <div className="register_btn_container">
            <button>Register</button>
          </div>
        </form>
        <div className="register_text_container">
          <p>
            Already have an account? <span>Login now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
