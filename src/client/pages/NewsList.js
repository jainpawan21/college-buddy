
import React, {Component} from 'react'
import {Row,Button} from 'reactstrap';
import axios from '../constants/axios'
import Loader from '../components/Loader'
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
    if(this.state.newsData.length === 0){
      return (
        <div>
          <Loader />
        </div>
      )
    }
    else {

    
  return (
    <div style={{overflowX: 'hidden'}}>
      
      {this.state.newsData.map((news) => {
        return(
          <Row key={news._id} className = "mt-4" style={{display: 'flex', justifyContent: 'center'}}>
            <div className="story mb-5" style={{alignSelf: 'center'}}>
              <figure className="story__shape">
                  {news.image ?  <img src={news.image} alt={news.heading} className="story__img" /> :
                  <img src={require('./../constants/photo.jpeg')} alt={news.heading} className="story__img" />}
                  <figcaption className="story__caption">{news.heading}</figcaption>
              </figure>
              <div className="story__text">
                  <p>
                      {news.news} 
                  </p>
              </div>
              {news.url && <div style={{textAlign: 'center'}} >
                <a href={news.url} target="_blank" rel="noopener noreferrer">
                <Button className="story-button" >See More</Button>
                </a>
              </div> }
            </div>  
          </Row>
        )
      })}
    </div>
   
  )
  }}
}

export default NewsList

