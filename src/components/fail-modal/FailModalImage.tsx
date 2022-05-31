import type { FC } from 'react';
import { AspectRatio, Image, Skeleton } from '@chakra-ui/react';

export const FailModalImage: FC = () => {
  return (
    <AspectRatio
      ratio={3 / 4}
      width="50%"
      maxW={{ lg: 'md' }}
      display={{ base: 'none', md: 'flex' }}
    >
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/d/d7/Kevin_Bacon_SDCC_2014.jpg"
        alt="Kevin Bacon"
        fallback={<Skeleton />}
      />
    </AspectRatio>
  );
};

FailModalImage.displayName = 'FailModalImage';
