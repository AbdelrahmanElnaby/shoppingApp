import { Request,Response } from "express";
import { verifyToken } from "../utilities/tokenMethods";

const verify_token=(req:Request,res:Response,next:Function)=>{
    
    try{
        const {authorization}=req.headers;
        const payload=verifyToken(authorization as string);
        next();
        return;
    }
    catch(error){
        res.status(400);
        res.json(error);
        return;
    }
}

export default verify_token;