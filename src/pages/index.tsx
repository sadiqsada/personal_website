import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Navbar } from '../components/Navbar';

const Index = () => {
  return (
    <>
      <Box w='100%' h='100vh' bgGradient='linear(to-l, #7928CA, #FF0080)'>
        <Navbar />
        <Text
          bgGradient='linear(to-r,gray.300,yellow.400,pink.200)'
          bgClip='text'
          fontSize='6xl'
          fontWeight='extrabold'
        >
          Hello!
        </Text>
        <Text
          bgGradient='linear(to-r,gray.300,yellow.400,pink.200)'
          bgClip='text'
          fontSize='3xl'
          fontWeight='bold'
        >
          I'm Sadiq, a computer science, and applied mathematics junior at Stony
          Brook University. I love to work on web applications, and I always
          stay up to date on the latest technologies. I'm also interested in
          other areas of computer science like machine learning. I'm currently
          looking for an opportunity for Summer 2021. I would love to hear from
          you!
        </Text>
      </Box>
    </>
  );
};

export default Index;
