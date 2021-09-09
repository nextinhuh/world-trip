import { Box, Flex, Text } from "@chakra-ui/react";

export default function Info() {
    return (
        <Flex w={500} align="center" justify="space-around" h={200}>
            <Flex flexDir="column" align="center">
                <Text fontWeight="semibold" color="#FFBA08" fontSize="34">
                    50
                </Text>
                <Text fontWeight="semibold" color="gray.600" fontSize="24">
                    países
                </Text>
            </Flex>

            <Flex flexDir="column" align="center">
                <Text fontWeight="semibold" color="#FFBA08" fontSize="34">
                    60
                </Text>
                <Text fontWeight="semibold" color="gray.600" fontSize="24">
                    línguas
                </Text>
            </Flex>

            <Flex flexDir="column" align="center">
                <Text fontWeight="semibold" color="#FFBA08" fontSize="34">
                    27
                </Text>
                <Text fontWeight="semibold" color="gray.600" fontSize="24">
                    cidades
                </Text>
            </Flex>

        </Flex>

    )
}