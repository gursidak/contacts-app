import TOAST_KEYS from "@/constants/toastKeys.constant";
import { get } from "lodash";
import Router from "next/router";
import { toast } from "react-toastify";

export const handleAPIErrors = (
  error: any,
  redirects?: object,
  key?: string
) => {
  if (error.code === "ERR_NETWORK") {
    toast.error(error.message, {
      toastId: TOAST_KEYS.NETWORK_ERROR,
    });
    return;
  }

  const statusCode = error.response?.status;
  let errorResponse: any = "";

  if (error.response?.data) {
    errorResponse = error.response.data;
  }

  if (redirects && Object.keys(redirects).length > 0) {
    const code = Object.keys(redirects).find((code) => code == statusCode);
    const redirectsTo = get(redirects, `${code}`);
    Router.replace(redirectsTo);
  }

  if (typeof errorResponse === "string") toast.error(errorResponse);
  else if (get(errorResponse, "message", undefined))
    toast.error(errorResponse.message, {
      toastId: key,
    });
  else if (get(errorResponse, "messages", undefined))
    errorResponse.messages.map((err: any) => toast.error(err.message));
  else
    toast.error("Unknown error occurred, try again some time later", {
      toastId: key,
    });
};
