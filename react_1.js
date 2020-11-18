var img_list = ["/images/book.png", "/images/arrow-left.svg", "/images/arrow-right.svg", "/images/PhillyMap.png.png"]

class FeatureTile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img: img_list[0],
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
            <img style={{float:'left'}} src={img_list[1]}/>
            <img style={{float:'right'}} src={img_list[2]}/>
        </div>
    );
}

class FeatureContainer extends React.Component {
    renderTile(i){
        return(
            <FeatureTile
            img = {img_list[0]}
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
                    {this.renderTile(4)}
                    {this.renderTile(5)}
                    {this.renderTile(6)}
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
            img : img_list[3],
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