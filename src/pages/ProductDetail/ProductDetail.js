import "./ProductDetail.scss";
import DetailData from './productDetail.json';
import {useContext, useState} from "react";
import {CartContext, UserContext} from "../../App";
import {useParams} from "react-router-dom";
// import {getProductDetailById} from "./getProductDetailService";
// import {checkObjectIsEmpty} from "../../utils/checkObjectIsEmpty";

export default function ProduceDetail(props) {

    

    return (
        <section className="detail-section">
            <div>{props.name}</div>
        </section>
    )
}
