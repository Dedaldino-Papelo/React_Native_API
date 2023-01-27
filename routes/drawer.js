import { createDrawerNavigator } from '@react-navigation/drawer';
import About from '../screens/About';
import Home from '../screens/Home';

const Drawer = createDrawerNavigator()

export default function Root() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    );
  }
