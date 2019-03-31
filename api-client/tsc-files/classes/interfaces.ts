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
        title?:String,
        phase?:String,
        category_name?:Array<string>,
        cast?:Array<string>,
        release_year?:Number,
        running_time?:Number,
        rating_name?:String,
        disc_format_name?:String,
        number_discs?:Number,
        viewing_format_name?:String,
        aspect_ratio_name?:String,
        status?:Number,
        release_date?:String,
        budget?:String,
        gross?:String,
        time_stamp?:String
}
export interface CategorieInte{
    categorie:string
}
export interface ActorInte{
    name:string,
    rating:number,
    alternative_name:string
}