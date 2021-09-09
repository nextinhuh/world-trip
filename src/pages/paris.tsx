import { Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import Bio from "../components/Bio";
import Info from "../components/Info";

export default function Paris() {
    return (
        <Flex direction="column" align="center">
            <Header />

            <Banner
                continentName="Paris"
                bannerBackGroudSRC="https://images.unsplash.com/photo-1520939817895-060bdaf4fe1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2682&q=80"
            />

            <Flex my="20" width={1480} align="center" justifyContent="space-around">
                <Bio />

                <Info />
            </Flex>



        </Flex>
    )
}