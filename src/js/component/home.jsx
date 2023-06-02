import React from "react";
import { useRef } from "react";
import {BsFillRewindFill} from 'react-icons/bs'; //importa los iconos//
import {BsFillPlayFill} from 'react-icons/bs';
import {BsFillFastForwardFill} from 'react-icons/bs';

//include images into your bundle
{/*import rigoImage from "../../img/rigo-baby.jpg";*/ }
const songURL = "https://assets.breatheco.de/apis/sound/"
let song_1 = songURL + "files/mario/songs/castle.mp3";
let song_2= songURL + "files/mario/songs/hurry-starman.mp3";
let song_3 = songURL + "files/mario/songs/overworld.mp3";


//create your first component
const Home = () => {
	return (
		<>
		<div className="container">
		<div className="text-center">
			<h1 className="text-center mt-5">Mario´s Playlist</h1>
			<ul className="list-group">
				<li className="list-group-item" >1. An item</li>
				<li className="list-group-item">2. second item</li>
				<li className="list-group-item">3. third item</li>
			</ul>

					
			
			<div>
				<div className="alert alert-light" role="alert">
					<button type="button" className="btn" >
						<BsFillRewindFill/>
					</button>
					<button type="button" className="btn">
						<BsFillPlayFill/>
					</button>
					<button type="button" className="btn">
						<BsFillFastForwardFill/>
					</button>
				</div>
			</div>


				
			

			
         
		 


		

		</div>
		</div>
		</>

	
	);


};

export default Home;
