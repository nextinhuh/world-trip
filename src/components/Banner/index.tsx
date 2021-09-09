import { Flex, Icon, Text } from "@chakra-ui/react";
import { ElementType } from "react";


import { Title } from "./Title";

interface BannerProps {
    continentName?: string;
    title?: string;
    subTitle?: string;
    icon?: ElementType;
    bannerBackGroudSRC?: string;
}

export function Banner({ icon, subTitle, title, bannerBackGroudSRC, continentName }: BannerProps) {
    return (
        <Flex
            bgImage={`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) , url(${bannerBackGroudSRC})`}
            bgPosition="center"
            bgRepeat="repeat"
            bgSize="cover"
            opacity={0.8}
            mt="4"
            w="100%"
            height={["160px", "420px"]}
            align="center"
            justify="center"
            blur
        >
            <Flex align="center" justify="space-between" w="100%" maxWidth={1480}>
                {title && (
                    <>
                        <Flex
                            flexDir="column"
                            maxWidth="480px"
                        >
                            <Title
                                title={title}
                                subTitle={subTitle}
                            />
                        </Flex>


                    </>
                )}

                {continentName && (
                    <Text as="strong" textAlign="left" fontSize="38px" mt="48" >
                        {continentName}
                    </Text>
                )}

                {icon && (
                    <Icon
                        as={icon}
                        alt="Airplane"
                        fontSize="450"
                        maxHeight={290}
                        mt="40"
                    />
                )}

            </Flex>

        </Flex>
    )
}