import { Divider, Flex, Text } from '@chakra-ui/react'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { TravelTypes } from '../components/TravelTypes'

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Banner />

      <TravelTypes />

      <Divider my="20" borderColor="#47585B" borderWidth={3} width={120} alignSelf="center" borderRadius="" />

      <Text as="span" fontSize={36} color="gray.600" fontWeight="500" textAlign="center" >
        Vamos nessa?
      </Text>
      <Text as="span" fontSize={36} color="gray.600" fontWeight="500" textAlign="center" >
        Então escolha seu continente
      </Text>
    </Flex>
  )
}
