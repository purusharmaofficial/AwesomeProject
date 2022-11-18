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
    // this.animatedValue1 = React.createRef();
    this.animatedValue1 = new Animated.Value(-130);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    this.animatedValue1.setValue(0);

    const createAnimation = function (value, duration, easing, delay = 0) {
      return Animated.timing(value, {
        toValue: 1000,
        duration: 3000,
        useNativeDriver: true,
      });
    };
    Animated.loop(
      Animated.parallel([
        createAnimation(this.animatedValue1, 2000, Easing.ease),
      ]),
    ).start();
  }

  render() {
    // const scaleText = this.animatedValue1.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: [0.5, 2],
    // });
    return (
      <View style={styles.container}>
        <Animated.Text
          style={{
            transform: [
              {translateX: this.animatedValue1},
              {
                rotate: this.animatedValue1.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
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
