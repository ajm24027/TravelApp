import { Text } from 'react-native'
import styles from './styles'

// Props can be destructured and the individual props can be targeted by whatever name they were given higher up in the hierarchy.

const Title = ({ text, style }) => {
  return <Text style={[styles.title, style]}>{text}</Text>
}

export default Title
