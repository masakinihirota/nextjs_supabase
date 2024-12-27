'use client';

import { supabase } from '@/lib/supabase';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

export function SocialLoginButtons() {
  // 確認
  console.log('SocialLoginButtons');
  const handleGithubLogin = async () => {
    // 確認
    console.log('handleGithubLogin');
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        // サーバー側でのリダイレクトURLを指定
        // redirectTo: `${window.location.origin}/auth/callback`,
        // ローカル環境でのリダイレクトURLを指定
        redirectTo: 'http://192.168.1.2:3000/auth/callback',
      },
    });
  };

  const handleGoogleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        // サーバー側でのリダイレクトURLを指定
        // redirectTo: `${window.location.origin}/auth/callback`,
        // ローカル環境でのリダイレクトURLを指定
        redirectTo: 'http://192.168.1.2:3000/auth/callback',

      },
    });
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm">
      <button
        onClick={handleGithubLogin}
      >
        <FaGithub className="w-5 h-5" />
        GitHubでログイン
      </button>
      <button
        onClick={handleGoogleLogin}
      >
        <FcGoogle className="w-5 h-5" />
        Googleでログイン
      </button>
    </div>
  );
}
