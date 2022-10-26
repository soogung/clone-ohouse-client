import './ProductDetailPage.scss';
import DetailData from './productDetail.json';
export default function ProductDetailPage(props) {
    return (
        <section>
            <div>
                <div className='detailpage-left'>
                    <div className='detailpage-left-small-picture'>
                        <img src={props.images}/>
                    </div>
                </div>
                <div className='detailpage-back'>
                    <div>
                        <span>{props.name}</span>
                        <div>
                            <div>
                                <svg class="icon--stroke" aria-label="스크랩" width="24" height="24" fill="currentColor" stroke="currentColor" stroke-width="0.5" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet"><path d="M11.53 18.54l-8.06 4.31A1 1 0 0 1 2 21.97V3.5A1.5 1.5 0 0 1 3.5 2h17A1.5 1.5 0 0 1 22 3.5v18.47a1 1 0 0 1-1.47.88l-8.06-4.31a1 1 0 0 0-.94 0z"></path></svg>
                                <span>23,999</span>
                            </div>
                            <div>
                                <svg class="icon" aria-label="공유하기" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" preserveAspectRatio="xMidYMid meet"><path d="M9.64 14.646a4.5 4.5 0 1 1 0-5.292l4.54-2.476a4.5 4.5 0 1 1 .63.795l-4.675 2.55c.235.545.365 1.146.365 1.777s-.13 1.232-.365 1.777l4.675 2.55a4.5 4.5 0 1 1-.63.795l-4.54-2.476zM18 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM6 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM18 23a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path></svg>

                            </div>
                        </div>
                        <div>

                        </div>
                        <div>
                            <span>
                                <span>{props.discountdegree}%</span>
                                <span>3,992</span>
                                <span>3,123</span>
                            </span>
                        </div>
                        <div>
                            <span>이름</span>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}