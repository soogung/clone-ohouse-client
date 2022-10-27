import './ProductDetailPage.scss';
import {useEffect, useState} from "react";
import {customAxios} from "../../config/axiosConfig";
import {useParams} from "react-router-dom";

export default function ProductDetail() {
    const {id} = useParams();
    const [selectedImageUri, setSelectedImageUri] = useState('');
    const [product, setProduct] = useState({
        delivery: {},
        discountDegree: 0,
        images: [{
            imageUri: ''
        }],
        name: '',
        productOption: []
    })

    const getData = async () => {
        try {
            const res = await customAxios.get(`/product/${id}`);
            setProduct({...res.data})
            setSelectedImageUri(res.data.images[0].imageUri)
        } catch (error) {
            alert(error.response.data.status + ": " + error.response.data.message);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <section className="detailpage-section">
            <section className='detail-page-section'>
                <div className='detail-page-left'>
                    <div className='detail-page-left-small-picture'>
                        {
                            product.images.map(i => (
                                <img
                                    src={i.imageUri}
                                    alt='product'
                                    className={selectedImageUri === i.imageUri ? 'selected' : ''}
                                    onClick={() => setSelectedImageUri(i.imageUri)}
                                />
                            ))
                        }
                    </div>
                    <div className="detail-page-left-selected-image">
                        <img src={selectedImageUri} alt='selected-product-img'/>
                    </div>
                </div>
                <div className='detailpage-back'>
                    <div>
                        <span>{product.name}</span>
                        <div>
                            <div>
                                <svg className="icon--stroke" aria-label="스크랩" width="24" height="24"
                                     fill="currentColor"
                                     stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24"
                                     preserveAspectRatio="xMidYMid meet">
                                    <path
                                        d="M11.53 18.54l-8.06 4.31A1 1 0 0 1 2 21.97V3.5A1.5 1.5 0 0 1 3.5 2h17A1.5 1.5 0 0 1 22 3.5v18.47a1 1 0 0 1-1.47.88l-8.06-4.31a1 1 0 0 0-.94 0z"/>
                                </svg>
                                <span>23,999</span>
                            </div>
                            <div>
                                <svg className="icon" aria-label="공유하기" width="24" height="24" viewBox="0 0 24 24"
                                     fill="currentColor" preserveAspectRatio="xMidYMid meet">
                                    <path
                                        d="M9.64 14.646a4.5 4.5 0 1 1 0-5.292l4.54-2.476a4.5 4.5 0 1 1 .63.795l-4.675 2.55c.235.545.365 1.146.365 1.777s-.13 1.232-.365 1.777l4.675 2.55a4.5 4.5 0 1 1-.63.795l-4.54-2.476zM18 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM6 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM18 23a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                </svg>

                            </div>
                        </div>
                        <div>

                        </div>
                        <div>
                            <span>
                                <span>{product.discountDegree}%</span>
                                <span>3,992</span>
                                <span>3,123</span>
                            </span>
                        </div>
                        <div>
                            <span>이름</span>

                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
