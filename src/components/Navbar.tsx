import React from 'react';
import NextLink from 'next/link';
import { Flex, Link, Text } from '@chakra-ui/react';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const body = (
    <>
      <NextLink href='/'>
        <Link ml='4vw' color='white'>
          <Text fontSize='2xl'>Md Sadiq Sada</Text>
        </Link>
      </NextLink>
      <NextLink href='/projects'>
        <Link color='white' mr={2} ml='auto'>
          <Text fontSize='2xl'>Projects</Text>
        </Link>
      </NextLink>
      <NextLink href='/resume'>
        <Link mr='5vw' color='white'>
          <Text fontSize='2xl'>Resume</Text>
        </Link>
      </NextLink>
    </>
  );
  return (
    <Flex zIndex={1} position='sticky' top={0} p={4}>
      {body}
    </Flex>
  );
};
