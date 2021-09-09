import { Divider, Flex, Text } from '@chakra-ui/react'

import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import Carousel from '../components/Carousel'
import { TravelTypes } from '../components/TravelTypes'
import { CountryListCarousel } from '../components/Carousel'

import airplaneIcon from '../../public/airplane.svg';
import bannerImg from '../../public/background-banner.png';



export default function Home() {
  const countryListCarousel: CountryListCarousel = [
    {
      countryName: "África",
      countrySlug: "O país do Jacquin",
      imageSrc: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80"
    },
    {
      countryName: "Antártida",
      countrySlug: "Um reino de tesouros inesperados",
      imageSrc: "https://images.unsplash.com/photo-1462888387064-2a2ea232edb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
    },
    {
      countryName: "Ásia",
      countrySlug: "Um diamante é eterno",
      imageSrc: "https://images.unsplash.com/photo-1524069615294-e50725f94a26?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
    },
    {
      countryName: "Europa",
      countrySlug: "Um diamante é eterno",
      imageSrc: "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2279&q=80"
    },
    {
      countryName: "América do Norte",
      countrySlug: "Um diamante é eterno",
      imageSrc: "https://images.unsplash.com/photo-1625477960190-1d7b6e0d9a9b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80"
    },
    {
      countryName: "Oceania",
      countrySlug: "Um diamante é eterno",
      imageSrc: "https://images.unsplash.com/photo-1574791325738-80142fc0e8c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80"
    },
    {
      countryName: "América do Sul",
      countrySlug: "Um diamante é eterno",
      imageSrc: "https://images.unsplash.com/photo-1612012539633-1ddf45bff52c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2657&q=80"
    }
  ];

  return (
    <Flex direction="column" align="center">
      <Header />

      <Banner
        title="5 Continentes, infinitas possibilidades."
        subTitle="Chegou a hora de tirar do papel a viagem que você sempre sonhou."
        icon={airplaneIcon}
        bannerBackGroudSRC={bannerImg.src}
      />

      <TravelTypes />

      <Divider my="20" borderColor="#47585B" borderWidth={3} width={120} />

      <Text as="span" fontSize={36} color="gray.600" fontWeight="500" textAlign="center" >
        Vamos nessa?
      </Text>
      <Text as="span" fontSize={36} color="gray.600" fontWeight="500" textAlign="center" >
        Então escolha seu continente
      </Text>

      <Carousel countryList={countryListCarousel} />
    </Flex>
  )
}
