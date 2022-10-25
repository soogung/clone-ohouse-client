import DetailPage from "./ProductDetailPage";
import DetailData from "./productDetail.json";
import './ProductDetailPage.scss';
export default function ProduceDetail() {

    return (
        <section className="detailpage-section">  
             {
                        DetailData.data.map(d => (
                            <DetailPage
                                deliverytype={d.delivery}
                                discountdegree={d.discountDegree0}
                                images={d.images}
                                name={d.name}
                                productOption={d.productOption}
                            />
                        ))
                    }
        </section>
    )
}
