import React, {useState} from "react";
import "./Login_hide.scss";

export default function Login_hide({show}) {
    return (
        <>
            {show && (
                <>
                    <div className="ordernum-inquiry-div">
                        <input
                            type="text"
                            placeholder="주문번호"
                            className="order-number-input"
                        />
                    </div>
                    <div className="email-inquiry-input">
                        <input
                            type="text"
                            placeholder="이메일"
                            className="order-number-input"
                        />
                    </div>
                    <div className="login-button-div">
                        <button className="login-button">주문조회</button>
                    </div>
                    )}
                </>
            )}
        </>
    )
}
