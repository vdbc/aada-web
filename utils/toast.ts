import { toast } from "react-toastify";
export class Toast {
  static success(message: string) {
    if (!message) return;
    toast.success(message);
  }
  static error(message: string) {
    if (!message) return;
    toast.error(message);
  }
}
