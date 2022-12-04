import { IOmdbResponse } from "../ts/models/IOmdbResponse";
import { getData } from "../ts/services/movieservice";


let mockData: IOmdbResponse = {
    Search: [{
        Title: "Hello world",
        imdbID: "ID",
        Type: "movie",
        Poster: "image",
        Year: "1234",
    }]
}

jest.mock("axios", ()=> ({
    get: async ()=> {
        return new Promise((resolve)=> {
            resolve({data:mockData}); 
        })
    }
}));

test("should get mock data", async()=> {
    let result = await getData("Hello world");

    expect(result.length).toBe(mockData.Search.length);
    expect(result[0].Title).toBe("Hello world");
});
