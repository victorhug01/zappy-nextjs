import { Metadata } from "next";
import FormComponent from "./components/form";

export const metadata: Metadata = {
  title: "SignUp",
  description: "SignUp your account.",
};

export default function SignIn() {
    
  return (
    <section className="w-full h-dvh flex justify-center items-center p-6 md:p-8">
      <FormComponent/>
    </section>
  );
}
