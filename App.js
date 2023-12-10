import { NavigationContainer } from '@react-navigation/native';
import StackNav from "./src/navigation/Stack";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
export default function App() {
    LogBox.ignoreLogs(['Warning: ...']);
    LogBox.ignoreAllLogs();
  return (
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>

  );
}

