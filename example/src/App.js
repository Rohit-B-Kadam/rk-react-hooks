import React from 'react';

import { useBoolean, useLoader } from 'react-use-hooks';

const App = () => {
  const { value, toggle } = useBoolean(false);
  const { isLoading, loadingMessage, startLoading, stopLoading } = useLoader({
    isLoading: true,
    message: 'Initial Loading Message...',
  });
  return (
    <div>
      <button onClick={toggle}>Toggle: {value ? 1 : 0}</button>
      <button onClick={() => startLoading('Loading Message...')} disabled={isLoading}>
        Start Loading
      </button>
      <button onClick={stopLoading} disabled={!isLoading}>
        Stop Loading
      </button>
      {isLoading && <p>{loadingMessage}</p>}
    </div>
  );
};
export default App;
