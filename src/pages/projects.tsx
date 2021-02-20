import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import React from 'react';
import { Navbar } from '../components/Navbar';
import Project from '../components/Project';

interface projectsProps {}

const Projects: React.FC<projectsProps> = ({}) => {
  return (
    <>
      <Box w='100%' h='100%' bg='#CAD5E2'>
        <Navbar />
        <Flex
          align='center'
          maxW={800}
          margin='auto'
          justify='center'
          direction='column'
        >
          <Project
            imageUrl='/images/projects/covid testing.gif'
            imageAlt='COVID Testing'
            title='COVID Testing'
            description='Covid Testing is a web application for tracking covid test results of employees within a company.'
            projectUrl='https://github.com/alawngnome/COVID-testing'
          />
          <Project
            imageUrl='/images/projects/pokeunbox.png'
            imageAlt='PokeUnbox'
            title='PokeUnbox'
            description='PokeUnbox is a web application for generating and storing pokemon cards.'
            projectUrl='https://github.com/sadiqsada/pokeUnbox'
          />
          <Project
            imageUrl='/images/projects/Schedule Builder.png'
            imageAlt='Schedule Builder'
            title='Schedule Builder'
            description='Schedule Builder is a web appliaction for building school schedules.'
            projectUrl='https://github.com/sadiqsada/schedule-builder'
          />
          <Project
            imageUrl='/images/projects/yelpcamp.png'
            imageAlt='YelpCamp'
            title='YelpCamp'
            description='Yelpcamp is a web application for keeping track of the camps you have visited.'
            projectUrl='https://superyelpcamp.herokuapp.com/'
          />
          <Project
            imageUrl='/images/projects/guessingRGB.png'
            imageAlt='guessingRGB'
            title='Guessing RGB'
            description='Guessing RGB is a color guessing game based on RGB color code.'
            projectUrl='https://supercolorgame.herokuapp.com/'
          />
          <Project
            imageUrl='/images/projects/workout.png'
            imageAlt='Workout Planner'
            title='Workout Planner'
            description='Workout planner is an android app for keeping track of your workouts.'
            projectUrl='https://github.com/sadiqsada/Workout-Planner'
          />
        </Flex>
      </Box>
    </>
  );
};

export default Projects;

{
  /* 
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
          /> */
}
