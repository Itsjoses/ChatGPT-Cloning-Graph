import { ConversationCheck } from "../../types/GlobalTypes";

export default function OtherBubbleChat({
  startConversation,
  endConversation,
  data,
}: ConversationCheck) {
  return (
    <div className={`text-base py-0.5 ${startConversation ? " mt-6" : ""}`}>
      <div className="flex items-center w-4/5">
        <span
          className={`py-2 px-3 text-black bg-gray-300 rounded-br-roundedAll break-words rounded-tr-roundedAll 2xl:max-w-4xl xl:max-w-2xl lg:max-w-sm md:max-w-xs sm:max-w-sm ${
            startConversation
              ? " rounded-tl-roundedAll "
              : " rounded-tl-roundedBubble "
          } ${
            endConversation
              ? " rounded-bl-roundedAll"
              : " rounded-bl-roundedBubble"
          }`}
        >
          {data.message}
        </span>
      </div>
    </div>
  );
}
