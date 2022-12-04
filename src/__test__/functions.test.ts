import { movieSort } from "../ts/functions";

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

test("should sort list if truthy", ()=> {
    movieSort(movies, true);

    expect(movies[0].Title).toBe("A");
    expect(movies[1].Title).toBe("B");
    expect(movies[2].Title).toBe("C");
});

test("should sort list if falsey", ()=> {
    movieSort(movies,false);
    
    expect(movies[0].Title).toBe("C");
    expect(movies[1].Title).toBe("B");
    expect(movies[2].Title).toBe("A");
});

