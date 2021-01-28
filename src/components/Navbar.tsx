import React from 'react';
import NextLink from 'next/link';
import { Flex, Link } from '@chakra-ui/react';

interface NavbarProps {}

export const Navbar: React.FC<NavbarProps> = ({}) => {
  const body = (
    <>
      <NextLink href='/'>
        <Link color='white'>Md Sadiq Sada</Link>
      </NextLink>
      <NextLink href='/projects'>
        <Link color='white' mr={2} ml='auto'>
          Projects
        </Link>
      </NextLink>
      <NextLink href='/resume'>
        <Link color='white'>Resume</Link>
      </NextLink>
    </>
  );
  return (
    <Flex zIndex={1} position='sticky' top={0} bg='#03203C' p={4}>
      {body}
    </Flex>
  );
};
