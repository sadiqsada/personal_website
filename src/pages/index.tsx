import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { Navbar } from '../components/Navbar';

const Index = () => {
  return (
    <>
      <Box w='100%' h='100vh' bgColor='#03203C'>
        <Navbar />
        <Text
          bgGradient='linear(to-r,gray.300,yellow.400,pink.200)'
          bgClip='text'
          fontSize='6xl'
          ml='5vw'
          fontWeight='extrabold'
        >
          Hello!
        </Text>
        <Text
          bgGradient='linear(to-r,gray.300,yellow.400,pink.200)'
          bgClip='text'
          ml='5vw'
          mr='5vw'
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
        <br />
        <Text
          bgGradient='linear(to-r,gray.300,yellow.400,pink.200)'
          bgClip='text'
          ml='5vw'
          mr='5vw'
          fontSize='5xl'
          fontWeight='bold'
        >
          Technologies I Love
        </Text>
        <br />
        <Stack ml='5vw' spacing={8} direction='row'>
          <Box>
            <Image src='/images/java.svg' alt='java' width='192' height='192' />
          </Box>
          <Box>
            <Image
              src='/images/react.png'
              alt='react'
              width='192'
              height='192'
            />
          </Box>
          <Box>
            <Image
              src='/images/typescript.png'
              alt='typescript'
              width='192'
              height='192'
            />
          </Box>
          <Box>
            <Image
              src='/images/node4.png'
              alt='node'
              width='192'
              height='192'
            />
          </Box>
          <Box>
            <Image
              src='/images/firebase.png'
              alt='firebase'
              width='192'
              height='192'
            />
          </Box>
          <Box>
            <Image
              src='/images/mongodb.png'
              alt='mongodb'
              width='192'
              height='192'
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default Index;
