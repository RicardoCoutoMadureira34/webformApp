import React from "react";
import Chat from "./chat";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <div>
        <button className="btn btn-primary">
          <Link href="/">Home</Link>
        </button>
      </div>
      <div className="pt-10 px-80 py-10">
        <Chat sender="User 1" message="Hello there!" isCurrentUser={true} />
        <Chat
          sender="User 2"
          message="Hi! How can I help you?"
          isCurrentUser={false}
        />
        {/* Add more ChatBubble components with different messages */}
      </div>
    </div>
  );
};

export default page;
