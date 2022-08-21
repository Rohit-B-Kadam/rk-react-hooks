import Head from 'next/head';
import Link from 'next/link';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>React Hooks</title>
        <meta name="description" content="A set of essential react hooks by Rohit Kadam" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container  mx-auto">
          <div className="text-center py-6">
            <h1 className="text-3xl font-bold px-4">React Hooks</h1>
          </div>
          <div className="bg-gray-900 shadow-inner overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-100">rk-react-hooks</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-300">A set of essential react hooks</p>
            </div>
            <div>
              <dl>
                <Link href={'./useToggleUsage'}>
                  <div className="bg-gray-900 hover:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t border-gray-700 cursor-pointer">
                    <dt className="text-sm font-medium text-gray-200">1. useToggle()</dt>
                    <dd className="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2">
                      Basically, what this hook does is that, it takes a parameter with value true or false and toggles
                      that value to opposite. It's useful when we want to take some action into it's opposite action,
                      for example: show and hide modal, show more/show less text, open/close side menu.
                    </dd>
                  </div>
                </Link>

                <div className="bg-gray-900 hover:bg-gray-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 border-t border-gray-600">
                  <dt className="text-sm font-medium text-gray-200">
                    <Link href={'./useToggle'}>useToggle()</Link>
                  </dt>
                  <dd className="mt-1 text-sm text-gray-300 sm:mt-0 sm:col-span-2">Margot Foster</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
