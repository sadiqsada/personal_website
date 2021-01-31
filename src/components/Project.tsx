import { ViewIcon } from '@chakra-ui/icons';
import { Box, IconButton, Image, Link } from '@chakra-ui/react';
import React from 'react';

interface ProjectProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  projectUrl: string;
}

const Project: React.FC<ProjectProps> = ({
  imageUrl,
  imageAlt,
  title,
  projectUrl,
}) => {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image w='100%' h='200px' src={imageUrl} alt={imageAlt} />
      <Box p='6'>
        <Box
          fontWeight='semibold'
          fontSize='1.5em'
          color='white'
          d='flex'
          justifyContent='space-between'
          alignItems='center'
        >
          {title}
          <Link href={projectUrl}>
            <IconButton
              colorScheme='red'
              aria-label='See Demo'
              size='lg'
              icon={<ViewIcon />}
            />
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Project;
