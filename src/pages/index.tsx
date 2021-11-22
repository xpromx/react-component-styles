import type { NextPage } from "next";
import Link from "next/link";

const Page: NextPage = () => {
  return (
    <div className="p-10 text-center h-screen flex items-center justify-center">
      <div>
        <h1 className="text-4xl text-black w-full mb-10">Hello World!</h1>
        <ul>
          <li className="mt-4">
            <Link href="/tailwindcss">
              <a className="text-green-700 hover:underline">Tailwind CSS</a>
            </Link>
          </li>
          <li className="mt-4">
            <Link href="/styled-components">
              <a className="text-green-700 hover:underline">Styled-Components</a>
            </Link>
          </li>
          <li className="mt-4">
            <Link href="/chakra-ui">
              <a className="text-green-700 hover:underline">Chakra UI</a>
            </Link>
          </li>

          <li className="mt-4">
            <Link href="/css-modules">
              <a className="text-green-700 hover:underline">CSS Modules</a>
            </Link>
          </li>
          <li className="mt-4">
            <Link href="/tailwindcss-v2">
              <a className="text-green-700 hover:underline">Tailwind CSS v2</a>
            </Link>
          </li>
          <li className="mt-4">
            <Link href="/css-modules-tailwindcss">
              <a className="text-green-700 hover:underline">CSS Modules + Tailwind CSS</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
