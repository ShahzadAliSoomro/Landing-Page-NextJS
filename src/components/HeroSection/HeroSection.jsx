"use client";
import { BackgroundImage, Box, Button, Flex, Text, Title } from "@mantine/core";
import React from "react";
import "../../../public/styles/HeroSection.css";
import Image from "next/image";
import diamond from "../../../public/assets/Images/Diamond.png";
import tower from "../../../public/assets/Images/tower.png";
import { IconPlus } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

export default function HeroSection() {
  const mobile = useMediaQuery("(max-width: 767px)");
  return (
    <>
      <Box w={{ base: "100%", md: "95%" }} className="Hero_Section">
        <Box
          w={{ base: "100%", md: "70%" }}
          style={{ marginInline: "auto" }}
          py={"lg"}
        >
          <Box w={{ base: "100%", md: "80%" }} mx={"auto"}>
            <Flex
              justify={"center"}
              align={"center"}
              direction={"column"}
              p="md"
            >
              <Image
                src={diamond}
                width={66}
                height={66}
                className="diamond_img"
                alt="hero image"
              />
              <Title order={3} my={"sm"} className="text-center" fw={500}>
                 Aenean vulputate quis est et pulvinar.
              </Title>
              <Text className="text-center" size="md" mt={"xs"}>
                Maecenas dapibus turpis id purus mollis aliquam. Sed facilisis
                nec ipsum nec rutrum.Maecenas dapibus turpis id purus mollis
                aliquam. Sed facilisis nec ipsum nec rutrum.Maecenas dapibus
                turpis id purus mollis aliquam. Sed facilisis nec ipsum nec
              </Text>
              <Button
                variant="outline"
                radius={"0px"}
                color="#8B2351"
                size="md"
                my={"lg"}
              >
                About Us
              </Button>
            </Flex>
          </Box>
          <Flex justify={"center"} px={"sm"}>
            <iframe
              width="100%"
              className="iframevideo"
              src="https://www.youtube.com/embed/LXb3EKWsInQ?si=zepVLoyOcVv_4l3Z"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Flex>
        </Box>
      </Box>
      <Box className="background_building" h={{ base: "auto", md: "600px" }}>
        <Flex
          h={"100%"}
          style={{ overflow: "hidden", transition: "all 1s ease" }}
          direction={{ base: "column", md: " row" }}
        >
          <Box
            w={"100%"}
            h={{ base: "566px", md: "100%" }}
            className={`stepper_back ${mobile && "background_building"}`}
          >
            <Box className="building_plusicon">
              <IconPlus stroke={1} />
            </Box>
            <Title order={3} my={"sm"} className="title_text">
              Financial statements
            </Title>
            <Text className="morbi_text">
              Morbi purus libero, elementum nec gravida ac, commodo at erat.
              Etiam porta ipsum sed diam aliquam, rutrum tincidunt metus
              mattis.Morbi purus libero, Morbi purus libero, elementum nec{" "}
            </Text>
          </Box>

          <Box
            w={"100%"}
            h={{ base: "566px", md: "100%" }}
            className={`stepper_back ${mobile && "background_building"}`}
          >
            <Box className="building_plusicon">
              <IconPlus stroke={1} />
            </Box>
            <Title order={3} my={"sm"} className="title_text">
              Press releases
            </Title>
            <Text className="morbi_text">
              Morbi purus libero, elementum nec gravida ac, commodo at erat.
              Etiam porta ipsum sed diam aliquam, rutrum tincidunt metus
              mattis.Morbi purus libero, Morbi purus libero, elementum nec{" "}
            </Text>
          </Box>
          <Box
            w={"100%"}
            h={{ base: "566px", md: "100%" }}
            className={`stepper_back ${mobile && "background_building"}`}
          >
            <Box className="building_plusicon">
              <IconPlus stroke={1} />
            </Box>
            <Title order={3} my={"sm"} className="title_text">
              Webcast links
            </Title>
            <Text className="morbi_text">
              Morbi purus libero, elementum nec gravida ac, commodo at erat.
              Etiam porta ipsum sed diam aliquam, rutrum tincidunt metus
              mattis.Morbi purus libero, Morbi purus libero, elementum nec{" "}
            </Text>
          </Box>
          <Box
            w={"100%"}
            h={{ base: "566px", md: "100%" }}
            className={`stepper_back ${mobile && "background_building"}`}
          >
            <Box className="building_plusicon">
              <IconPlus stroke={1} />
            </Box>
            <Title order={3} my={"sm"} className="title_text">
              Corporate governance
            </Title>
            <Text className="morbi_text">
              Morbi purus libero, elementum nec gravida ac, commodo at erat.
              Etiam porta ipsum sed diam aliquam, rutrum tincidunt metus
              mattis.Morbi purus libero, Morbi purus libero, elementum nec{" "}
            </Text>
          </Box>
        </Flex>
      </Box>
      <Box w={{ base: "100%", md: "95%" }} className="Hero_Section">
        <Box
          w={{ base: "100%", md: "70%" }}
          style={{ marginInline: "auto" }}
          py={"lg"}
        >
          <Box w={"100%"} mx={"auto"}>
            <Flex
              justify={"center"}
              gap={20}
              align={"center"}
              direction={{ base: "column", md: "row" }}
              p="md"
            >
              <Image
                src={tower}
                width={522}
                height={600}
                className="diamond_img2"
                alt="hero image"
              />
              <Box
                w={{ base: "100%", md: "380px" }}
                px={{ base: "0px", md: "xs" }}
              >
                <Title order={3} my={"sm"} fw={{ base: 700, md: 500 }}>
                  Usce arcu turpis, vehicula in elementum tincidunt, faucibus at
                  ligula.
                </Title>
                <Text className="" fw={500} size="sm" mt={"xs"}>
                  Phasellus quis dignissim lectus. Maecenas dolor ex, pulvinar
                  in vestibulum eu, condimentum sit amet lacus. Fusce ex augue,
                  facilisis ut ligula vitae, fringilla dictum sem. Donec tempus
                  blandit nulla vel auctor. Donec non vestibulum tellus, sit
                  amet condimentum felis. Maecenas scelerisque elit a lectus
                  consequat tincidunt.
                </Text>
                <Text className="" size="sm" mt={"xs"}>
                  Phasellus quis dignissim lectus. Maecenas dolor ex, pulvinar
                  in vestibulum eu, condimentum sit amet lacus. Fusce ex augue,
                  facilisis ut ligula vitae, fringilla dictum sem. Donec tempus
                  blandit nulla vel auctor. Donec non vestibulum tellus, sit
                  amet condimentum felis. Maecenas scelerisque elit a lectus
                  consequat tincidunt.
                </Text>
                <Button
                  color="#8B2351"
                  mt={"lg"}
                  w={{ base: "100%", md: "auto" }}
                  radius={"0px"}
                  px={"md"}
                  py={"sm"}
                  size="lg"
                >
                  Read about operations
                </Button>
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
}
