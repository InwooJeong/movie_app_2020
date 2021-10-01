import React from "react";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }

    render(){
        const {location} = this.props;
        if(location.state){
            return (
                <div>
                    <img src={location.state.poster} alt={location.state.title} title={location.state.title}/><br/>
                    <span>location.state.title : {location.state.title}</span><br/>
                    <span>location.state.year : {location.state.year}</span><br/>
                    <span>location.state.genres : {location.state.genres}</span><br/>
                    <span>location.state.summary : {location.state.summary}</span>
                </div>
            );
        }else{
            return null;
        }
    }
}

export default Detail;