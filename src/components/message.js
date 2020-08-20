import { store } from "react-notifications-component";

export const notify = (type, title, msg, dur) => {
  store.addNotification({
    title: title,
    message: msg,
    type: type,
    insert: "top",
    container: "top-right",
    animationIn: ["animated", "fadeIn"],
    animationOut: ["animated", "fadeOut"],
    dismiss: {
      duration: dur || 2000,
      onScreen: true,
    },
  });
};
