import { el } from "https://cdnjs.cloudflare.com/ajax/libs/redom/3.25.1/redom.es.min.js";

class MovieRow {
	constructor({movie} = {movie}) {
		
		this.el = el("table.movie-rows", [	
			el("tbody", [
				el("tr", [	
					el("td", [el("img.poster", {alt: "poster", width: "120", src: "https://image.tmdb.org/t/p/w1280/" + movie.poster_path})]),
					el("td", [
						el("h3", movie.title),
						el("p", movie.overview)
					])
				])
			])	
		]);

	}
}

export {MovieRow};