import fs from 'fs';

export class readJson {
    public readCategories():Array<string>{
        let data =  fs.readFileSync('../../bk-json/categories.json');
        let txt = JSON.parse(data.toString());
        console.log(txt[1])
        return txt;
    }
    public readMovieSoft():Array<object>{
        let data =  fs.readFileSync('../../bk-json/moviesA.json');
        let txt = JSON.parse(data.toString());
        return txt;
    }
    public readMovieHard():Array<object>{
        let data =  fs.readFileSync('../../bk-json/moviesE.json');
        let txt = JSON.parse(data.toString());
        return txt;
    }
    public readActors():Array<object>{
        let data =  fs.readFileSync('../../bk-json/actors.json');
        let txt = JSON.parse(data.toString());
        return txt;
    }
}
