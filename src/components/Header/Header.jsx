import { Box, Text, Title } from "@mantine/core";
import React from "react";
import "../../../public/styles/Header.css";
export default function Header() {
  return (
    <>
      <Box className="background__image">
        <Box w={"100%"} className="width_400">
          <Text className="text-center web" size="40px" color="white" fw={400}>
            Lorem ipsum dolor sit amet, consec
          </Text>
          <Text className="text-center mbl" size="40px" color="white" fw={400}>
          Aliquam eu malesuada
          </Text>
          <Text className="text-center" mt={"md"} color="white" px={"sm"}>
            Aliquam eu malesuada turpis, eu interdum nibh. Etiam tristique erat
            in ligula consequat malesuada. Praesent posuere vestibulum neque ac
            posuere. 
          </Text>
        </Box>
      </Box>
    </>
  );
}
