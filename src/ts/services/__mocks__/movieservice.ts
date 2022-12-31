import { IOmdbResponse } from "../../models/IOmdbResponse";
import { IMovie } from "../../models/Movie";


export let mockData: IMovie[] = [
    {
        Title: "Hello world",
        imdbID: "ID",
        Type: "movie",
        Poster: "image",
        Year: "1234", 
    }
]


export let error:  IMovie[] = [];
 

export const getData = async (searchText :string): Promise<IMovie[]> => {
    return new Promise((resolve, reject) => {
        if (searchText === "Hello world") {
            resolve(mockData);
        } else {
            reject(error);
        }
    });
}


