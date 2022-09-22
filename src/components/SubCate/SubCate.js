import {Link} from "react-router-dom";
import './SubCate.scss';
export default function Sub(props){
    return(
            <div className="SubCate-bigdiv">
                <nav className="Sub-Cate-bignav">
                    <ul className="Sub-Cate-one-block-bigul">
                        <li className="Sub-Cate-one-block">
                            <a className="Sub-a">
                                <div className="Sub-Cate-one-block-image">
                                    <img className="Sub-Cate-one-block-img-img" src={props.image}/>
                                </div>
                                <div className="Sub-Cate-one-block-name">
                                    <span>{props.name}</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>

    )
}