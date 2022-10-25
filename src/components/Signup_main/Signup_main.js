import "./Signup_main.scss";
import { Link } from "react-router-dom";

export default function Signup_main() {
  return (
    <>
      <div className="signup-div">
        <h1 className="signup-email-h1">이메일</h1>
        <div className="email-form">
          <span>
            <input
              type="email"
              placeholder="이메일"
              className="front-emailform-div"
            ></input>
          </span>
          <span className="golbang-e">@</span>
          <span>
            <select className="email-end-select">
              <option value="" disabled>
                선택해주세요.
              </option>
              <option value="1">naver.com</option>
              <option value="2">hanmail.net</option>
              <option value="3">daum.net</option>
              <option value="4">gmail.com</option>
              <option value="5">nate.com</option>
              <option value="6">hotmail.com</option>
              <option value="7">outlock.com</option>
              <option value="8">icloud.com</option>
              <option value="input">직접입력</option>
            </select>
          </span>
        </div>
        <button className="email-certify-button">이메일 인증하기</button>
        <h1 className="signup-pswd-h1">비밀번호</h1>
        <p className="signup-pswd-p">
          영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
        </p>
        <div className="pswd-input-div">
          <input
            type="password"
            placeholder="비밀번호"
            className="pswd-input"
          />
        </div>
        <h1 className="signup-pswd-h1">비밀번호 확인</h1>
        <div className="pswd-input-div">
          <input
            type="password"
            placeholder="비밀번호 확인"
            className="pswd-input"
          />
        </div>
        <h1 className="signup-pswd-h1">닉네임</h1>
        <p className="signup-pswd-p">
          다른 유저와 겹치지 않도록 입력해주세요 (2~15자)
        </p>
        <div className="pswd-input-div">
          <input
            type="password"
            placeholder="별명 (2~15자)"
            className="pswd-input"
          />
        </div>
        <h1 className="signup-pswd-h1">약관동의</h1>
        <div className="agreed-term-div">
          <label>
            <input type="checkbox" className="signup-term-input"></input>{" "}
            전체동의
          </label>
        </div>
      </div>
    </>
  );
}
