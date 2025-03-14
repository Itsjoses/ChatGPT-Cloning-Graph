export type ConversationCheck = {
  startConversation: boolean;
  endConversation: boolean;
  data: Message;
};

export type Message = {
  author: string;
  message: string | undefined | null;
};

export type AllMessage = {
  allMessage: Message[] | null;
};

export type graphType = {
  node_1: string;
  node_2: string;
  edge: string;
};

export const fakeMessage: Message[] = [
  {
    author: "mine",
    message:
      "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
  },
  {
    author: "other",
    message:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
  },
  {
    author: "other",
    message:
      "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
  },
  {
    author: "mine",
    message:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
  },
  {
    author: "mine",
    message:
      "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
  },
  {
    author: "mine",
    message:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
  },
  {
    author: "other",
    message:
      "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
  },
  {
    author: "other",
    message:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
  },
  {
    author: "mine",
    message:
      "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
  },
  {
    author: "other",
    message:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
  },
  {
    author: "mine",
    message:
      "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
  },
  {
    author: "other",
    message:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
  },
  {
    author: "other",
    message:
      "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
  },
  {
    author: "mine",
    message:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
  },
  {
    author: "mine",
    message:
      "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
  },
  {
    author: "mine",
    message:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
  },
  {
    author: "other",
    message:
      "Hello world! This is a long message that will hopefully get wrapped by our message bubble component! We will see how well it works.",
  },
  {
    author: "other",
    message:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
  },
  {
    author: "mine",
    message:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
  },
  {
    author: "other",
    message:
      "It looks like it wraps exactly as it is supposed to. Lets see what a reply looks like!",
  },
];

export const data = [
  {
    node_1: "Eiffel Tower",
    node_2: "landmark",
    edge: "The Eiffel Tower is a famous landmark.",
  },
  {
    node_1: "Eiffel Tower",
    node_2: "Paris",
    edge: "The Eiffel Tower is located in Paris.",
  },
  { node_1: "Paris", node_2: "France", edge: "Paris is a city in France." },
  {
    node_1: "Eiffel Tower",
    node_2: "France",
    edge: "The Eiffel Tower is recognized as a symbol of France.",
  },
  {
    node_1: "Eiffel Tower",
    node_2: "Gustave Eiffel",
    edge: "The Eiffel Tower was designed by Gustave Eiffel.",
  },
  {
    node_1: "Eiffel Tower",
    node_2: "1889",
    edge: "The Eiffel Tower was completed in 1889.",
  },
  {
    node_1: "Eiffel Tower",
    node_2: "iron",
    edge: "The structure of the Eiffel Tower is made of iron.",
  },
  {
    node_1: "Eiffel Tower",
    node_2: "330 meters",
    edge: "The Eiffel Tower stands at a height of 330 meters.",
  },
  {
    node_1: "Eiffel Tower",
    node_2: "tourists",
    edge: "The Eiffel Tower attracts millions of tourists each year.",
  },
  {
    node_1: "tourists",
    node_2: "France",
    edge: "Millions of tourists visit France to see the Eiffel Tower.",
  },
  {
    node_1: "Eiffel Tower",
    node_2: "elevators",
    edge: "Visitors take elevators to reach the observation decks of the Eiffel Tower.",
  },
  {
    node_1: "Eiffel Tower",
    node_2: "observation decks",
    edge: "The Eiffel Tower has observation decks offering a panoramic view of the city.",
  },
  {
    node_1: "observation decks",
    node_2: "panoramic view",
    edge: "The observation decks provide a panoramic view of the city.",
  },
  {
    node_1: "panoramic view",
    node_2: "Paris",
    edge: "The panoramic view from the Eiffel Tower's observation decks overlooks the city of Paris.",
  },
];
