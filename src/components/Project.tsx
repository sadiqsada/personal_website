import { Box, Icon, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { FaGithub, FaGlobe } from 'react-icons/fa';

interface ProjectProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  projectUrl: string;
  mobile?: boolean;
  live?: boolean;
}

const Project: React.FC<ProjectProps> = ({
  imageUrl,
  imageAlt,
  title,
  description,
  projectUrl,
  mobile,
  live,
}) => {
  return (
    <Box
      maxW={800}
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      m={5}
      bg='white'
    >
      <Image
        w={mobile ? '40%' : '100%'}
        h={{ base: '30vh', md: '50vh', lg: '50vh' }}
        src={imageUrl}
        alt={imageAlt}
        ml={mobile ? '30vh' : ''}
      />
      <Box p='6'>
        <Box
          fontWeight='semibold'
          fontSize='1.5em'
          d='flex'
          justifyContent='space-between'
          alignItems='center'
          mb={2}
        >
          <Text
            align='center'
            color='#0D0D0D'
            fontSize={{ base: '2xl', md: '3xl', lg: '3xl' }}
            fontWeight='extrabold'
          >
            {title}
          </Text>
          <Link isExternal href={projectUrl}>
            {live ? (
              <Icon
                boxSize={{ base: '1.2em', md: '1.5em', lg: '1.5em' }}
                as={FaGlobe}
              />
            ) : (
              <Icon
                boxSize={{ base: '1.2em', md: '1.5em', lg: '1.5em' }}
                as={FaGithub}
              />
            )}
          </Link>
        </Box>
        <Text color='#0D0D0D' fontSize={{ base: '1xl', md: '2xl', lg: '2xl' }}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default Project;
