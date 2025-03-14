import { axiosHttpRequest } from "../libs/api";

export const apiPostMessage = async (data: {
  message: string;
  type: string;
}) => {
  try {
    const responseData = await axiosHttpRequest({
      endpoint: `/openai/chat`,
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        message: data.message,
        type: data.type,
      },
      method: "POST",
    });
    return responseData.data;
  } catch (error) {
    throw "Internal Error";
  }
};

export const apiGetGraph = async () => {
  try {
    const responseData = await axiosHttpRequest({
      endpoint: `/graph`,
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    return responseData.data;
  } catch (error) {
    throw error;
  }
};
