import React, { useState } from "react";
import "./Login_hide.scss";

export default function Login_hide() {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <div className="order-inquiry-div">
        <button
          className="order-inquiry-button"
          type="button"
          onClick={() => setShow(true)}
        >
          비회원 주문 조회하기
        </button>
      </div>

      {show && (
        <>
          <div className="ordernum-inquiry-div">
            <input
              type="text"
              placeholder="주문번호"
              className="order-number-input"
            ></input>
          </div>
          <div className="email-inquiry-input">
            <input
              type="text"
              placeholder="이메일"
              className="order-number-input"
            ></input>
          </div>
          <div className="login-button-div">
            <button className="login-button">주문조회</button>
          </div>
        </>
      )}
      <div className="copyright-div">
        <p>© bucketplace, Co., Ltd.. All Rights Reserved</p>
      </div>
    </>
  );
}
