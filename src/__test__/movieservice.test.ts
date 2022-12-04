import { IOmdbResponse } from "../ts/models/IOmdbResponse";
import { IMovie } from "../ts/models/Movie";
import { getData } from "../ts/services/movieservice";

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

// jest.mock("axios", ()=> ({
//     get: async ()=> {
//         return new Promise((resolve)=> {
//             resolve({data:mockData});
//         })
//     }
// }));

jest.mock("axios", ()=> ({
    get: async ()=> {
        return new Promise((resolve)=> {
            resolve({data:mockData}); 
        })
    }
}));

// jest.mock('../ts/services/movieservice');


test("should get mock data", async()=> {
    let result = await getData("Hello world");

    expect(result.length).toBe(mockData.Search.length);
    expect(result[0].Title).toBe("Hello world");
})

// test("should not get mock data", async()=> {
//     let result = await getData("");

//     expect(result.length).toBe(0);
// })