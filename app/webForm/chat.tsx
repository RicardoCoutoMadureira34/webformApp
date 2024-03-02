import React from "react";

interface ChatBubbleProps {
  sender: string;
  message: string;
  isCurrentUser: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  sender,
  message,
  isCurrentUser,
}) => {
  const bubbleClasses = isCurrentUser
    ? "bg-blue-500 text-white float-right"
    : "bg-gray-300 text-black float-left";

  return (
    <div className={`max-w-xs mx-2 my-2 p-4 rounded-lg ${bubbleClasses}`}>
      <p className="font-bold">{sender}</p>
      <p>{message}</p>
    </div>
  );
};

export default ChatBubble;
