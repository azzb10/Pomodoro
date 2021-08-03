import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

const contador = 0;

const useCount = () => {
  const navigation = useNavigation();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const loadCount = navigation.addListener('focus', () => {
      const value = contador;
      setCount(value);
    });

    return loadCount;
  }, [navigation]);

  return [count];
};

export default useCount;
