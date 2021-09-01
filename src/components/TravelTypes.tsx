import { Flex, HStack, Icon, Text } from "@chakra-ui/react";

import cocktailIcon from '../../public/travel-type-icons/cocktail.svg';
import buildingIcon from '../../public/travel-type-icons/building.svg';
import earthIcon from '../../public/travel-type-icons/earth.svg';
import museumIcon from '../../public/travel-type-icons/museum.svg';
import surfIcon from '../../public/travel-type-icons/surf.svg';

export function TravelTypes() {
    return (
        <Flex
            w="100%"
            align="center"
            justify="center"
            mt="20"
        >
            <HStack
                spacing="40"
                w="100%"
                maxWidth={1480}
                align="center"
                justify="center"
            >
                <Flex flexDir="column" align="center" height={150} justify="space-between">
                    <Icon
                        as={cocktailIcon}
                        alt="Cocktail"
                        fontSize="90"
                        maxHeight={290}
                    />
                    <Text fontWeight="semibold" color="gray.600" fontSize="24">
                        vida noturna
                    </Text>
                </Flex>

                <Flex flexDir="column" align="center" height={150} justify="space-between">
                    <Icon
                        as={buildingIcon}
                        alt="Build"
                        fontSize="90"
                        maxHeight={290}
                    />
                    <Text fontWeight="semibold" color="gray.600" fontSize="24">
                        moderno
                    </Text>
                </Flex>

                <Flex flexDir="column" align="center" height={150} justify="space-between">
                    <Icon
                        as={museumIcon}
                        alt="Museum"
                        fontSize="90"
                        maxHeight={290}
                    />
                    <Text fontWeight="semibold" color="gray.600" fontSize="24">
                        clássico
                    </Text>
                </Flex>

                <Flex flexDir="column" align="center" height={150} justify="space-between">
                    <Icon
                        as={surfIcon}
                        alt="Surf"
                        fontSize="90"
                        maxHeight={290}
                    />
                    <Text fontWeight="semibold" color="gray.600" fontSize="24">
                        praia
                    </Text>
                </Flex>

                <Flex flexDir="column" align="center" height={150} justify="space-between">
                    <Icon
                        as={earthIcon}
                        alt="Earth"
                        fontSize="90"
                        maxHeight={290}
                    />
                    <Text fontWeight="semibold" color="gray.600" fontSize="24">
                        e mais...
                    </Text>
                </Flex>

            </HStack>
        </Flex>

    )
}