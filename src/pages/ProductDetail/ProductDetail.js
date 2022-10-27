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
            <div className='detail-page-section'>
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
                <div className='detailpage-right'>
                    <div className='detail-right'>
                        <p><span className='deatil-product-company'>{product.company}</span></p>
                        <p><span className='deatil-product-name'>{product.name}</span></p>
                        <div className='detail-product-header-button'>
                            <div className='detali-product-bookmark'>
                                <p><svg className="icon--stroke" aria-label="스크랩" width="24" height="24"
                                     fill="currentColor"
                                     stroke="currentColor" strokeWidth="0.5" viewBox="0 0 24 24"
                                     preserveAspectRatio="xMidYMid meet">
                                    <path
                                        d="M11.53 18.54l-8.06 4.31A1 1 0 0 1 2 21.97V3.5A1.5 1.5 0 0 1 3.5 2h17A1.5 1.5 0 0 1 22 3.5v18.47a1 1 0 0 1-1.47.88l-8.06-4.31a1 1 0 0 0-.94 0z"/>
                                </svg></p>
                                <p><span className='bookmark-num'>23,999</span></p>
                            </div>
                            <div className='detial-product-share'>
                                <svg className="icon" aria-label="공유하기" width="24" height="24" viewBox="0 0 24 24"
                                     fill="currentColor" preserveAspectRatio="xMidYMid meet">
                                    <path
                                        d="M9.64 14.646a4.5 4.5 0 1 1 0-5.292l4.54-2.476a4.5 4.5 0 1 1 .63.795l-4.675 2.55c.235.545.365 1.146.365 1.777s-.13 1.232-.365 1.777l4.675 2.55a4.5 4.5 0 1 1-.63.795l-4.54-2.476zM18 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM6 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM18 23a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                </svg>

                            </div>
                        </div>
                        <div className='product-detail-price-discount'>
                            {product.isDiscount ? 
                                <span className='product-detail-price'>
                                    <div className='discoutprice-top'>
                                        <span className='product-detail-discountpercent'>{product.discountDegree}</span>
                                        <span className='product-detail-realprice'>{product.price.toLocaleString()}원</span>
                                    </div>
                                    <span className='product-detail-discountprice'><span className='price-jabchae'>{product.discountPrice.toLocaleString()}</span>원</span>
                                </span>
                            : 
                                <span className='product-detail-price-price-two'>
                                    {/* <span className='product-detail-realprice'><span className='price-jabchae'>{product.price.toLocaleString()}</span>원</span> */}
                                </span>
                            }
                           
                        </div>
                        <p className='hr-detail'><hr /></p>
                        <div className='jaepum-choice'>
                            <svg width="24" height="24" fill="none" preserveAspectRatio="xMidYMid meet"><path d="M3.972 8.694c0-.26.212-.472.472-.472h12.278a.472.472 0 010 .945H4.444a.472.472 0 01-.472-.473z" fill="#35C5F0"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M17.51 5.5H6.492a1 1 0 00-.93.632l-.99 2.5A1 1 0 005.498 10h13.004a1 1 0 00.927-1.368l-.99-2.5a1 1 0 00-.93-.632zM3.642 8.263a2.002 2.002 0 001.397 2.684V17.5a2.5 2.5 0 002.5 2.5H16.474a2.5 2.5 0 002.487-2.5v-6.553a2.002 2.002 0 001.398-2.684l-.99-2.5a2 2 0 00-1.86-1.263H6.493a2 2 0 00-1.86 1.263l-.99 2.5zM6.04 17.5V11h11.921v6.5a1.5 1.5 0 01-1.487 1.5v-4a2 2 0 00-2-2h-.97a2 2 0 00-2 2v4H7.54a1.5 1.5 0 01-1.5-1.5zm6.464 1.5h2.97v-4a1 1 0 00-1-1h-.97a1 1 0 00-1 1v1h.847a.5.5 0 110 1h-.847v2zM8 13h1.5v1.5H8V13zm-1 0a1 1 0 011-1h1.5a1 1 0 011 1v1.5a1 1 0 01-1 1H8a1 1 0 01-1-1V13z" fill="#3F474D"></path></svg>
                            <span className='product-detail-choice-company'>{product.company}</span>
                            <div className='brand-home'>
                                <span>
                                    브랜드 홈
                                    <svg width="14" height="14" fill="none" preserveAspectRatio="xMidYMid meet"><path d="M4.083 11.375L8.312 7 4.083 2.625l.803-.875L9.916 7l-5.03 5.25-.803-.875z" fill="#828C94"></path></svg>
                                </span>
                            </div>
                        </div>
                        <div className='product-select'>
                            <select>
                                <option>제품 선택</option>
                            </select>
                        </div>
                        <div>
                            <span>주문금액</span>
                            <span>0원</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
