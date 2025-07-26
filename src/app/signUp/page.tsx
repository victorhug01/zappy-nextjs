import { Metadata } from "next";
import FormComponent from "./components/form";
import NavbarBack from "../components/layout/navbar";

export const metadata: Metadata = {
  title: "SignUp",
  description: "SignUp your account.",
};

export default function SignIn() {
    
  return (
    <section className="w-full h-dvh min-h-dvh flex justify-center items-center p-6 md:p-8">
      <NavbarBack/>
      <FormComponent/>
    </section>
  );
}
