'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Provider } from '@supabase/supabase-js';
import { createClient } from '@/utils/supabase/server';
import { getURL } from '@/utils/helpers';

export async function emailLogin(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect('/login?message=Could not authenticate user');
  }

  revalidatePath('/', 'layout');
  redirect('/todos');
}

export async function signup(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    redirect('/login?message=Could not create user');
  }

  revalidatePath('/', 'layout');
  redirect('/login');
}

export async function signOut() {
  const supabase = createClient();
  await supabase.auth.signOut();
  redirect('/login?message=Signed out');
}

export async function OAuthSignIn(provider: Provider) {
  if (!provider) {
    return redirect('/login?message=No provider specified');
  }
  const supabase = createClient();
  const redirectURL = getURL('/auth/callback');
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider,
    options: {
      redirectTo: redirectURL,
    },
  });
  if (error) {
    redirect('/login?message=Could not authenticate user');
  }
  return redirect(data.url);
}
