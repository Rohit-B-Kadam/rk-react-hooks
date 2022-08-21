import useToggle from './useToggle';
import { renderHook, act } from '@testing-library/react-hooks';

// mock timer using jest
jest.useFakeTimers();

describe('useToggle', () => {
  it('Testing toggle function', () => {
    const { result } = renderHook(() => useToggle());

    const [flag, toggle] = result.current;

    expect(flag).toBe(false);

    act(() => {
      /* fire events that update state */
      toggle();
    });
    // After toggle value should be true
    expect(result.current[0]).toBe(true);

    act(() => {
      /* fire events that update state */
      toggle();
    });
    // After toggle value should be false
    expect(result.current[0]).toBe(false);

    act(() => {
      /* fire events that update state */
      toggle(false);
    });
    // As we have set nextState to be false then flag must be false
    expect(result.current[0]).toBe(false);
  });
});
