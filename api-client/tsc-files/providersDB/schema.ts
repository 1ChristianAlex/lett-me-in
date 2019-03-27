import { Schema } from "mongoose";

const User = new Schema({
    name:String,
    userName:String,
    email:String,
    password:String
})
const movieSchema = new Schema({
    movie_id:{
        type:Number,
        required:false
    },
    title:{
        type:String,
        required:true
    },
    phase:{
        type:String,
        required:false
    },
    category_name:{
        type:Array,
        required:false
    },
    cast:{
        type:Array,
        required:false
    },
    release_year:{
        type:Number,
        required:false
    },
    running_time:{
        type:Number,
        required:false
    },
    rating_name:{
        type:String,
        required:false
    },
    disc_format_name:{
        type:String,
        required:false
    },
    number_discs:{
        type:Number,
        required:false
    },
    viewing_format_name:{
        type:String,
        required:false
    },
    aspect_ratio_name:{
        type:String,
        required:false
    },
    status:{
        type:Number,
        required:false
    },
    release_date:{
        type:String,
        required:false
    },
    budget:{
        type:String,
        required:false
    },
    gross:{
        type:String,
        required:false
    },
    time_stamp:{
        type:String,
        required:false
    }
})
const actors = new Schema({
    name:{
        type:String,
        required:false
    },
    rating:{
        type:Number,
        required:false
    },
    alternative_name:{
        type:String,
        required:false
    }
});

export const schemaDB = {
    actors,
    movieSchema,
    User,
}