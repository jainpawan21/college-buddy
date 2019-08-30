
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
      })
    })
    
    .catch((err) => this.setState({error: err.response}))
  }


  render() {
  return (
    <div>
      {this.state.newsData.map((news) => {
        return(
          <Row key={news._id} className = "mt-5 ">
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
              {news.url && <div style={{textAlign: 'center'}} >
                <a href={news.url} target="_blank">
                <Button className="story-button" >See More</Button>
                </a>
              </div> }
            </div>  
          </Row>
        )
      })}
    </div>
   
  )
  }
}

export default NewsList

