import useLocalStorage from './useLocalStorage';

function usePoints(): [
  number,
  (value: number | ((val: number) => number)) => void,
] {
  const [points, setPoints] = useLocalStorage<number>('arrayPoints', 0);

  const setValue = (value: number | ((val: number) => number)) => {
    try {
      const valueToStore = value instanceof Function ? value(points) : value;
      setPoints(valueToStore);
    } catch (error) {
      console.error(error);
    }
  };

  return [points, setValue];
}

export default usePoints;
