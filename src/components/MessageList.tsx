import { cn } from "@/lib/utils";
import { Message } from "ai/react";
import React from "react";
import { Skeleton } from "./ui/skeleton";

type Props = {
  messages: Message[];
  isLoading: boolean;
};

const MessageList = ({ messages, isLoading }: Props) => {
  if (isLoading) {
    return <Skeleton className="absolute top-2 left-2 w-[100px] h-[20px]" />;
  }
  if (!messages) {
    return <></>;
  }

  return (
    <div className="flex flex-col gap-2 px-4">
      {messages.map((message) => {
        return (
          <div
            key={message.id}
            className={cn("flex", {
              "justify-end pl-10": message.role === "user",
              "justify-start pr-10": message.role === "assistant",
            })}
          >
            <div
              className={cn("rounded-lg px-4 py-2", {
                "bg-blue-600 text-white": message.role === "user",
                "bg-gray-100 text-slate-500": message.role === "assistant",
              })}
            >
              <p>{message.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageList;
