import { isRejected } from "@reduxjs/toolkit";
import { Toast } from "../../../utils/toast";
import listenerMiddleware from "../../listener-middleware";

listenerMiddleware.startListening({
  matcher: isRejected,
  effect: async (action, listenerApi) => {
    listenerApi.cancelActiveListeners();
    Toast.error(action?.error?.message ?? "");
  },
});
