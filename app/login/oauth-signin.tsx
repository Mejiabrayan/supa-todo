'use client';

import { Button } from '@/components/ui/button';
import { Provider } from '@supabase/supabase-js';
import { FaGithub } from 'react-icons/fa6';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGoogle } from "react-icons/fa";
import { OAuthSignIn } from './actions';
type OAuthProvider = {
  name: Provider;
  displayName: string;
  icon?: JSX.Element;
  image?: string;
};

export function OAuthButtons() {
  const oAuthProviders: OAuthProvider[] = [
    {
      name: 'github',
      displayName: 'GitHub',
      icon: <FaGithub className='size-6' />,
    },
    {
      name: 'google',
      displayName: 'Google',
     icon: <FaGoogle className='size-6' />,
    },
    {
      name: 'twitter',
      displayName: 'X',
      icon: <FaXTwitter className='size-6' />,
    },
  ];

  return (
    <>
      {oAuthProviders.map((provider, index) => (
        <Button
          onClick={async () => {
            await OAuthSignIn(provider.name);
          }}
          key={index}
          variant={'outline'}
          className='w-full flex items-center gap-2'
        >
          {provider.icon}
          Login with {provider.displayName}
        </Button>
      ))}
    </>
  );
}
