
import usrs ,{Usr} from "../models/usrs"
import products ,{Product}from "../models/products";
import orders from "../models/orders"
import authontication from "../services/authontication"
import dashboard from "../services/dashboard"

let user:number,product:number,order:number;
describe("test products model",()=>{
    
    it("test : create method defiend",()=>{
        expect(products.create).toBeDefined();
    })

    it("test : index method defiend",()=>{
        expect(products.index).toBeDefined();
    })

    it("test : update method defiend",()=>{
        expect(products.update).toBeDefined();
    })

    it("test : show method defiend",()=>{
        expect(products.show).toBeDefined();
    })

    it("test : delete method defiend",()=>{
        expect(products.delete).toBeDefined();
    })

    it("test : create method work",async ()=>{
        const result=await products.create({name:'Juice',price:10});
        product=Number(result.id);
        expect(result.name)
        .toEqual('Juice');
    });

    it("test : index method work",async ()=>{
        const result=await products.index();
        expect(result.length)
        .toBeGreaterThan(0);
    });

    it("test : update method work",async ()=>{
        const result=await products.update(product,{name:'salamon',price:20});
        expect(result.name)
        .toEqual('salamon');
    });

    it("test : show method work",async ()=>{
        
        expect(await (await products.show(product)).price)
        .toEqual(20);
    });

});

describe("test usrs model",()=>{
    
    it("test : create method defiend",()=>{
        expect(usrs.create).toBeDefined();
    })

    it("test : index method defiend",()=>{
        expect(usrs.index).toBeDefined();
    })

    it("test : update method defiend",()=>{
        expect(usrs.update).toBeDefined();
    })

    it("test : show method defiend",()=>{
        expect(usrs.show).toBeDefined();
    })

    it("test : delete method defiend",()=>{
        expect(usrs.delete).toBeDefined();
    })

    it("test : create method work",async ()=>{
        const result=await usrs.create({firstName:'alaa',lastName:'sawsan',password:'dsfsdgs'});
        user=Number(result.id);
        expect(result.id)
        .toBeTruthy();
    });

    it("test : index method work",async ()=>{
        const result=await usrs.index();
        expect(result.length)
        .toBeGreaterThan(0);
    });

    it("test : update method work",async ()=>{
        const result=await usrs.update(user,{firstName:'alice',lastName:'sawsan',password:'dsfsdgs'});
        expect(result.id)
        .toBeTruthy();
    });

    it("test : show method work",async ()=>{
        const result=await products.show(user);
        expect(result.id)
        .toEqual(user);
    });

});

describe("test orders model",()=>{
    
    it("test : create method defiend",()=>{
        expect(orders.create).toBeDefined();
    })

    it("test : index method defiend",()=>{
        expect(orders.index).toBeDefined();
    })

    it("test : update method defiend",()=>{
        expect(orders.update).toBeDefined();
    })

    it("test : show method defiend",()=>{
        expect(orders.show).toBeDefined();
    })

    it("test : delete method defiend",()=>{
        expect(orders.delete).toBeDefined();
    })

    it("test : addProducts method defiend",()=>{
        expect(orders.addProduct).toBeDefined();
    })

    it("test : create method work",async ()=>{
        const result=await orders.create({user_id:user,status:'complete'});
        order=Number(result.id);
        expect(result.id)
        .toEqual(order);
    });

    it("test : index method work",async ()=>{
        const result=await orders.index();
        expect(result.length)
        .toBeGreaterThan(0);
    });

    it("test : update method work",async ()=>{
        const result=await orders.update(order,{user_id:user,status:'active'});
        expect(result.status)
        .toEqual('active');
    });

    it("test : show method work",async ()=>{
        const result=await orders.show(5);
        expect(result)
        .toBeUndefined();
    });

   it("test : addProduct method work",async ()=>{
       const result=await orders.addProduct(order,{product_id:product,quantity:3});
        expect(result.quantity)
        .toEqual(3);
    });
});

describe("testing authontication,model",()=>{

    it("test : authonticate method defiend",()=>{
        expect(authontication.authonticate).toBeDefined();
    });

    it("test : authonticate method true login",async()=>{
        const user={firstName:'alice',lastName:'sawsan',
        password:"dsfsdgs"};
        const result=await authontication.authonticate(user);
        expect(result[0]).toEqual(true); 
    });

    it("test : authonticate method false login",async()=>{
        const user={firstName:'alice',lastName:'sawsan',
        password:"rgrgr"};
        const result=await authontication.authonticate(user);
        expect(result[0]).toEqual(false); 
    });
});


describe("test : dashboard Model",()=>{

    it("test: currrentuserOrder method defiend",()=>{
        expect(dashboard.currentUserOrder).toBeDefined();
    });

    it("test : currrentuserOrder method return products",async()=>{
    
        const result=await dashboard.currentUserOrder(order);
        expect(result.products?.length).toBeGreaterThan(0); 
    })
});


describe("test : delete ethods ",()=>{

    it("test: delete order_products",async ()=>{
        const result=await orders.deleteOrderProducts(order);
        expect(Number(result.order_id)).toEqual(order);
    });

    it("test : delete usrs",async()=>{
    
        const result=await usrs.delete(user);
        expect(result.id).toEqual(user); 
    })

    it("test : delete orders",async()=>{
    
        const result=await orders.delete(order);
        expect(result.id).toEqual(order); 
    })

    it("test : delete products",async()=>{
    
        const result=await products.delete(product);
        expect(result.id).toEqual(product); 
    })
    
});


