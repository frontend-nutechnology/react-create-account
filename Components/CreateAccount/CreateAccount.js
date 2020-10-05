import React from "react";
import s from "./CreateAccount.scss";

export default class RewardsOrderConfirmation extends React.Component {
  render() {
    return (
      <form className={s.createAccForm}>
        <h2>Create Account</h2>
        <div className={s.formField}>
          <label>Name</label>
          <input type="text" />
        </div>
        <div className={s.formField}>
          <label>E-mail (username)</label>
          <input type="text" />
        </div>
        <div className={s.formField}>
          <label>Password</label>
          <input type="text" />
        </div>
        <div className={s.formField}>
          <label>Confirm Password</label>
          <input type="text" />
        </div>
        <div className={s.formField}>
          <input type="button" value="Create Account" />
        </div>
      </form>
    );
  }
}
