import DetailPage from "./ProductDetailPage";
import DetailData from "./productDetail.json";
import './ProductDetailPage.scss';
import {useEffect, useState} from "react";
import {customAxios} from "../../config/axiosConfig";
import {useParams} from "react-router-dom";

export default function ProductDetail() {
    const {id} = useParams();
    const [product, setProduct] = useState({})

    const getData = async () => {
        try {
            const res = await customAxios.get(`/product/${id}`);
            setProduct({...res.data})
        } catch (error) {
            alert(error.response.data.status + ": " + error.response.data.message);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <section className="detailpage-section">
            {
                <DetailPage
                    deliverytype={product.delivery}
                    discountdegree={product.discountDegree}
                    images={product.images}
                    name={product.name}
                    productoption={product.productOption}
                />
            }
        </section>
    )
}
