import React, { Component } from 'react'
//import ReactDOM from 'react-dom'
import Iframe from 'react-iframe'

export default class FullheightIframe extends Component {

    componentDidMount() {
        console.log("IFRAME DID MOUNT");
    }

    renderReactFrame() {
        return (
            <Iframe url="http://192.168.51.17:8080/mainpage.jsp" width="200%" height="100%" onLoad={()=>{console.log("IFRAME ON LOAD")}}></Iframe>
        );
    }

    renderHTMLFrame() {
        return (
            <iframe
                onLoad={(loadEvent)=>{
                    // NOT WORKING var frameBody = ReactDOM.findDOMNode(this).contentDocument.body; // contentDocument undefined
                    // NOT WORKING obj.nativeEvent.contentWindow.document.body.scrollHeight // contentWindow undefined
                }}
                ref="iframe"
                src="http://192.168.51.17:8080/mainpage.jsp"
                width="100%"
                height="100%"
                scrolling="yes"
                frameBorder="0"
            />
        );
    }

    render() {
        return (
            <div style={{maxWidth:2500, width:'100%', height:'250%', overflow:'auto'}}>
                {this.renderHTMLFrame()}
            </div>
        );
    }
}
