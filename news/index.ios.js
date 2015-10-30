/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

var {
  AppRegistry,
  TabBarIOS,
  Text,
  View
} = React;

var NewsView = require('./iosjs/pages/NewsView');
var PicsView = require('./iosjs/pages/PicsView');
var VideosView = require('./iosjs/pages/VideosView');
var SettingView = require('./iosjs/pages/SettingView');

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
          selected={ this.state.selectedTab === 'news'} onPress={() => {this.setState({
            selectedTab:'news' 
          })}}>

          <NewsView></NewsView>
          
        </TabBarIOS.Item>

        <TabBarIOS.Item title="图片" icon={require('image!tabbar_picture')}
          selected={ this.state.selectedTab === 'pics'} onPress={ () => {this.setState({
            selectedTab:'pics' 
          })}}>

          <PicsView></PicsView>
          
        </TabBarIOS.Item>

        <TabBarIOS.Item title="视频" icon={require('image!tabbar_video')}
          selected={ this.state.selectedTab === 'videos'} onPress={ () => {this.setState({
            selectedTab:'videos' 
          })}}>
          
          <VideosView></VideosView>
        </TabBarIOS.Item>

        <TabBarIOS.Item title="我的" icon={require('image!tabbar_setting')}
          selected={ this.state.selectedTab === 'setting'} onPress={ () => {this.setState({
            selectedTab:'setting' 
          })}}>
          
          <SettingView></SettingView>
        </TabBarIOS.Item>
      
      </TabBarIOS>
      );
  }
});


AppRegistry.registerComponent('news', () => news);
