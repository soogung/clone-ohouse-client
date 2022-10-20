import "./Main.scss";
import Nav from "../../components/Nav/Nav";
import BannerData from "./banner.json";
import Banner from "../../components/Banner/Banner";
import MainCateData from "./maincategory.json";
import MainCate from "../../components/MainCate/MainCate";
import SubCateData from "../../components/Nav/category.json";
import SubCate from "../../components/SubCate/SubCate";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header.js";

export default function Main() {
  SwiperCore.use([Navigation]);
  return (
    <>
      <Header />
      <section className="Main-section">
        <div className="main-nav">
          <Nav />
        </div>
        <Banner banner={BannerData.banners} />
        <div className="main-category-maincate">
          {MainCateData.maincategory.map((c) => (
            <MainCate image={c.img} name={c.name} />
          ))}
        </div>
        <div className="sub-category-subcate">
          <a className="sub-category-categorytit">카테고리</a>
          <Swiper
            spaceBetween={10}
            slidesPerView={10}
            slidesPerGroup={10}
            navigation
          >
            {SubCateData.category.map((ca) => (
              <SwiperSlide>
                <SubCate image={ca.img} name={ca.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Footer />
      </section>
    </>
  );
}
