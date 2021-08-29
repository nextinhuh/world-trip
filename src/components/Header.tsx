import { Flex, Image } from '@chakra-ui/react'

import logo from '../../public/logo.png';

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxW={1480}
            h="20"
            mx="auto"
            px="6"
            align="center"
            justify="center"
        >
            <Image src={logo.src} alt="Airplane" />
        </Flex>
    )
}