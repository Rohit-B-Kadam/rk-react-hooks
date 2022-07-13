import { useCallback, useState } from 'react';

/**
 * A hooks to store and update the loader states
 * @returns loader states
 */
const useLoader = ({ message: defaultMessage = '', isLoading: defaultIsLoading = false } = {}) => {
  const [isLoading, setIsLoading] = useState(defaultIsLoading);
  const [loadingMessage, setLoadingMessage] = useState(defaultMessage);

  /**
   * This function will set isLoading=true and loadingMessage to message you send as a argument
   * @param {string} [message=''] Loading Message (optional)
   */
  const startLoading = useCallback((message: string = '') => {
    setLoadingMessage(message);
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setLoadingMessage('');
    setIsLoading(false);
  }, []);

  const changeLoadingMessage = useCallback(
    (message: string) => {
      if (isLoading) setLoadingMessage(message);
    },
    [isLoading],
  );

  return {
    loadingMessage,
    startLoading,
    stopLoading,
    isLoading,
    changeLoadingMessage,
  };
};

export default useLoader;
