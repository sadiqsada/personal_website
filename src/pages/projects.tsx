import { Box, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import { Navbar } from '../components/Navbar';
import Project from '../components/project';

interface projectsProps {}

const Projects: React.FC<projectsProps> = ({}) => {
  return (
    <>
      <Box w='100%' h='100%' bgColor='#03203C'>
        <Navbar />
        <Text
          bgGradient='linear(to-r,gray.300,yellow.400,pink.200)'
          bgClip='text'
          fontSize='5xl'
          align='center'
          fontWeight='extrabold'
        >
          Projects
        </Text>
        <br />
        <Grid ml='5vw' mr='5vw' templateColumns='repeat(3, 1fr)' gap={6}>
          <Project
            imageUrl='/images/projects/COVID Testing.png'
            imageAlt='COVID Testing'
            title='COVID Testing'
          />
          <Project
            imageUrl='/images/projects/pokeunbox.png'
            imageAlt='PokeUnbox'
            title='PokeUnbox'
          />
          <Project
            imageUrl='/images/projects/Schedule Builder.png'
            imageAlt='Schedule Builder'
            title='Schedule Builder'
          />
          <Project
            imageUrl='/images/projects/yelpcamp.png'
            imageAlt='YelpCamp'
            title='YelpCamp'
          />
          <Project
            imageUrl='/images/projects/guessingRGB.png'
            imageAlt='guessingRGB'
            title='Guessing RGB'
          />
          <Project
            imageUrl='/images/projects/workout.png'
            imageAlt='Workout Planner'
            title='Workout Planner'
          />
          <br />
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
