import "./Main.scss";
import Nav from "../../components/Nav/Nav";
import BannerData from "./banner.json";
import Banner from "../../components/Banner/Banner";
import MainCateData from "./maincategory.json";
import MainCate from "../../components/MainCate/MainCate";
import SubCateData from "../../components/Nav/category.json";
import SubCate from "../../components/SubCate/SubCate";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation } from 'swiper';
import "swiper/scss";
import Footer from '../../components/Footer/Footer';
import ProductArticle from '../../components/ProductArticle/ProductArticle';
import ProductData from './productarticle.json';
import ProductIngiData from './productingi.json'
export default function Main() {
    SwiperCore.use([Navigation])
    
    return (
        <section className='Main-section'>
            <div className='main-nav'>
                <Nav />
            </div>
            <Banner
                banner={BannerData.banners}
            />
            <div className='main-category-maincate'>
                {
                    MainCateData.maincategory.map(c => (
                        <MainCate
                            image={c.img}
                            name={c.name}
                        />
                    ))
                }
            </div>
            <div className='product-article-total'>
                <header className='productarticle-header'>
                    <h1>오늘의 딜</h1>
                    <a>더보기</a>
                </header>

            </div>
            <section className='productarticle-section'>
                <div className='article-tit'>
                    {
                        ProductData.products.map(p => (
                            <ProductArticle
                                id={p.id}
                                name={p.name}
                                isDiscount={p.isDiscout}
                                discountDegree={p.discountDegree}
                                mainImage={p.mainImage}
                                price={p.price}
                                discountedPrice={p.discountedPrice}
                                company={p.company}
                            />
                        ))
                    }
                </div>
            </section>
            <section className='sub-category-section'>
                <div className='sub-category-subcate'>
                    <h1 className='sub-category-categorytit'>카테고리</h1>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={10}
                        slidesPerGroup={10}
                        navigation
                    >
                        {
                            SubCateData.category.map(ca => (
                                <SwiperSlide>
                                    <SubCate
                                        image={ca.img}
                                        name={ca.name}
                                    />
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </section>
            <div className='product-article-total-super'>
                <header className='productarticle-header-super'>
                    <h1>인기상품</h1>
                    <div className='productarticle-super'>
                        <div className='productarticle-super-div'>
                            <div className='productarticle-super-div-div'>
                                <ul className='ingiul'>
                                    <button className='baesong'>배송<svg class="icon" width="12" height="12" viewBox="0 0 12 12" fill="currentColor" preserveAspectRatio="xMidYMid meet"><path d="M6.069 6.72l4.123-3.783 1.216 1.326-5.32 4.881L.603 4.273l1.196-1.346z"></path></svg></button>
                                </ul>
                                <ul className='ingiul'>
                                    <div className='ingison'>인기순<svg class="caret" width="8" height="8" viewBox="0 0 8 8" preserveAspectRatio="xMidYMid meet"><path fill="#BDBDBD" d="M0 2l4 4 4-4z"></path></svg>
                                        <div className='product-list-cate'>
                                            <ul>
                                                <li>판매순</li>
                                                <li className='cate-ingisoon'>인기순</li>
                                                <li>많은 리뷰순</li>
                                                <li>유저사진 많은순</li>
                                                <li>높은가격순</li>
                                                <li>낮은가격순</li>
                                                <li>최신순</li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            <section className='productarticle-section' id='productarticle-section-super'>
                <div className='article-tit'>
                    {
                        ProductIngiData.products.map(p => (
                            <ProductArticle
                                id={p.id}
                                name={p.name}
                                isDiscount={p.isDiscout}
                                discountDegree={p.discountDegree}
                                mainImage={p.mainImage}
                                price={p.price}
                                discountedPrice={p.discountedPrice}
                                company={p.company}
                            />
                        ))
                    }
                </div>
            </section>
            <Footer />
        </section>
    )
}
