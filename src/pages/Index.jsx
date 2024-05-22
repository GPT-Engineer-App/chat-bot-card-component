import { Container, VStack, Box, Heading, Text, Button, HStack, IconButton } from "@chakra-ui/react";
import { FaRobot } from "react-icons/fa";
import { useState } from "react";

const ChatCard = ({ title, description, links }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} width="100%">
      <HStack spacing={4} alignItems="center">
        <IconButton aria-label="Bot Icon" icon={<FaRobot />} size="lg" isRound />
        {title && <Heading size="md">{title}</Heading>}
      </HStack>
      <Text mt={4}>{description}</Text>
      <HStack mt={4} spacing={4}>
        {links.map((link, index) => (
          <Button as="a" href={link.url} key={index} colorScheme="teal" variant="outline">
            {link.label}
          </Button>
        ))}
      </HStack>
    </Box>
  );
};

const Index = () => {
  const [cards, setCards] = useState([
    {
      title: "Chat with Bot",
      description: "Start a conversation with our AI-powered bot.",
      links: [
        { label: "Start Chat", url: "https://example.com/start-chat" },
        { label: "Learn More", url: "https://example.com/learn-more" },
      ],
    },
    {
      description: "This card has no title but still has a description and links.",
      links: [
        { label: "Visit Us", url: "https://example.com/visit-us" },
        { label: "Contact Support", url: "https://example.com/contact-support" },
      ],
    },
  ]);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8} width="100%">
        {cards.map((card, index) => (
          <ChatCard key={index} title={card.title} description={card.description} links={card.links} />
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
