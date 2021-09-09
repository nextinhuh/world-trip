import { Text } from "@chakra-ui/react";

interface TitleProps {
    title?: string;
    subTitle?: string;
}

export function Title({ subTitle, title }: TitleProps) {
    return (
        <>
            <Text as="strong" textAlign="left" fontSize="28px" >
                {title}
            </Text>

            <Text
                textAlign="left"
                mt="6"
                fontSize="20px"
            >
                {subTitle}
            </Text>
        </>
    )
}