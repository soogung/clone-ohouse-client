import DetailPage from "./ProductDetailPage";
import DetailData from "./productDetail.json";
import './ProductDetailPage.scss';
export default function ProductDetail() {

    return (
        <section className="detailpage-section">
            {
                DetailData.data.map(d => (
                    <DetailPage
                        deliverytype={d.delivery}
                        discountdegree={d.discountDegree}
                        images={d.images}
                        name={d.name}
                        productoption={d.productOption}
                    />
                ))
            }
        </section>
    )
}
