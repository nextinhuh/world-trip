import { Flex, Text } from "@chakra-ui/react";

interface ContentProps {
    imageSrc: string;
    countryName: string;
    countrySlug: string;
}

export function Content({ countryName, imageSrc, countrySlug }: ContentProps) {
    return (
        <Flex
            bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${imageSrc})`}
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
            <Text as="strong" textAlign="center" fontSize="35px" >{countryName}</Text>
            <Text textAlign="center" fontSize="25px" >{countrySlug}</Text>
        </Flex>
    )
}