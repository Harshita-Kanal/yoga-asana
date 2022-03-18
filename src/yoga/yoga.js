import React, { Component } from 'react';
import './yoga.css';
class Yoga extends Component {
    constructor(props){
        super(props)
        this.state = {value: "",youtube: {}, poses: [], rend: false, res: {}, apiyes: false, };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        fetch('https://raw.githubusercontent.com/rebeccaestes/yoga_api/master/yoga_api.json')
        .then(result =>
          result.json())
        .then(newResult => {
          this.setState({poses: newResult});
          console.log(newResult)
        })
        .catch(error =>
          console.log(error))
        console.log(this.state.poses)
      }
      
      fetchyoutube() {
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=how+to+do+${this.state.res.english_name}+yoga+pose&maxResults=1&&safeSearch=moderate&key=AIzaSyBcY7xBC8qSNeUQv39-csOZ6sWqitZ1BJw`)
        .then(youtubeResult =>
          youtubeResult.json())
        .then(youtubeResult => {
          this.setState({youtube: youtubeResult.items[0]})
        
          console.log(youtubeResult.items[0])
          this.setState({apiyes: true})
        })
        .catch(error =>
          console.log(error))
      }
      handleSubmit(event) {
        let valueSelected = this.state.value
        let poses = this.state.poses
        for(let i=0; i<poses.length; i++){
          if(valueSelected === poses[i].english_name){
            let objectSelected = poses[i];
            // this.setState()
            this.setState({
              res: objectSelected
          }, () => {
            this.fetchyoutube()
          })
            console.log(objectSelected)
          }
        }

        this.setState({rend: true});
        console.log(this.state)
        event.preventDefault();
      }
    render() {
        return (
            <div className = "container">
            <h1 class="mt-1 tp">Become fluent in Yoga!</h1>
              <div id="app-explanation">
               
                </div>
                <div id="intro-background">
                {
                   this.state.rend === false ? 
                   <p class="intro">
                   Become fluent in Yoga! Yoga has over 300 known poses, each beneficial with a unique name and instruction. Choose from the list below to begin benefitting your mind and body with some of Yoga's most beloved poses. Learn the proper name to each pose and become more flexible in life with a how-to video for each pose. <br/><span class="promise">You too, can become a yogi</span>
                   </p>
                   :
                  <div>
                  <div class='position-rel'>
                   <div id="sanskrit-div"><p>{this.state.res.sanskrit_name}</p></div>
                   </div>
                   <div class='results-inline'>
                   <img id="pose-img" src={this.state.res.img_url}></img>
                     {
                     this.state.apiyes === true && this.state.youtube !== undefined ?
                     <iframe src={'https://www.youtube.com/embed/' + this.state.youtube.id.videoId}
                     frameborder='0'
                     allow='autoplay; encrypted-media'
                     allowFullScreen
                     title='video'
                      />:
                      <div></div>
                   }
                   </div>
                   </div>
                }

               
                </div>
      

                <section className="results">
                </section>
                <form onSubmit = {this.handleSubmit}>
                <select onChange = {this.handleChange} value = {this.state.value} className="select-dropdown happy_shadow">
                    <option value = "Boat" >Boat</option>
                    <option value = "Camel">Camel</option>
                    <option value = "Cow">Cow</option>
                    <option value = "Crow">Crow</option>
                    <option value = "Corpse">Corpse</option>
                    <option value = "Cat">Cat</option>
                    <option value = "Chair">Chair</option>
                    <option value = "Extended Hand to Toe">Extended Hand to Toe</option>
                    <option value = "Extended Side Angle">Extended Side Angle</option>
                    <option value = "Forward Bend with Shoulder Opener">Forward Bend with Shoulder Opener</option>
                    <option value = "Butterfly">Butterfly</option>
                    <option value = "Forearm Stand">Forearm Stand</option>
                    <option value = "Handstand">Handstand</option>
                    <option value = "Tree">Tree</option>
                    <option value = "Plank">Plank</option>
                    <option value = "Splits">Splits</option>
                    <option value = "Wheel">Wheel</option>
                    <option value = "Sphinx">Sphinx</option>
                    <option value = "Forearm Stand">Forearm Stand</option>
                    <option value = "Lotus">Lotus</option>
                    <option value = "Lotus">Lotus</option>
                </select>
                <button type="submit" name="button" class="btn btn-warning" >Enter</button>
                </form>
            
      
    </div>
        )
    }
}


export default Yoga;