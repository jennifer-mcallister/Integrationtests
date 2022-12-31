/**
 * @jest-environment jsdom
 */


import { createHtml, displayNoResult, handleSubmit } from "../ts/movieApp";
import { getData } from "../ts/services/movieservice";
import { error, mockData } from "../ts/services/__mocks__/movieservice";



jest.mock("axios", ()=> ({
    get: async ()=> {
        return new Promise((resolve, reject)=> { 
            if (resolve) {
                resolve({data:{Search: mockData,}});
            } else {
                reject(error);
            }
           
        })
    }
}));


describe("handleSubmit", ()=> {

    beforeEach(()=> {
        jest.resetModules();
        jest.restoreAllMocks();
        jest.clearAllMocks();
    });

    test("should get data and call createHtml", async ()=> {
        document.body.innerHTML = `
        <form id="searchForm">
            <input type="text" id="searchText" placeholder="Skriv titel här" value="Hello world"/>
            <button type="submit" id="search">Sök</button>
        </form>
        <div id="movie-container"></div>`;
        let movies = await getData("Hello world");
        
        await handleSubmit();

        

        expect(document.querySelectorAll("div.movie").length).toBe(1);
        expect(document.querySelectorAll("img").length).toBe(1);
        expect(document.querySelectorAll("h3").length).toBe(1);
        expect(document.querySelector("h3")?.innerHTML).toBe("Hello world");
        expect(movies.length).toBe(1);

        document.body.innerHTML = "";
    });

    beforeEach(()=> {
        jest.resetModules();
        jest.restoreAllMocks();
        jest.clearAllMocks();
    });


    test("should catch error", async()=> {
        document.body.innerHTML = `
        <form id="searchForm">
            <input type="text" id="searchText" placeholder="Skriv titel här" />
            <button type="submit" id="search">Sök</button>
        </form>
        <div id="movie-container"></div>`;
        let container: HTMLDivElement = document.getElementById(
            "movie-container"
           ) as HTMLDivElement;
           document.body.innerHTML = "";
    })   
});


describe("createHtml", ()=> {

    beforeEach(()=> {
        jest.resetModules();
        jest.restoreAllMocks();
    });

    test("should get create html for mockdata", async()=> {

        document.body.innerHTML = `<div id="movie-container"></div>`;
        let container: HTMLDivElement = document.getElementById("movie-container") as HTMLDivElement;
    
        let movies = await getData("Hello world");
        await createHtml(movies, container);
    
        expect(document.querySelectorAll("div.movie").length).toBe(1);
        expect(document.querySelectorAll("img").length).toBe(1);
        expect(document.querySelectorAll("h3").length).toBe(1);
        expect(document.querySelector("h3")?.innerHTML).toBe("Hello world");

        document.body.innerHTML = "";
    });
});


describe("displayNoResult", ()=> {

    beforeEach(()=> {
        jest.resetModules();
        jest.restoreAllMocks();
    });

    test("should create p-tag", async ()=> {
        document.body.innerHTML = `
        <div id="movie-container"></div>`;

        let container: HTMLDivElement = document.getElementById(
         "movie-container"
        ) as HTMLDivElement;
        
        await displayNoResult(container);

        expect(container.innerHTML).toBe("<p>Inga sökresultat att visa</p>");
        document.body.innerHTML = "";
    });
});


