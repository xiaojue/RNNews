var React = require('react-native');

var styles = require('../styles/PageStyle');

var {
  Text,
  View
} = React;

var SettingView = React.createClass({
  render:function(){
    return(
      <View style={ styles.pageView }>
        <Text>设置</Text>
      </View>
    )       
  }
});

module.exports = SettingView;
