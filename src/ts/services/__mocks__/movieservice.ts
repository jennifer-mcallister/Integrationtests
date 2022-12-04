import { IOmdbResponse } from "../../models/IOmdbResponse";
import { IMovie } from "../../models/Movie"


// let mockData :IMovie[] = [
//     {  Title: "Hello world",
//         imdbID: "ID",
//         Type: "movie",
//         Poster: "image",
//         Year: "1234",}
// ]

let mockData: IOmdbResponse = {
    Search: [{
        Title: "Hello world",
        imdbID: "ID",
        Type: "movie",
        Poster: "image",
        Year: "1234",
    }]
}




export const getData = async (): Promise<IOmdbResponse> => {
    return new Promise((resolve) => {
        resolve(mockData);
    });
}

// hämtar en iomcdbresponse lista med IMoviie object i sig