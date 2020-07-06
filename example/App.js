/**
 * Sample React Native App
 *
 * adapted from App.js generated by the following command:
 *
 * react-native init example
 *
 * https://github.com/facebook/react-native
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NativeEventEmitter,
  NativeModules,
} from 'react-native';
import TTAd, {loadSplashAd, DrawFeedAd} from 'react-native-ad';

export default class App extends Component<{}> {
  state = {
    status: 'starting',
    message: '--',
  };

  componentDidMount() {
    // console.log('组件', DrawFeedAd);
    TTAd.init('5016582');
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>☆BytedAd example☆</Text>
        <Text style={styles.instructions}>STATUS: {this.state.status}</Text>
        <Text style={styles.welcome}>☆NATIVE CALLBACK MESSAGE☆</Text>
        <Text style={styles.instructions}>{this.state.message}</Text>
        <TouchableOpacity
          style={{
            marginVertical: 20,
            paddingHorizontal: 30,
            paddingVertical: 15,
            backgroundColor: '#F96',
            borderRadius: 50,
          }}
          onPress={() => {
            const splashAd = loadSplashAd('5016582', '816582039');

            splashAd.subscrib('onAdTimeOver', event => {
              console.log('广告时间结束监听', event);
            });

            splashAd.subscrib('onAdSkip', i => {
              console.log('用户点击跳过监听', i);
            });

            splashAd.subscrib('onError', e => {
              console.log('开屏加载失败监听', e);
            });

            // const a = 'onAdTimeOver';
            // const { BytedADSplash } = NativeModules;

            // const event = new NativeEventEmitter(BytedADSplash);
            // event.addListener('TTSplashAdListener', reminder => {
            //   console.log(reminder);
            //   if (reminder[a]) {
            //     console.log(a, reminder[a]);
            //   }
            // });
          }}>
          <Text style={{textAlign: 'center'}}>echo Log</Text>
        </TouchableOpacity> */}
        <DrawFeedAd appid="5016582" codeid="916582757">
          <View style={{ }}>
            <Text style={{color: '#FFF'}}>Hello</Text>
          </View>
        </DrawFeedAd>

        {/* <Text>Hello</Text> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
