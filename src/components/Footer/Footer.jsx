"use client";
import React, { useState } from "react";
import axios from "axios";
import "../../../public/styles/Footer.css";
import { Box, Button, Flex, Input, Text, Textarea } from "@mantine/core";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    setLoading(true); // Set loading to true when the submit button is clicked
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/contact-form`,
        formData
      );
      console.log("Response:", response.data);
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    } finally {
      setLoading(false); // Set loading to false when the API call is completed
    }
  };

  return (
    <>
      <Flex
        justify={"end"}
        align={"center"}
        className="footer_background"
        h={{ base: "auto ", md: "600px" }}
      >
        <Box
          bg={"#172938"}
          w={{ base: "100%", xs: "450px" }}
          py={"xl"}
          pl={"xl"}
          pe={{ base: "xl", md: "120px" }}
        >
          <Box>
            <Text size="xs" color="white" span>
              Any questions?
            </Text>
            <Text size="30px" my={"md"} fw={500} color="white">
              Let’s talk today!
            </Text>
            <Input
              mt={"lg"}
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <Input
              mt={"lg"}
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <Textarea
              mt={"lg"}
              minRows={6}
              maxRows={8}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
            />
            <Button
              className="Submit_btn"
              fullWidth
              fw={500}
              mt={"lg"}
              onClick={handleSubmit}
              disabled={loading} // Disable the button while loading
            >
              {loading ? "Submitting..." : "Submit"}{" "}
              {/* Change the button text based on the loading state */}
            </Button>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
