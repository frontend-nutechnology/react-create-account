import React from "react";
import "./CreateAccount.css";

export default class RewardsOrderConfirmation extends React.Component {
  render() {
    return (
      <form className="createAccForm">
        {/*<div>Display validation Errors here</div>*/}
        {/*<div>Display Success Message with form data</div>*/}
        <h2>Create Account</h2>
        <div className="formField">
          <label>Name:</label>
          <input type="text" />
        </div>
        <div className="formField">
          <label>E-mail (username):</label>
          <input type="text" />
        </div>
        <div className="formField">
          <label>Password:</label>
          <input type="password" />
          <div class="showPasswordBlock">
            <label>
              <input type="checkbox" /> Show Password
            </label>
          </div>
        </div>
        <div className="formField">
          <label>Confirm Password:</label>
          <input type="text" />
        </div>
        <div className="formField submitbtn">
          <input type="button" value="Create Account" />
        </div>
      </form>
    );
  }
}
