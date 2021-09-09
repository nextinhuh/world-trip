import { Swiper, SwiperSlide } from "swiper/react";
import { Flex } from "@chakra-ui/react";
import { Content } from "./Content";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

interface CarouselProps {
    countryList: CountryListCarousel;
}

export type CountryListCarousel = Array<{
    imageSrc: string;
    countryName: string;
    countrySlug: string;
}>

function Carousel({ countryList }: CarouselProps) {
    return (
        <Flex
            height={550}
            maxWidth={1240}
            my="16"
        >
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSwiper={() => { }}
                onSlideChange={() => { }}
            >
                {countryList?.map(country => {
                    return (
                        <SwiperSlide key={country.imageSrc}>
                            <Content
                                countryName={country.countryName}
                                countrySlug={country.countrySlug}
                                imageSrc={country.imageSrc}
                            />
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </Flex>
    )
}

export default Carousel;