import { useCallback, useState } from 'react';

/**
 * React state hook that tracks value of a boolean.
 * @param initialState
 * @returns
 */
function useToggle(initialState = false): [boolean, (nextValue?: boolean) => void] {
  const [value, setValue] = useState(initialState);

  /**
   * This function set boolean value and if nextState is not provided then it will work like toggle function
   */
  const toggle = useCallback(
    (nextState?: boolean) => setValue(state => (nextState !== undefined ? nextState : !state)),
    [],
  );

  return [value, toggle];
}

export default useToggle;
