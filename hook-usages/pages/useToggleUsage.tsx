import Head from 'next/head';
import React from 'react';
import { useToggle } from 'rk-react-hooks';

function UseToggleUsage() {
  const [state, toggle] = useToggle();
  return (
    <>
      <Head>
        <title>useToggle</title>
      </Head>
      <div className="mx-auto flex justify-center items-center h-screen">
        <div className="">
          <p className="text-lg">
            State: <span className={`${state ? 'text-green-300' : 'text-red-400'}`}>{state ? 'ON' : 'OFF'}</span>
          </p>
          <div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-2 rounded"
              onClick={() => toggle()}>
              Toggle
            </button>

            <button
              className=" ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-2 rounded"
              onClick={() => toggle(true)}>
              Set ON
            </button>

            <button
              className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mt-2 rounded"
              onClick={() => toggle(false)}>
              Set Off
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UseToggleUsage;
