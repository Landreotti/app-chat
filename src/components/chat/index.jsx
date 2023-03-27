import React from 'react';
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced';
import CustomerHeader from "@/components/customHeader";

console.log("chat");
var foo = "Chat"

const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    import.meta.env.VITE_PROJETCT_USER,
    import.meta.env.VITE_PROJETCT_USER_PASS
  )
  return <div style={{ flexBasis: "100%" }}>
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <CustomerHeader chat={chat} />}
    />
  </div>
}

export default Chat;