import fs from 'fs';


export class readJson {
    public readCategories():Array<string>{
        let data =  fs.readFileSync('../api/categories.json');
        let txt = JSON.parse(data.toString());
        return txt.categories;
    }
    public readMovieSoft():Array<object>{
        let data =  fs.readFileSync('../api/movies-des.json');
        let txt = JSON.parse(data.toString());
        return txt;
    }
    public readMovieHard():Array<object>{
        let data =  fs.readFileSync('../api/movies.json');
        let txt = JSON.parse(data.toString());
        return txt;
    }
    public readActors():Array<object>{
        let data =  fs.readFileSync('../api/actors.json');
        let txt = JSON.parse(data.toString());
        return txt;
    }
}