"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const readJson_1 = require("./readJson");
class mongoDb {
    constructor() {
        this.readF = new readJson_1.readJson();
        this.mongoD = mongoose_1.default;
        this.Schema = this.mongoD.Schema;
        this.User = new mongoose_1.default.Schema({
            name: String,
            userName: String,
            email: String,
            password: String
        });
    }
    openCon(call) {
        this.mongoD.connect('mongodb://35.247.211.56/lett_me_in', {
            user: "root",
            pass: "letmeinapp",
            useNewUrlParser: true
        }).then((res) => {
            console.log('Connect');
            call();
        }).catch((err) => {
            console.log('not good', err);
        });
    }
    closeCon() {
        this.mongoD.disconnect().then(dis => {
            console.log('Disconnect');
        });
    }
    findUser() {
        return new Promise((res, rej) => {
            this.openCon(() => {
                let user = this.mongoD.model('User', this.User);
                user.find().then(doc => {
                    res(doc);
                    this.closeCon();
                }).catch(err => {
                    rej(err);
                });
            });
        });
    }
    insertMongoMovies() {
        let movieSchema = new this.mongoD.Schema({
            movie_id: {
                type: Number,
                required: false
            },
            title: {
                type: String,
                required: true
            },
            phase: {
                type: String,
                required: false
            },
            category_name: {
                type: Array,
                required: false
            },
            cast: {
                type: Array,
                required: false
            },
            release_year: {
                type: Number,
                required: false
            },
            running_time: {
                type: Number,
                required: false
            },
            rating_name: {
                type: String,
                required: false
            },
            disc_format_name: {
                type: String,
                required: false
            },
            number_discs: {
                type: Number,
                required: false
            },
            viewing_format_name: {
                type: String,
                required: false
            },
            aspect_ratio_name: {
                type: String,
                required: false
            },
            status: {
                type: Number,
                required: false
            },
            release_date: {
                type: String,
                required: false
            },
            budget: {
                type: String,
                required: false
            },
            gross: {
                type: String,
                required: false
            },
            time_stamp: {
                type: String,
                required: false
            }
        });
        this.openCon(() => {
            let user = this.mongoD.model('movie', movieSchema);
            this.readF.readMovieHard().forEach(item => {
                user.create(item).then(res => {
                    console.log(res);
                    console.log(item);
                }).catch(err => {
                    console.log(err);
                });
            });
        });
    }
    insertMongoActors() {
        let actors = new this.mongoD.Schema({
            name: {
                type: String,
                required: false
            },
            rating: {
                type: Number,
                required: false
            },
            alternative_name: {
                type: String,
                required: false
            }
        });
        this.openCon(() => {
            let user = this.mongoD.model('actor', actors);
            this.readF.readActors().forEach(item => {
                user.create(item).then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                });
            });
        });
    }
}
exports.mongoDb = mongoDb;
new mongoDb().insertMongoActors();
