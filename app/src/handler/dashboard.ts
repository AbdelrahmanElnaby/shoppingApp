import { Request,Response } from "express";
import dashboard from "../services/dashboard";


export const currentUserOrder=async(req:Request,res:Response)=>{
    try{
        const id=Number(req.params.id);
        const result=await dashboard.currentUserOrder(id);
        res.set({authorization:req.headers.authorization});
        res.json(result);
        return;
    }
    catch(error){
        res.status(400);
        res.json(error);
        return;
    }
}

