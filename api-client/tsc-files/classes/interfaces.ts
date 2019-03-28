export interface User{
    id?:String,
    name?:String,
    userName?:String,
    email?:String,
    pw?:String
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
        time_stamp?:String,
    
}