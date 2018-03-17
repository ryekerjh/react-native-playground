import React, { Component } from 'react';
import { 
  View, 
  Text
} from 'react-native';

export class Reddit extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }
  componentDidMount() {
    fetch({
      method: 'get',
      url: 'https://www.reddit.com/.json',
      headers: {
        Accept: 'application/json'
      }
    })
    .then(res => res.json())
    .then(data => this.setState({posts: data.data.children}));
  }
  render() {
    return (
      <View>
        <Text>Reddit</Text>
        <View>
          {this.state.posts.map((post, i) => (
            <Text key={i}>{post.data.author}</Text>
          ))}
        </View>
      </View>
    )
  }
}