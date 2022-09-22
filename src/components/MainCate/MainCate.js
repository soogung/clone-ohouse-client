import {Link} from "react-router-dom";
import './MainCate.scss';
export default function MainCate(props){
    return(
            <div className="MainCate-bigdiv">
                <nav className="Main-Cate-bignav">
                    <ul className="Main-Cate-one-block-bigul">
                        <li className="Main-Cate-one-block">
                            <a className="Main-a">
                                <div className="Main-Cate-one-block-image">
                                    <img className="Main-Cate-one-block-img-img" src={props.image}/>
                                </div>
                                <div className="Main-Cate-one-block-name">
                                    <span>{props.name}</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

    )
}