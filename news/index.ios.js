/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} = React;

var news = React.createClass({
  getInitialState() {
    return {
      selectedTab: 'news'
    }
  },
  
  render: function() {
    return(
      <TabBarIOS>

        <TabBarIOS.Item title="新闻" icon={require('image!tabbar_news')}
          selected={ this.state.selectedTab === 'news'}>
          
          <View style={ styles.pageView }>
            <Text>新闻</Text>
          </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item title="图片" icon={require('image!tabbar_picture')}
          selected={ this.state.selectedTab === 'pics'}>
          
          <View style={ styles.pageView }>
            <Text>图片</Text>
          </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item title="视频" icon={require('image!tabbar_video')}
          selected={ this.state.selectedTab === 'videos'}>
          
          <View style={ styles.pageView }>
            <Text>视频</Text>
          </View>
        </TabBarIOS.Item>

        <TabBarIOS.Item title="我的" icon={require('image!tabbar_setting')}
          selected={ this.state.selectedTab === 'setting'}>
          
          <View style={ styles.pageView }>
            <Text>我的</Text>
          </View>
        </TabBarIOS.Item>
      
      </TabBarIOS>
      );
  }
});

var styles = StyleSheet.create({
  pageView: {
    backgroundColor: '#fff',
    flex: 1
  }
});

AppRegistry.registerComponent('news', () => news);
