import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Flex, Text } from "@chakra-ui/react";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

export function Carousel() {
    return (
        <Flex
            height={450}
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
                <SwiperSlide>
                    <Flex
                        bgImage="https://images.unsplash.com/photo-1608930716113-42a41e5d4ca2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80"
                        bgPosition="center"
                        bgRepeat="repeat"
                        bgSize="cover"
                        height="100%"
                        width="100%"
                        align="center"
                        justify="center"
                        flexDir="column"
                        opacity={0.9}
                    >
                        <Text as="strong" textAlign="center" fontSize="35px" color="yellow.200">Europa</Text>
                        <Text textAlign="center" fontSize="25px" color="yellow.200">O continente mais antigo</Text>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        bgImage="https://images.unsplash.com/photo-1607419514795-b4b124fc61e4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2638&q=80"
                        bgPosition="center"
                        bgRepeat="repeat"
                        bgSize="cover"
                        height="100%"
                        width="100%"
                        align="center"
                        justify="center"
                        flexDir="column"
                        opacity={0.9}
                    >
                        <Text as="strong" textAlign="center" fontSize="35px" color="yellow.200">Asia</Text>
                        <Text textAlign="center" fontSize="25px" color="yellow.200">Um reino de tesouros inesperados</Text>
                    </Flex>
                </SwiperSlide>
                <SwiperSlide>
                    <Flex
                        bgImage="https://images.unsplash.com/photo-1608644436625-a694e690d0ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80"
                        bgPosition="center"
                        bgRepeat="repeat"
                        bgSize="cover"
                        height="100%"
                        width="100%"
                        align="center"
                        justify="center"
                        flexDir="column"
                        opacity={0.9}
                    >
                        <Text as="strong" textAlign="center" fontSize="35px" color="yellow.200">Austrália</Text>
                        <Text textAlign="center" fontSize="25px" color="yellow.200">Um diamante é eterno</Text>
                    </Flex>
                </SwiperSlide>
            </Swiper>
        </Flex>
    )
}