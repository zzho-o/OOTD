// import SignupScreenTest from './src/screens/Signup/SignupScreenTest';
// import {View, Text} from 'react-native';
// import {Session} from '@supabase/supabase-js';

import {NavigationContainer} from '@react-navigation/native';
import 'react-native-url-polyfill/auto';
import Router from './src/router.jsx';

export default function App() {
  // const [session, setSession] = useState<Session | null>(null);

  // useEffect(() => {
  //   supabase.auth.getSession().then(({data: {session}}) => {
  //     setSession(session);
  //   });

  //   supabase.auth.onAuthStateChange((_event, session) => {
  //     setSession(session);
  //   });
  // }, []);

  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

// export default App;
//     <View>
//       <SignupScreenTest />
//       {session && session.user && <Text>{session.user.id}</Text>}
//     </View>
//   );
// }
