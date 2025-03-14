import { ConversationCheck } from "../../types/GlobalTypes";

export default function MineBubbleChat({
  startConversation,
  endConversation,
  data,
}: ConversationCheck) {
  return (
    <div
      className={`text-base py-0.5 flex justify-end ${
        startConversation ? " mt-6" : ""
      }`}
    >
      <div className="flex items-center justify-end w-4/5">
        <div
          className={`py-2 px-3 whitespace-normal text-white bg-blue-500 break-words rounded-bl-roundedAll rounded-tl-roundedAll 2xl:max-w-4xl xl:max-w-2xl lg:max-w-sm md:max-w-xs sm:max-w-sm ${
            startConversation
              ? " rounded-tr-roundedAll"
              : " rounded-tr-roundedBubble"
          } ${
            endConversation
              ? " rounded-br-roundedAll"
              : "rounded-br-roundedBubble"
          }`}
        >
          <p className="">{data.message}</p>
        </div>
      </div>
    </div>
  );
}
