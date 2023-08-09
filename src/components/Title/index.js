import React, {useState, useEffect} from 'react';
import {Text} from 'react-native';
import styles from './styles';

// Props can be destructured and the individual props can be targeted by whatever name they were given higher up in the hierarchy.

const Title = ({text}) => {
  const [stateText, setStateText] = useState(true);
  useEffect(() => {
    console.log('Hello UseEffect');
  }, []);

  const onTextPress = () => {
    console.log('pressed! - stateText =', stateText);
    setStateText(false);
  };

  const onTextRelease = () => {
    console.log('released! - stateText =', stateText);
    setStateText(true);
  };

  console.log('state >>', stateText);
  return (
    <Text style={styles.title} onPress={onTextPress} onPressOut={onTextRelease}>
      {stateText ? <Text>Default State</Text> : <Text>Updated State</Text>}
    </Text>
  );
};

Title.defaultProps = {
  text: 'Default Text',
};

export default Title;
