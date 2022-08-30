import React from 'react'
import twitter from '../../css/Twitter.css'
import back from '../../images/back.png'
import bepart from '../../images/decn.png'
function Twitterpage() {
	return (
		<div class="twitter">


			<img src={back} alt="img1" className='imgoverlay' id='backs' />
			<div src={back} alt="img1" className='imgoverlay2' />
		</div>

	)
}

//twitte

//could could also link an external css file

/*
function get(){
	fr = document.getElementById("twitter-widget-0").contentDocument;
	var cssLink = document.createElement("link")
	cssLink.href = "style.css";
	cssLink .rel = "stylesheet";
	cssLink .type = "text/css";
	fr.head.appendChild(cssLink);
}
*/
export default Twitterpage