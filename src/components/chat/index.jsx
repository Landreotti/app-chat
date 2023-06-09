import React from 'react';
import { useMultiChatLogic, MultiChatSocket, MultiChatWindow } from 'react-chat-engine-advanced';
import Header from "@/components/customHeader";
import StandardMessageForm from "@/components/customMessageForms/StandardMessageForm";

console.log("chat");
var foo = "Chat"

const Chat = () => {
  const chatProps = useMultiChatLogic(
    import.meta.env.VITE_PROJECT_ID,
    //"testuser",
    //"123456"
    import.meta.env.VITE_PROJETCT_USER,
    import.meta.env.VITE_PROJETCT_USER_PASS
  )
  return <div style={{ flexBasis: "100%" }}>
    <MultiChatSocket {...chatProps} />
    <MultiChatWindow
        {...chatProps}
        style={{ height: "100vh" }}
        renderChatHeader={(chat) => <Header chat={chat} />}
        renderMessageForm={(props) => {
          return(
            <StandardMessageForm props={props} activeChat={chatProps.chat} />
          )
        }}
    />
  </div>
}

export default Chat;