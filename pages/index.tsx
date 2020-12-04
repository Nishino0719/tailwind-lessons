import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <section className="h-screen w-4/5 max-w-5xl mx-auto flex items-center justify-center flex-col">
      <div className="flex">
      <div className="space-x-10 container w-12 m-2 p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z" />
        </svg>
      </div>
      <div className="w-12 p-2 m-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      </div>
      </div>
      <h1 className="mb-4 text-green-500 text-3xl ">サンプル</h1>
      <p className="mb-2 text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        blanditiis consequatur eius hic ipsam nostrum omnis optio! Doloribus
        quaerat quis ratione? At, maiores voluptas? Eveniet odio omnis
        repellendus sapiente voluptatibus.
      </p>
      <button className="">Let's Start!!</button>
    </section>
  );
}
