import { getServerSession } from 'next-auth';
import { getDocs } from 'firebase/firestore';

import { authOptions } from '@/auth';
import ChatInput from '@/components/ChatInput';
import { sortedMessagesRef } from '@/lib/converters/Message';
import ChatMessages from '@/components/ChatMessages';

type Props = {
  params: {
    chatId: string;
  };
};

async function ChatPage({ params: { chatId } }: Props) {
  const session = await getServerSession(authOptions);

  const initialMessages = (await getDocs(sortedMessagesRef(chatId))).docs.map(
    (doc) => doc.data()
  );

  return (
    <>
      {/* Admin Controls */}
      {/* ChatMembersBadge */}

      <div className="flex-1" style={{ minHeight: 'var(--min-height)' }}>
        <ChatMessages
          chatId={chatId}
          session={session}
          initialMessages={initialMessages}
        />
      </div>

      <ChatInput chatId={chatId} />
    </>
  );
}

export default ChatPage;
