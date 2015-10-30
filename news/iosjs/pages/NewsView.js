var React = require('react-native');

var styles = require('../styles/PageStyle');

var {
  Text,
  View
} = React;

var NewsView = React.createClass({
  render:function(){
    return(
      <View style={ styles.pageView }>
        <Text>新闻</Text>
      </View>
    )       
  }
});

module.exports = NewsView;
