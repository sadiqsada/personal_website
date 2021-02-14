import React from 'react';
import NextLink from 'next/link';
import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const body = (
    <>
      <NextLink href='/projects'>
        <Link mr={2} ml='auto' color='#CAD5E2'>
          Projects
        </Link>
      </NextLink>
      <a href='/resume.pdf'>
        <Link color='#CAD5E2'>Resume</Link>
      </a>
    </>
  );
  return (
    <Flex
      zIndex={1}
      position='sticky'
      top={0}
      bg='#0D0D0D'
      p={4}
      align='center'
    >
      <Flex flex={1} margin='auto' maxW={800} align='center'>
        <NextLink href='/'>
          <Link>
            <Heading size='md' color='#CAD5E2'>
              Md Sadiq Sada
            </Heading>
          </Link>
        </NextLink>
        <Box ml='auto'>{body}</Box>
      </Flex>
    </Flex>
  );
};
