export interface User{
    id?:string,
    name?:string,
    userName?:string,
    email?:string,
    pw?:string,
    movieChallend?:string,
    categories?:Array<string>,
    movies?:Array<string>
}
export interface movieInterface{
        movie_id?:Number,
        title?:string,
        phase?:string,
        category_name?:Array<string>,
        cast?:Array<string>,
        release_year?:Number,
        running_time?:Number,
        rating_name?:string,
        disc_format_name?:string,
        number_discs?:Number,
        viewing_format_name?:string,
        aspect_ratio_name?:string,
        status?:Number,
        release_date?:string,
        budget?:string,
        gross?:string,
        time_stamp?:string
}
export interface CategorieInte{
    categorie:string
}
export interface ActorInte{
    name:string,
    rating:number,
    alternative_name:string
}
export interface FeedInter{
    Title?:string
    Year?:string
    Rated?:string
    Released?:string
    Runtime?:string
    Genre?:string
    Director?:string
    Writer?:string
    Actors?:string
    Plot?:string
    Language?:string
    Country?:string
    Awards?:string
    Poster?:string
    Metascore?:string
    imdbRating?:string
    imdbVotes?:string
    imdbID?:string
    Type?:string
    Response?:string
    Images?:Array<string>

}