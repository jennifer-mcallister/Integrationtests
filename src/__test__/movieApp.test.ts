/**
 * @jest-environment jsdom
 */

import { createHtml, displayNoResult, handleSubmit } from "../ts/movieApp";

document.body.innerHTML="";

let movies = [{
    Title: "B",
    imdbID: "ID",
    Type: "movie",
    Poster: "image",
    Year: "1234",
},{
    Title: "C",
    imdbID: "ID",
    Type: "movie",
    Poster: "image",
    Year: "1234",
},{
    Title: "A",
    imdbID: "ID",
    Type: "movie",
    Poster: "image",
    Year: "1234",
}];

describe("handleSubmit", ()=> {
    test("should throw error", async ()=> {

        document.body.innerHTML = `
        <form id="searchForm">
        <input type="text" id="searchText" placeholder="Skriv titel här"/>
        <button type="submit" id="search">Sök</button>
        </form>
        <div id="movie-container"></div>`;

        jest.mock('../ts/services/movieservice');

        await handleSubmit();
        
        expect(document.getElementById("movie-container")?.innerHTML).toBe("<p>Inga sökresultat att visa</p>");
    })

    document.body.innerHTML="";

    test("should create html", async ()=> {

        document.body.innerHTML = `
        <form id="searchForm">
        <input type="text" id="searchText" placeholder="Skriv titel här" value="hello" />
        <button type="submit" id="search">Sök</button>
        </form>
        <div id="movie-container"></div>`;

        jest.mock('../ts/services/movieservice');

        await handleSubmit();
        
        expect(document.querySelectorAll("div.movie").length).toBe(1);
    })

    document.body.innerHTML="";
});

describe("createHTML", ()=> {

    test("should create html", ()=> {
        document.body.innerHTML = `
        <div id="movie-container"></div>`;

        let container: HTMLDivElement = document.getElementById(
            "movie-container"
          ) as HTMLDivElement;
    
        createHtml(movies, container);
    
        expect(document.querySelectorAll("div.movie").length).toBe(3);
    });
    
    document.body.innerHTML="";
});

describe("displayNoResult", ()=> {
    test("should create p-tag", ()=> {
        document.body.innerHTML = `
        <div id="movie-container"></div>`;

        let container: HTMLDivElement = document.getElementById(
         "movie-container"
        ) as HTMLDivElement;
        
        displayNoResult(container);

        expect(document.getElementById("movie-container")?.innerHTML).toBe("<p>Inga sökresultat att visa</p>")

    });

    document.body.innerHTML="";
});