import { Box, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import { Navbar } from '../components/Navbar';
import Project from '../components/Project';

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
            projectUrl='https://github.com/alawngnome/COVID-testing'
          />
          <Project
            imageUrl='/images/projects/pokeunbox.png'
            imageAlt='PokeUnbox'
            title='PokeUnbox'
            projectUrl='https://github.com/sadiqsada/pokeUnbox'
          />
          <Project
            imageUrl='/images/projects/Schedule Builder.png'
            imageAlt='Schedule Builder'
            title='Schedule Builder'
            projectUrl='https://github.com/sadiqsada/schedule-builder'
          />
          <Project
            imageUrl='/images/projects/yelpcamp.png'
            imageAlt='YelpCamp'
            title='YelpCamp'
            projectUrl='https://superyelpcamp.herokuapp.com/'
          />
          <Project
            imageUrl='/images/projects/guessingRGB.png'
            imageAlt='guessingRGB'
            title='Guessing RGB'
            projectUrl='https://supercolorgame.herokuapp.com/'
          />
          <Project
            imageUrl='/images/projects/workout.png'
            imageAlt='Workout Planner'
            title='Workout Planner'
            projectUrl='https://github.com/sadiqsada/Workout-Planner'
          />
          <br />
        </Grid>
      </Box>
    </>
  );
};

export default Projects;
