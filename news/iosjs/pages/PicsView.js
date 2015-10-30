var React = require('react-native');

var styles = require('../styles/PageStyle');

var {
  Text,
  View
} = React;

var PicsView = React.createClass({
  render:function(){
    return(
      <View style={ styles.pageView }>
        <Text>图片</Text>
      </View>
    )       
  }
});

module.exports = PicsView;
