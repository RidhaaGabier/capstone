const db = require('../config')

class Product{
    getProducts(req,res){
        const query =`
        SELECT ProdID, ProdName,Quantity, Amount, Category, ProdUrl
        FROM product;
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    getProduct(req,res){
        const query =`
        SELECT ProdID, ProdName,Quantity, Amount, Category, ProdUrl
        FROM product
        WHERE ProdID = ${req.params.id};
        `
        db.query(query,(err,result)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                result
            })
        })
    }
   
    addProduct(req,res){
        const data =req.body
       
        const query =`
        INSERT INTO product
        SET ?
        `
        db.query(query,[data],(err)=>{
            if (err) throw err
          
            res.json({
                status:res.statusCode,
                msg:"Product was added."
            })
        })
    }
    updateProduct(req,res){
        const data = req.body
       
        const query =`
        UPDATE product
        SET ?
        WHERE ProdID = ${req.params.id};
        `
        db.query(query,[data],(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Your product has been updated "
            })
        })
    }
    deleteProduct(req,res){
        const query =`
        DELETE FROM product
        WHERE ProdID = ${req.params.id};
        `
        db.query(query,(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "Your product has been removed."
            })
        })
    }
}
module.exports = Product