import { Box, Container, Heading, Text, Button, Image, Link, VStack, HStack, Icon } from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8} align="center">
        <Image borderRadius="lg" src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2RlJTIwYWJzdHJhY3R8ZW58MHx8fHwxNzEzOTMwMjc0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="AutoGen Banner" objectFit="cover" w="full" h="300px" />

        <Heading as="h1" size="2xl" textAlign="center">
          AutoGen by Microsoft
        </Heading>

        <Text fontSize="xl" textAlign="center">
          AutoGen is an innovative project by Microsoft aimed at automating the generation of code through AI.
        </Text>

        <HStack spacing={4}>
          <Button as={Link} href="/autogen-interface" colorScheme="purple" variant="solid">
            AutoGen Interface
          </Button>
          <Button leftIcon={<Icon as={FaGithub} />} colorScheme="teal" variant="solid">
            <Link href="https://github.com/microsoft/AutoGen" isExternal>
              GitHub Repository <Icon as={FaExternalLinkAlt} mx="2px" />
            </Link>
          </Button>
          <Button colorScheme="orange" variant="outline">
            <Link href="https://microsoft.com/AutoGen" isExternal>
              Learn More <Icon as={FaExternalLinkAlt} mx="2px" />
            </Link>
          </Button>
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
