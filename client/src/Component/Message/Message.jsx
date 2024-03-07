import React from "react";
import { message } from "antd";
const Message = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const showMessage = ({ type, content }) => {
    messageApi.open({
      className: "text-white text-[1rem] font-medium",
      type: type,
      content: content,
    });
  };

  return <div>{contextHolder}</div>;
};
export default Message;
