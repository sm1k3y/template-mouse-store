export default function CarouselElement(props) {
    return (
        <a href={'#' + props.id} className='carousel_block'>
            <div className='carousel_text'>
                <h3 className='carousel_title'>{props.title}</h3>
                <p className='carousel_description'>{props.description}</p>
            </div>
            <img src={props.image} alt={props.title} className='carousel_image' />
        </a>
    );
}