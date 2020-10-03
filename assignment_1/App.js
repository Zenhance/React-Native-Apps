import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen'
import ProfileScreen from './src/screens/ProfileScreen';
import SemesterScreen from './src/screens/SemesterScreen';
import CourseScreen from './src/screens/CourseScreen';
import FacultyScreen from './src/screens/FacultyScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Profile : ProfileScreen,
    Semester: SemesterScreen,
    Course: CourseScreen,
    Faculty: FacultyScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "Assignment App",
    }
  }
);
export default createAppContainer(navigator);