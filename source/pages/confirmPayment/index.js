import React from "react";
import browser from "webextension-polyfill";
import { createHashHistory } from "history";

// import "./styles.scss";

class ConfirmPayment extends React.Component {
  constructor(props) {
    super(props);
    this.history = createHashHistory();
    this.state = {};
  }

  enable() {
    return browser.runtime.sendMessage({
      response: true,
      data: { confirm: true },
    });
  }

  reject() {
    return browser.runtime.sendMessage({
      response: true,
      error: "User rejected",
    });
  }

  render() {
    return (
      <section id="confirm-payment">
        <button onClick={() => this.enable()}>Confirm</button>
        <br />
        <button onClick={() => this.reject()}>Reject</button>
      </section>
    );
  }
}

export default ConfirmPayment;