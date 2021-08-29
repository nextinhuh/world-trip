import { Flex, Icon, Text } from "@chakra-ui/react";

import bannerImg from '../../public/background-banner.png';
import airplaneIcon from '../../public/airplane.svg';

export function Banner() {
    return (
        <Flex
            bgImage={bannerImg.src}
            bgPosition="center"
            bgRepeat="repeat"
            bgSize="cover"
            mt="4"
            w="100%"
            height={["160px", "320px"]}
            align="center"
            justify="center"
        >
            <Flex align="center" justify="space-between" w="100%" maxWidth={1480}>

                <Flex
                    flexDir="column"
                    maxWidth="480px"
                >
                    <Text as="strong" textAlign="left" fontSize="28px">
                        5 Continentes,
                    </Text>
                    <Text as="strong" textAlign="left" fontSize="28px">
                        infinitas possibilidades.
                    </Text>

                    <Text
                        textAlign="left"
                        mt="6"
                        fontSize="20px"
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
                    </Text>
                </Flex>

                <Icon
                    as={airplaneIcon}
                    alt="Airplane"
                    fontSize="450"
                    maxHeight={290}
                    mt="20"
                />
            </Flex>

        </Flex>
    )
}