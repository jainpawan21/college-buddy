
import React, {Component} from 'react'
import {Row,Button} from 'reactstrap';
import axios from '../constants/axios'



class NewsList extends Component {
  constructor(props){
    super(props)
    this.state = {
      newsData: [],
      error: ''
    }
  }
  
  componentWillMount() {
    axios.get('news')
    .then((res) => {
      this.setState({
        newsData: res.data.news,
        error: res.data.news[0].heading
      })
    })
    
    .catch((err) => this.setState({error: err.response}))
  }


  render() {
  return (
    <div>
      {this.state.newsData.map((news) => {
        return(
          <Row key={news._id} className = "row mt-3 mb-3">
            <div className="story">
              <figure className="story__shape">
                  <img src={require('./../constants/photo.jpeg')} alt="Person on a tour" className="story__img" />
                  <figcaption className="story__caption">{news.heading}</figcaption>
              </figure>
              <div className="story__text">
                  <p>
                      {news.news} 
                  </p>
              </div>
              <div style={{textAlign: 'center'}} >
                <Button className="story-button">See More</Button>
              </div> 
            </div>  
          </Row>
        )
      })}
    </div>
   
  )
  }
}

export default NewsList

