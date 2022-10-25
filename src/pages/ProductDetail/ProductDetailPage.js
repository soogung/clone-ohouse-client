import './ProductDetailPage.scss';
export default function ProductDetailPage(props){
    return(
        <section>
            <div>
                {props.name}
                {props.images.imageUri}
            </div>
        </section>
    )
}