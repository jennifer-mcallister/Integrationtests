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
},{
    Title: "F",
    imdbID: "ID",
    Type: "movie",
    Poster: "image",
    Year: "1234",
},{
    Title: "D",
    imdbID: "ID",
    Type: "movie",
    Poster: "image",
    Year: "1234",
},{
    Title: "E",
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
    expect(movies[3].Title).toBe("D");
    expect(movies[4].Title).toBe("E");
    expect(movies[5].Title).toBe("F");
});

test("should sort list if falsey", ()=> {
    movieSort(movies,false);
    expect(movies[0].Title).toBe("F");
    expect(movies[1].Title).toBe("E");
    expect(movies[2].Title).toBe("D");
    expect(movies[3].Title).toBe("C");
    expect(movies[4].Title).toBe("B");
    expect(movies[5].Title).toBe("A");
});

