import { Metadata } from "next";
import FormComponent from "./components/form";
import NavbarBack from "../components/layout/navbar";

export const metadata: Metadata = {
  title: "SignUp",
  description: "SignUp your account.",
};

export default function SignIn() {
    
  return (
    <>
      <NavbarBack/>
      <section className="w-full h-auto min-h-dvh flex flex-col items-center justify-center p-6 pt-16">
        <FormComponent/>
      </section>
    </>
  );
}
