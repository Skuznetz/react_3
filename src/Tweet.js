import React, { Component } from 'react';

class Tweet extends Component{
  render(){
    const {
      avatar,
      author,
      text,
      image,
      retweets,
      likes
  } = this.props;
    return (
      <div className="tweet">
      <img className="tweet-avatar" src={avatar} />

      <div className="tweet-body">
          <a
              className="tweet-author"
              href={`https://twitter.com/${author}`}
              target="blank"
          >
              @{author}
          </a>

          <p className="tweet-text">
              {text}
          </p>

          {
              image &&
              <img className="tweet-image" src={image} />
          }

          <div className="tweet-stats">
              <div className="tweet-retweets">
                  <i className="tweet-stat-icon fa fa-retweet" />
                  {retweets || null}
              </div>
              <div className="tweet-likes">
                  <i className="tweet-stat-icon fa fa-heart" />
                  {likes || null}
              </div>
          </div>
      </div>
  </div>
        
      
    )
  }
}

export default Tweet;