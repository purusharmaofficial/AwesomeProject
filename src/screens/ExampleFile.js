import React, {Component} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  PanResponder,
  Text,
  Image,
  Easing,
  Dimensions,
  Pressable,
} from 'react-native';
const {width} = Dimensions.get('window');
export default class MarqueeText extends Component {
  constructor() {
    super();
    this.animatedValue1 = new Animated.Value(-250);
  }
  componentDidMount() {
    this.animate();
  }
  animate() {
    this.animatedValue1.setValue(0);
    const createAnimation = function (value, duration, easing, delay = 0) {
      return Animated.timing(value, {
        toValue: 800,
        duration: 3000,
        useNativeDriver: true,
        easing,
      });
    };
    Animated.loop(
      Animated.parallel([
        createAnimation(this.animatedValue1, 2000, Easing.ease),
      ]),
    ).start();
  }
  render() {
    return (
      <View style={styles.container}>
        <Animated.Text
          style={{
            transform: [{translateX: this.animatedValue1}],
            fontSize: 30,
          }}>
          Marquee Text
        </Animated.Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
