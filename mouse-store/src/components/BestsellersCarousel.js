import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselElement from './CarouselElement';
import { GetBestsellers } from '../Api';

export default function BestsellersCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const bestsellers = GetBestsellers();
    
    return (bestsellers.length === 0 ? <></> :
        <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
            {
                bestsellers.map((element, key) =>
                    <Carousel.Item key={key}>
                        <CarouselElement
                            image={`${process.env.PUBLIC_URL}${element.image_path}`}
                            title={element.title} description={element.description} id={element.id}
                        />
                    </Carousel.Item>)
            }
        </Carousel>
    );
}

