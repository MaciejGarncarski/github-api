import { IconType } from 'react-icons';
import { GoOrganization, GoRepo } from 'react-icons/go';

import { BackLink } from '@/components/atoms/BackLink';
import { NextImage } from '@/components/atoms/NextImage';
import { ResultDescription } from '@/components/atoms/ResultDescription';
import { ResultHeading } from '@/components/atoms/ResultHeading';
import { Text } from '@/components/atoms/Text';
import { UserTagList } from '@/components/atoms/UserTagList';
import { ErrorMessage } from '@/components/molecules/ErrorMessage';
import { UserProfilePlaceholder } from '@/components/molecules/UserProfilePlaceholder';

import { UserTypes } from '@/types/responseTypes';

type UserProfileProps = {
  isLoading: boolean;
  isError: boolean;
  data: UserTypes | undefined;
};

export type TagDataType = {
  Icon: IconType;
  value: string;
  title: string;
  key: number;
};

export const UserProfile = ({ isLoading, isError, data }: UserProfileProps) => {
  const tagsData: TagDataType[] = [
    {
      Icon: GoRepo,
      value: `${data?.public_repos}`,
      title: 'Number of repos',
      key: 1,
    },
    {
      Icon: GoOrganization,
      value: `${data?.following} following`,
      title: 'Following',
      key: 2,
    },
    {
      Icon: GoOrganization,
      value: `${data?.followers} followers`,
      title: 'Followers',
      key: 3,
    },
  ];

  if (isLoading) {
    return <UserProfilePlaceholder />;
  }

  if (isError || !data) {
    return (
      <main className='text-3xl lg:text-4xl'>
        <BackLink />
        <ErrorMessage error="Couldn't load this profile" emoji='😣' />;
      </main>
    );
  }

  return (
    <main className='my-10 flex min-h-page flex-col items-center justify-center gap-6 text-3xl lg:gap-8 lg:text-4xl'>
      <BackLink />
      <div className='flex flex-col items-center gap-2'>
        <ResultHeading className='text-4xl lg:text-5xl'>
          {data.name}
        </ResultHeading>
        <Text>{data.login}</Text>
      </div>
      <NextImage
        src={data.avatar_url}
        alt={`${data.login}'s avatar`}
        width={200}
        height={200}
        className='h-44 w-44 drop-shadow-xl lg:h-56 lg:w-56'
        imgClassName='rounded-full'
      />
      <ResultDescription
        italic
        className='w-72 break-words text-center text-2xl lg:w-2/5'
      >
        {data.bio}
      </ResultDescription>
      <UserTagList data={tagsData} />
    </main>
  );
};
