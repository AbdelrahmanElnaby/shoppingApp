import { response } from "express";
import supertest from "supertest"
import app from "../index"

const request=supertest(app);
let token:string;

describe ("test user endpoint",()=>{

    it("test create user",async()=>{
        try{
            const respponse=await request
            .post("/store/usrs/")
            .send({firstName:'ayman',
            lastName:'hosam',password:'sarah'});
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error)
        }
    })

    it("test authonticate user",async()=>{
        try{
            const response=await request
            .post("/store/authontication/")
            .send({firstName:'ayman',
            lastName:'hosam',password:'sarah'});
            token=response.headers.authorization;
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error)
        }
    })

    it("test get users",async()=>{
        try{
            const response=await request
            .get("/store/usrs/")
            .set({authorization:token});
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error)
        }
    })

    it("test update user",async()=>{
        try{
            const response=await request
            .put("/store/usrs/1")
            .send({firstName:'liza',
            lastName:'gmal',password:'rola'})
            .set({authorization:token});
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error)
        }
    })

    it("test get a specific user",async()=>{
        try{
            const response=await request
            .get("/store/usrs/1")
            .set({authorization:token});
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error)
        }
    })


})



describe("test products end point",()=>{

    it("test create product",async()=>{
        try{
            const response=await request
            .post("/store/products/")
            .send({name:'salamon',price:300})
            .set({authorization:token});
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error)
        }
    })

     it("test get endpoint",async()=>{
        try{
            const response=await request.get(
                "/store/products"
            );
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error);
        }
    })

    it("test update product",async()=>{
        try{
            const response=await request
            .put("/store/products/1")
            .send({name:'salamon',price:250})
            .set({authorization:token});
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error)
        }
    })

    it("test get specific product ",async()=>{
        try{
            const response=await request.get(
                "/store/products/1"
            );
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error);
        }
    })
/*
    it("test delete product",async()=>{
        try{
            const response=await request.del(
                "/store/products/1")
            .set({authorization:token});
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error);
        }
    })
*/
});


describe("test orders end point",()=>{

    it("test create order",async()=>{
        try{
            const response=await request
            .post("/store/orders/")
            .send({user_id:1,status:'complete'})
            .set({authorization:token});
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error)
        }
    })

     it("test get orders",async()=>{
        try{
            const response=await request.get(
                "/store/orders")
                .set({authorization:token});
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error);
        }
    })

    it("test update order",async()=>{
        try{
            const response=await request
            .put("/store/orders/1")
            .send({user_id:1,status:'active'})
            .set({authorization:token});
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error)
        }
    })
    

    it("test get specific order ",async()=>{
        try{
            const response=await request.get(
                "/store/products/1"
            ).set({authorization:token});
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error);
        }
    })
    it("test create order_products",async()=>{
        try{
            const response=await request
            .post("/store/orders/1/products")
            .send({product_id:1,quantity:3})
            .set({authorization:token});
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error)
        }
    })

    it("test get currentUserOrder",async()=>{
        try{
            const response=await request.get(
                "/store/dashboard/currentUserOrder/1")
                .set({authorization:token});
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error);
        }
    })

});
describe("delete end point",()=>{

    
    it("test delete order_products",async()=>{
        try{
            const response=await request.delete(
                "/store/orders/1/products")
            .set({authorization:token});
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error);
        }
    })
  
    it("test delete product",async()=>{
        try{
            const response=await request.delete(
                "/store/products/1")
            .set({authorization:token});
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error);
        }
    })



    it("test delete order",async()=>{
        try{
            const response=await request.delete(
                "/store/orders/1")
            .set({authorization:token});
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error);
        }
    })

    it("test delete user",async()=>{
        try{
            const respponse=await request
            .delete("/store/usrs/1")
            .set({authorization:token});
            expect(response.statusCode).toEqual(200);
        }
        catch(error){
            console.log(error)
        }
    })
    

});