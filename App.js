// import React, {useEffect, useRef} from 'react';
// import {
//   Animated,
//   View,
//   StyleSheet,
//   PanResponder,
//   Text,
//   Easing,
//   Dimensions,
//   PixelRatio,
// } from 'react-native';

// const {
//   width: SCREEN_WIDTH,

//   height: SCREEN_HEIGHT,
// } = Dimensions.get('window');

// const scale = SCREEN_HEIGHT / 812;

// const normalizeFont = size => {
//   const newSize = size * scale;

//   if (Platform.OS === 'android') {
//     return Math.round(PixelRatio.roundToNearestPixel(newSize));
//   } else {
//     return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
//   }
// };
// const widthFromPixel = (widthPx, w = 375) => {
//   const newSize = widthPx * (SCREEN_WIDTH / w);

//   return newSize;
// };

// const heightFromPixel = (heightPx, h = 812) => {
//   const newSize = heightPx * (SCREEN_HEIGHT / h);

//   return newSize;
// };
// const App = () => {
//   const position = new Animated.Value(0);

//   useEffect(() => {
//     Animated.parallel(
//       [
//         Animated.timing(position, {
//           toValue: 0,
//           duration: 100,
//           useNativeDriver: true,
//           // easing: Easing.back(),
//         }),
//         Animated.timing(position, {
//           toValue: 0,
//           duration: 200,
//           useNativeDriver: true,
//         }),
//         Animated.timing(position, {
//           toValue: 0,
//           duration: 4000,
//           useNativeDriver: true,
//         }),
//         Animated.timing(position, {
//           toValue: 0,
//           duration: 300,
//           useNativeDriver: true,
//         }),
//       ],
//       {stopTogether: false},
//     ).start(() => alert('hi'));
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Animated.View
//         style={{
//           transform: [{translateY: position}],
//         }}>
//         <View style={styles.box} />
//       </Animated.View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   titleText: {
//     fontSize: 14,
//     lineHeight: 24,
//     fontWeight: 'bold',
//   },
//   box: {
//     height: heightFromPixel(150),
//     width: widthFromPixel(150),
//     backgroundColor: 'blue',
//     borderRadius: 100,
//   },
// });

// export default App;
import React, {useEffect, useRef} from 'react';
import {
  Animated,
  View,
  StyleSheet,
  PanResponder,
  Text,
  Easing,
  Dimensions,
  PixelRatio,
} from 'react-native';

const {
  width: SCREEN_WIDTH,

  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scale = SCREEN_HEIGHT / 812;

const normalizeFont = size => {
  const newSize = size * scale;

  if (Platform.OS === 'android') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 1;
  }
};
const widthFromPixel = (widthPx, w = 375) => {
  const newSize = widthPx * (SCREEN_WIDTH / w);

  return newSize;
};

const heightFromPixel = (heightPx, h = 812) => {
  const newSize = heightPx * (SCREEN_HEIGHT / h);

  return newSize;
};
const App = () => {
  const position = new Animated.ValueXY({
    x: widthFromPixel(0),
    y: heightFromPixel(0),
  });

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(position, {
          toValue: {x: 0, y: heightFromPixel(812) - heightFromPixel(150)},
          speed: 2,
          // easing: Easing.back(),
          useNativeDriver: true,
        }),
        Animated.timing(position, {
          toValue: {
            x: widthFromPixel(375) - widthFromPixel(150),
            y: heightFromPixel(812) - heightFromPixel(150),
          },
          speed: 2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(position, {
          toValue: {x: widthFromPixel(375) - widthFromPixel(150), y: 0},
          speed: 2,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(position, {
          toValue: {x: 0, y: 0},
          speed: 2,
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      {
        iterations: 2,
      },
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          transform: [{translateX: position.x}, {translateY: position.y}],
        }}>
        <View style={styles.box} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  box: {
    height: heightFromPixel(150),
    width: widthFromPixel(150),
    backgroundColor: 'blue',
    borderRadius: 100,
  },
});

export default App;
