import type { FC } from 'react';
import Head from 'next/head';

interface MetaProps {
  title?: string;
  description?: string;
}

export const Meta: FC<MetaProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

Meta.displayName = 'Meta';

Meta.defaultProps = {
  title: 'WikiHunt',
  description: 'Hunt your way through Wikipedia links to find Kevin Bacon'
};
