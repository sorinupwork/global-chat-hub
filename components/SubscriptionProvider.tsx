'use client';

import { onSnapshot } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

import { subscriptionRef } from '@/lib/converters/Subscription';

function SubscriptionProvider() {
  const { data: session } = useSession();

  useEffect(() => {
    if (!session) return;

    return onSnapshot(subscriptionRef(session?.user?.id), (snapshot) => {
      if (snapshot.empty) {
        console.log('User has NO subscription');
        return;
      } else {
        console.log('USer has subscription!');

        // Set subscription
      }
    });
  }, [session]);

  return <div>SubscriptionProvider</div>;
}

export default SubscriptionProvider;
