var img_list = ["/images/tombstone.png", "/images/book.png", "/images/sex.png", "/images/medical-record.png"]
var img_const = ["/images/arrow-left.svg", "/images/arrow-right.svg", "/images/PhillyMap.png.png"]

class FeatureTile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img: this.props.img,
            ID: this.props.ID,
            onClick: this.props.onClick,
        };
    }

    render(){
        return(
            <div className = "featureTile">
                <div className ="featureTitle">Feature {this.props.ID}</div>
                <img src={this.state.img} onClick = {() => this.state.onClick()}></img>
            </div>
        );
    }
}

function Arrows(props){
    return(
        <div className="arrows">
            <img style={{float:'left'}} src={img_const[0]}/>
            <img style={{float:'right'}} src={img_const[1]}/>
        </div>
    );
}

class FeatureContainer extends React.Component {
    renderTile(i){
        console.log(i);
        return(
            <FeatureTile
            img = {img_list[i]}
            ID = {i}
            onClick = {() => {
                var modal = document.getElementsByClassName("myModal")[0];
                // Get the button that opens the modal
                var btn = document.getElementsByClassName("fTitle") 
                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName("close")[0];
                // When the user clicks the button, open the modal
                modal.style.display = "block";
                console.log(i)
                injectFunction(i);
                // When the user clicks on <span> (x), close the modal
                span.onclick = function() {
                    modal.style.display = "none";
                }
                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                    if (event.target == modal) {
                        modal.style.display = "none";
                        }
                }
            }}
            />
        );

    }
    render(){
        return(
            <div className="featureContainer">
                <Arrows />
                <div className = "featureGrid">
                    {this.renderTile(0)}
                    {this.renderTile(1)}
                    {this.renderTile(2)}
                    {this.renderTile(3)}
                    {this.renderTile(3)}
                    {this.renderTile(3)}
                    {this.renderTile(3)}
                </div>
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return(
            <div className="header">COVID RESOURCE APP</div>
        );
    }
}

class PhillyMap extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            img : img_const[2],
        };
    }
    render(){
        return(
            <div className="mapContainer">
                <img className="mapImage" src = {this.state.img} />
            </div>
        );
    }
}

function ModalWindow(){
        return(
            <div className="myModal modal">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <div className="txtSection">Some text in the Modal..</div>
                </div>
            </div>
        );
}


class CovidPage extends React.Component{
    render(){
        return(
            <div id="renderPage">
                <Header />
                <div className = "content">
                    <PhillyMap />
                    <FeatureContainer />
                </div>
                <ModalWindow />
            </div>
        );
    }
}
ReactDOM.render(<CovidPage />, document.getElementById('root'));