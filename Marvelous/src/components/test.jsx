var VIDEOS = {
    deer: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4',
    snail: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-slow.mp4',
    cat: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
    spider: 'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-eek.mp4'
};



//--------------------------------------------
var App = React.createClass({
    getInitialState: function () {
        return { src: VIDEOS.deer };
    },

    chooseVideo: function (newVideo) {
        this.setState({
            src: VIDEOS[newVideo]
        });
    },

    render: function () {
        return (
            <div>
                <h1>React Video Player</h1>
                <Menu chooseVideo={this.chooseVideo} />
                <Video src={this.state.src} />
            </div>
        );
    }
});

//--------------------------------------------
var Video = React.createClass({
    render: function () {
        return (
            <div>
                <video
                    controls
                    autoPlay
                    src={this.props.src} />
            </div>
        );
    }
});

// Generate Order Data
const createData = (id, title) => {
    return { id, title }
}
const phase1 = [
    createData(0, 'Iron Man 1'),
    createData(1, 'The Incredible Hulk'),
    createData(2, 'Iron Man 2'),
    createData(3, 'Thor'),
    createData(4, 'Captain America - The First Avenger'),
    createData(5, 'The Avengers'),
]//Iron Man 3
const phase2 = [
    createData(0, 'Iron Man 3'),
    createData(1, 'Thor The Dark World'),
    createData(2, 'Captain America The Winter Soldier'),
    createData(3, 'Guardians of the Galaxy'),
    createData(4, 'Avengers Age of Ultron'),
    createData(5, 'Ant-Man'),
]
const phase3 = [
    createData(0, 'Captain America Civil War'),
    createData(1, 'Doctor Strange'),
    createData(2, 'Guardians Of The Galaxy Vol. 2'),
    createData(3, 'Spider-Man Homecoming'),
    createData(4, 'Thor Ragnarok'),
    createData(5, 'Black Panther'),
    createData(6, 'Avengers Infinity War'),
    createData(7, 'Ant-Man And The Wasp'),
    createData(8, 'Captain Marvel'),
    createData(9, 'Avengers End Game'),
]



//--------------------------------------------
var Menu = React.createClass({
    handleClick: function (e) {
        var text = e.target.value;
        this.props.chooseVideo(text);
    },

    render: function () {
        return (
            <form onClick={this.handleClick}>
                <input type="radio" name="src" value="deer" /> Deer
        <input type="radio" name="src" value="snail" /> Snail
        <input type="radio" name="src" value="cat" /> Cat
        <input type="radio" name="src" value="spider" /> Spider
      </form>
        );
    }
});



//--------------------------------------------
ReactDOM.render(
    <App />,
    document.getElementById('app')
);