import {
  Box,
  Fade,
  Flex,
  Stack,
  Text,
  transition,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Tech } from '../components/Tech';

const Index = () => {
  const statuses = ['student', 'web-developer', 'mobile-developer'];
  const [currentState, setCurrentState] = useState(0);
  const { isOpen, onToggle } = useDisclosure();

  useEffect(() => {
    // const intervalID = setInterval(() => {
    //   setCurrentState((currentState + 1) % 3);
    // }, 1500);

    const transitionInterval = setInterval(() => {
      onToggle();
      setCurrentState((currentState + 1) % 3);
      onToggle();
    }, 1000);

    return () => {
      // clearInterval(intervalID);
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
        <Flex align='center' maxW={800} margin='auto' justify='center'>
          <Text
            color='#0D0D0D'
            fontSize='3xl'
            align='center'
            fontWeight='semibold'
          >
            I'm Sadiq, a{' '}
            <span>
              <Fade in={isOpen}>
                <Text fontWeight='bold'>{statuses[currentState]}</Text>
              </Fade>
            </span>
          </Text>
        </Flex>
        {/* <Text
          bgGradient='#0D0D0D'
          bgClip='text'
          ml='5vw'
          mr='5vw'
          fontSize='5xl'
          fontWeight='bold'
        >
          Technologies I Love
        </Text>
        <br /> */}
        {/* <Stack ml='5vw' spacing={8} direction='row'>
          <Tech imageUrl='/images/java.svg' alt='java' />
          <Tech imageUrl='/images/react.png' alt='react' />
          <Tech imageUrl='/images/node4.png' alt='node' />
          <Tech imageUrl='/images/firebase.png' alt='firebase' />
          <Tech imageUrl='/images/typescript.png' alt='typescript' />
          <Tech imageUrl='/images/mongodb.png' alt='mongodb' />
          <Box mr='5vw'></Box>
        </Stack> */}
      </Box>
    </>
  );
};

export default Index;
