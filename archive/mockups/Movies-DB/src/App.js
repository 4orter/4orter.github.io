import { el, setChildren, mount } from "https://cdnjs.cloudflare.com/ajax/libs/redom/3.25.1/redom.es.min.js";
import { MovieRow } from "./MovieRow.js";

const app = document.getElementById("app");

class App {

	constructor() {
		this.movieRowsElement = el("div", []);
		this.searchElement = el("input.search-field", {placeholder: "Search movies"});
		this.searchElement.onchange = (event) => this.performSearch(event.target.value);

		this.performSearch("transformers");

		this.el = el(".App", [

			// Header
			el("table.header", [
				el("tbody", [ 
					el("tr", [
						el("td", [ el("img", {alt: "movies db icon", width: "50", src: "./src/green_app_icon.svg"}) ]),
						el("td", {width: "8"}),
						el("td", [el("h1", "Movies DB Search")])
					])
				])		
			]),
			
			this.searchElement,
			this.movieRowsElement
		]);
	}

	update(data) {
		const tempArr = [];
		data.forEach(movie => {
			tempArr.push(new MovieRow({movie: movie}));
		});
		setChildren(this.movieRowsElement, tempArr);
	}

	performSearch(searchTerm) {
		var request = new XMLHttpRequest();
		const v = (data) => this.update(data);


		request.open("GET", "https://api.themoviedb.org/3/search/movie?api_key=7705aed199337433bf8b4ce1ffed096f&language=en-US&query=" + searchTerm, true)
		request.onload = function() {
			// Begin accessing JSON data here
			var data = JSON.parse(this.response);
			console.log(data);

			if (request.status >= 200 && request.status < 400) {
				console.log("Updating...")
				v(data.results);
			} else {
				console.log('error');
			}
		}

		request.send()
	}	
}

mount(app, new App());