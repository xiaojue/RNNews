var React = require('react-native');

var styles = require('../styles/PageStyle');

var {
  Text,
  View
} = React;

var VideosView = React.createClass({
  render:function(){
    return(
      <View style={ styles.pageView }>
        <Text>视频</Text>
      </View>
    )       
  }
});

module.exports = VideosView;
