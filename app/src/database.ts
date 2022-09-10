import dotenv from "dotenv"
import {Pool} from "pg" 

dotenv.config();

const{
    POSTGRES_HOST,
    POSTGRES_DB,
    POSTGRES_DB_test,
    POSTGRES_USER, 
    POSTGRES_PASSWORD,
    ENV} = process.env;

let db=POSTGRES_DB_test;
    if(ENV == 'dev'){
        db=POSTGRES_DB;
    }

const client=new Pool({
    host:POSTGRES_HOST,
    database:db,
    user:POSTGRES_USER,
    password:POSTGRES_PASSWORD

});

export default client;