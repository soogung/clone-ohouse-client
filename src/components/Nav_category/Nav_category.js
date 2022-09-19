import './Nav_category.scss';
import {Link} from "react-router-dom";
export default function Nav_category(props){
    return(
        <div className='nav-category-tit'>
            <div className='nav-category-list'>
                {props.category.map( c => {
                    <div>
                        <Link to ="">
                            <div>
                                <img className='category--image' src={c.iconImage} alt="category-img"/>
                            </div>
                            <div>
                                <a className='category--name' src={c.title} alt="category-title"/>
                            </div>
                        </Link>
                    </div>
                })}

    
            </div>

        </div>
    )
}                   
