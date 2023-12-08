'use client';

import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Session } from 'next-auth';
import { auth } from '@/firebase';
import { signInWithCustomToken } from 'firebase/auth';

async function syncFirebaseAuth(session: Session) {
  if (session && session.firebaseToken) {
    try {
      await signInWithCustomToken(auth, session.firebaseToken);
    } catch (error) {
      console.error('Error signing in with custom token:', error);
    }
  } else {
    auth.signOut();
  }
}

function FirebaseAuthProvider({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;

    syncFirebaseAuth(session);
  }, [session]);

  return <>{children}</>;
}

export default FirebaseAuthProvider;
