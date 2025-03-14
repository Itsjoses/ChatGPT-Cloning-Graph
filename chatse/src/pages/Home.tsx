import DynamicLayout from "../components/layouts/DynamicLayout";
import Navbar from "../components/layouts/Navbar";
import Header from "../components/layouts/Header";
import { useEffect, useState } from "react";
import MessageList from "../components/bubble-chats/MessageList";
import { graphType, Message } from "../types/GlobalTypes";
import { apiGetGraph, apiPostMessage } from "../api/openai";
import Footer from "../components/layouts/Footer";

import { FaAngleDoubleRight, FaAngleDoubleLeft } from "react-icons/fa";
import SigmaGraph from "../components/sigma/SigmaGraph";
import SelectButton from "../components/button/SelectButton";
import JumbotronHello from "../components/etc/JumbotronHello";

export default function Home() {
  const [allMessages, setAllMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const [type, setType] = useState<string>("General");
  const [graphData, setGraphData] = useState<graphType[]>([]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message === "") return;
    setAllMessages((prevMessages) => [
      ...prevMessages,
      { author: "mine", message: message },
    ]);

    const postMessage = message;
    setMessage("");
    const res = await apiPostMessage({ message: postMessage, type: type });
    let messageRes = "";

    if (type == "Graph") {
      setGraphData(res);
      messageRes = "Check your graph result";
    } else {
      messageRes = res;
    }

    setAllMessages((prevMessages) => [
      ...prevMessages,
      { author: "other", message: messageRes },
    ]);
  };

  useEffect(() => {
    const resGraph = async () => {
      const res = await apiGetGraph();
      setGraphData(res);
    };

    resGraph();
  }, []);

  return (
    <div className="flex overflow-hidden relative">
      <div
        className={`absolute w-[80%] transition-all ease-in-out duration-1000 ${
          toggle == true ? "right-0" : "-right-[80%]"
        }  h-full bg-white `}
      >
        <div
          className="absolute -left-10 top-1/2 bg-gray-500 hover:bg-gray-600 cursor-pointer text-xl w-10 h-10 items-center justify-center"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        >
          <div className="flex w-full h-full items-center justify-center">
            {toggle == true ? (
              <FaAngleDoubleRight className=" text-white rounded-lg text-xl" />
            ) : (
              <FaAngleDoubleLeft className=" text-white rounded-lg text-xl" />
            )}
          </div>
        </div>
        <SigmaGraph data={graphData} />
      </div>
      <Navbar />
      <div className="flex-col h-screen flex box-border bg-[#212121] w-full">
        <Header />
        {allMessages.length == 0 ? (
          <JumbotronHello />
        ) : (
          <div className="flex-1 grow basis-auto overflow-y-scroll">
            <DynamicLayout border={false}>
              <MessageList allMessage={allMessages} />
            </DynamicLayout>
          </div>
        )}

        <div className="">
          <DynamicLayout border={false}>
            <div className="flex flex-col gap-2">
              <div className="flex gap-4 mt-2">
                <SelectButton text="General" type={type} setType={setType} />
                <SelectButton text="Graph" type={type} setType={setType} />
              </div>
              <div className="bg-[#303030] rounded-full px-8 py-4 text-gray-400">
                <form
                  action=""
                  onSubmit={onSubmit}
                  className=" flex gap-4 items-center w-full"
                >
                  <input
                    className="bg-transparent outline-none w-full"
                    placeholder="Enter Prompt Here"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                  />
                  <button type="submit">Kirim</button>
                </form>
              </div>
            </div>
          </DynamicLayout>
        </div>
        <Footer />
      </div>
    </div>
  );
}
