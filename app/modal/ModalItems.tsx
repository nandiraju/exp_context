import NewsCard from "@/components/NewsCard";
import ForgotPassword from "../(auth)/ForgotPassword";

export const ModalItems: Record<string, React.ComponentType<any>> = {
  news: NewsCard,
  forgot: ForgotPassword,
};
