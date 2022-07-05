import { motion, Variants } from 'framer-motion';

import { Heading } from '@/components/atoms/Heading';
import { Repository } from '@/components/molecules/Repository';
import { User } from '@/components/molecules/User';

import { RepoTypes, UserTypes } from '@/types/responseTypes';

type ResultsListProps = {
  totalCount: string;
  data: (UserTypes | RepoTypes)[];
};

const variants: Variants = {
  initial: {
    y: 35,
  },
  animate: {
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 400,
      staggerChildren: 0.75,
    },
  },
};

export const ResultsList = ({ totalCount, data }: ResultsListProps) => {
  return (
    <section className='mx-6 xl:mx-20 my-7 flex flex-col justify-start align-center'>
      <Heading type='h2' className='py-4 text-3xl'>
        {totalCount} results
      </Heading>
      <motion.ul variants={variants} initial='initial' animate='animate'>
        {data.map((elem) => {
          if ('avatar_url' in elem) {
            return (
              <User
                key={elem.id}
                login={elem.login}
                fullName={elem.name}
                avatar={elem.avatar_url}
                bio={elem.bio}
                location={elem.location}
              />
            );
          } else if ('updated_at' in elem) {
            return (
              <Repository
                key={elem.id}
                fullName={elem.full_name}
                description={elem.description}
                stars={elem.stargazers_count}
                language={elem.language}
                license={elem.license}
                updatedAt={elem.updated_at}
              />
            );
          }
        })}
      </motion.ul>
    </section>
  );
};
