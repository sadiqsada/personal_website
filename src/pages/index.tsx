import { Box, Fade, Flex, Grid, Text, useDisclosure } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Tech } from '../components/Tech';

const Index = () => {
  const statuses = ['student', 'web-developer', 'mobile-developer'];
  const [currentState, setCurrentState] = useState(0);
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    const transitionInterval = setInterval(() => {
      onToggle();
      setCurrentState((currentState + 1) % 3);
      onToggle();
    }, 1000);

    return () => {
      clearInterval(transitionInterval);
    };
  }, [isOpen]);

  return (
    <>
      <Box w='100%' h='100vh' bgColor='#CAD5E2'>
        <Navbar />
        <Text
          align='center'
          color='#0D0D0D'
          fontSize='5xl'
          fontWeight='extrabold'
        >
          Hello 👋
        </Text>
        <Flex
          align='center'
          maxW={800}
          margin='auto'
          justify='center'
          direction='column'
        >
          <Text
            color='#0D0D0D'
            fontSize='3xl'
            align='center'
            fontWeight='semibold'
          >
            I'm Sadiq, a
          </Text>
          <Fade in={isOpen}>
            <Text
              color='#0D0D0D'
              fontSize='3xl'
              align='center'
              fontWeight='bold'
              mb={10}
            >
              {statuses[currentState]}
            </Text>
          </Fade>
          <Text
            color='#0D0D0D'
            fontSize='3xl'
            align='center'
            fontWeight='semibold'
          >
            Technologies I Use
          </Text>
          <Grid templateColumns='repeat(3,1fr)' gap={8} mt={8}>
            <Tech imageUrl='/images/java.svg' alt='java' />
            <Tech imageUrl='/images/react.png' alt='react' />
            <Tech imageUrl='/images/node4.png' alt='node' />
            <Tech imageUrl='/images/firebase.png' alt='firebase' />
            <Tech imageUrl='/images/typescript.png' alt='typescript' />
            <Tech imageUrl='/images/mongodb.png' alt='mongodb' />
          </Grid>
        </Flex>
      </Box>
    </>
  );
};

export default Index;
