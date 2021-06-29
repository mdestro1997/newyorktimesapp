/* eslint-disable no-undef */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import _ from 'lodash';
import { fetchData } from '../actionCreators/index';


let styles = {
    root: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(25rem, 1fr))',
      gap: '20px',
      placeItems: 'center',
      padding: '20px',
    },
  
    cardContainer: { marginTop: '20px', height: '100%' },
  
    card: { width: '25rem', height: '100%' },
  
    imageContainer: { width: '100%', height: '300px', overflow: 'hidden', backgroundColor: '#dcdcdc' },
  
    image: { width: '100%', objectPosition: 'center' },
  };


class MostViewed extends Component {
	componentDidMount() {
		this.props.fetchData();
	}

    

	renderList() {
		if (this.props.newyorktimes.data) {
			return (
                <div style={styles.root}>
                {_.map(this.props.newyorktimes.data.results, (story) => {
                  console.log(story);
                  const url = story.media[0]?.['media-metadata']?.[0].url;
                  // results[0].media[0]["media-metadata"][0].url
                  // const imageUrl=story.media.media-metadata[0].url
                  // console.log('url',  story.media[0]["media-metadata"][0].url);
                  return (
                    <div key={story.id} style={styles.cardContainer}>
                      <Card style={styles.card}>
                        <div style={styles.imageContainer}>
                          <Card.Img alt="" src={url} style={styles.image} />
                        </div>
      
                        <Card.Body>
                          <Card.Title>{story.title}</Card.Title>
                          <Card.Text>{story.abstract}</Card.Text>
                          <Button variant="primary" href={story.url}>
                            Read More
                          </Button>
                        </Card.Body>
                      </Card>
                    </div>
                  );
                })}
              </div>
			);
		}
	}

	render() {
		if (this.props.newyorktimes.data) {
			console.log(
				'calling New York Office ',
				this.props.newyorktimes.data.results[0].media[0]['media-metadata'][2]
					.url
			);
		}
		return <div>{this.renderList()}</div>;
	}
}

function mapStateToProps(state, props) {
	return { newyorktimes: state.newYorkTimesData };
}

export default connect(mapStateToProps, { fetchData })(MostViewed);
