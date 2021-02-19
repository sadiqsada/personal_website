import React from 'react';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';

interface TechProps {
  imageUrl: string;
  alt: string;
}

export const Tech: React.FC<TechProps> = ({ imageUrl, alt }) => {
  return (
    <Box>
      <Image src={imageUrl} alt={alt} width='128' height='128' />
    </Box>
  );
};
