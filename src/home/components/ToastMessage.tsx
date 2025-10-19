import { toast } from "react-hot-toast";

const ToastMessage = {
  success: (message: string) => toast.success(message),
  error: (message: string) => toast.error(message),
  info: (message: string) => toast(message), // default style
};

export default ToastMessage;
