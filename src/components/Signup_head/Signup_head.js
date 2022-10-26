import "./Signup_head.scss";
import {Link} from "react-router-dom";
import {SmallLogo} from "../common/Logo";
import {Facebook, KakaoTalk, Naver} from "../Login/Sns";

export default function Signup_head() {
    return (
        <>
            <div className="signup-logo-div">
                <Link to="/">
                    <SmallLogo/>
                </Link>
            </div>
            <div className="signup-div">
                <div>
                    <h1 className="siginup-h1">회원가입</h1>
                </div>
                <div className="signup-p">
                    <p>SNS계정으로 간편하게 회원가입</p>
                </div>
                <div className="sns-icon">
                    <div className="sns-item">
                        <Facebook/>
                    </div>
                    <div className="sns-item">
                        <KakaoTalk/>
                    </div>
                    <div className="sns-item">
                        <Naver/>
                    </div>
                </div>
                <div className="icon-endline-div"/>
            </div>
        </>
    );
}
