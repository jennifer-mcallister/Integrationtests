import { IOmdbResponse } from "../ts/models/IOmdbResponse";
import { IMovie } from "../ts/models/Movie";
import { error, getData } from "../ts/services/__mocks__/movieservice";


let mockData: IMovie[] = 
    [{
        Title: "Hello world",
        imdbID: "ID",
        Type: "movie",
        Poster: "image",
        Year: "1234",
    }];


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


beforeEach(()=> {
    jest.resetModules();
    jest.restoreAllMocks();
});

test("should get mock data", async () => {
    let searchText = "Hello world";
    let result :IMovie[] = await getData(searchText);

    expect(result.length).toBe(mockData.length);
});

beforeEach(()=> {
    jest.resetModules();
    jest.restoreAllMocks();
});

// test("should get error", async ()=> {
//     let searchText = "";
    
//     let result :IMovie[] = await getData(searchText);

//     expect(result.length).toBe(0);
    
// });