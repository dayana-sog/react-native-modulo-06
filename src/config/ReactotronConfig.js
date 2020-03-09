import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  // Sempre que chamar o console.tron será o console do reactroton. => Console.log.tron .
  console.tron = tron;

  tron.clear();
}
