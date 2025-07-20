import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signin",
  description: "SignIn with your account.",
};

export default function SignIn() {
    
  return (
    <section className="w-full h-dvh flex justify-center items-center">
      <h1>Login page</h1>
    </section>
  );
}
