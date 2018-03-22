import { StackNavigator } from 'react-navigation'
import InscricaoShowScreen from '../Containers/InscricaoShowScreen'
import LaunchScreen from '../Containers/LaunchScreen'
import { Platform, StatusBar } from 'react-native'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  InscricaoShowScreen: { screen: InscricaoShowScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  
  cardStyle: {
    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
  },
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
