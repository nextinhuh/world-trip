import { Divider, Flex, Text } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { Carousel } from '../components/Carousel'
import { Header } from '../components/Header'
import { TravelTypes } from '../components/TravelTypes'

export default function Home() {
  return (
    <Flex direction="column" align="center">
      <Header />

      <Banner />

      <TravelTypes />

      <Divider my="20" borderColor="#47585B" borderWidth={3} width={120} />

      <Text as="span" fontSize={36} color="gray.600" fontWeight="500" textAlign="center" >
        Vamos nessa?
      </Text>
      <Text as="span" fontSize={36} color="gray.600" fontWeight="500" textAlign="center" >
        Então escolha seu continente
      </Text>

      <Carousel />
    </Flex>
  )
}
