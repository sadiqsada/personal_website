import { Box, IconButton, Icon, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

interface ProjectProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  projectUrl: string;
  mobile: boolean;
}

const Project: React.FC<ProjectProps> = ({
  imageUrl,
  imageAlt,
  title,
  description,
  projectUrl,
  mobile,
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
        h='50vh'
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
            fontSize='3xl'
            fontWeight='extrabold'
          >
            {title}
          </Text>
          <Link isExternal href={projectUrl}>
            <Icon boxSize='1.5em' as={FaGithub} />
          </Link>
        </Box>
        <Text color='#0D0D0D' fontSize='2xl'>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default Project;
