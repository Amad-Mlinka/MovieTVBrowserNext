interface mediaInterface {
    id:number,
    poster_path:string,
    backdrop_path:string,
    popularity:number,
    vote_count:number,
    vote_average:number,
    overview:string,
    original_language:string,
    genre_ids:number[],


}

export interface movieInterface extends mediaInterface{
    adult:boolean,
    original_title:string,
    title?:string,
    release_date:string,
    video:boolean
}


export interface tvInterface extends mediaInterface{
    first_air_date:string,
    origin_country:string[],
    name?:string,
    original_name:string
}