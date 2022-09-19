import './Main.scss';
import Nav from '../../components/Nav/Nav';
import BannerData from './banner.json';
import Banner from '../../components/Banner/Banner';

export default function Main(){
    return(
        <section className='Main-section'>
            <Nav />
            <Banner
                banner={BannerData.banners}
            />
        </section>
    )
}
