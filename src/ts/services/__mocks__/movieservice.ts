import { IOmdbResponse } from "../../models/IOmdbResponse";


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

