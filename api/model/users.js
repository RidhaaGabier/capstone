const db = require('../config')
const {hash,compare} = require('bcrypt')
const {tokenCreated} = require('../middleware/userAuthentication')
class Users{
    getUsers(req,res){
        const query =`
        SELECT UserID, FirstName,LastName, UserEmail, UserRole
        FROM users;
        `
        db.query(query,(err,results)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                results
            })
        })
    }
    getUser(req,res){
        const query =`
        SELECT UserID, FirstName,LastName, UserEmail, UserRole
        FROM users
        WHERE UserID = ${req.params.id};
        `
        db.query(query,(err,result)=>{
            if(err) throw err
            res.json({
                status:res.statusCode,
                result
            })
        })
    }
    login(req,res){
        const {UserEmail, UserPass} = req.body
        const query = `
        SELECT  FirstName,LastName,UserEmail, UserPass, UserRole
        FROM users
        WHERE UserEmail = '${UserEmail}';
        `
        db.query(query, async (err, result)=>{
            if(err) throw err
            if(!result?.length){
                res.json({
                    status: res.statusCode,
                    msg: "You provided a wrong email."
                })
            }else {
                await compare(UserPass,
                    result[0].UserPass,
                    (compErr, compResult)=>{
                        if(compErr) throw compErr
                        // Create a token
                        let token =
                        tokenCreated({
                            UserEmail,
                            UserPass
                        })
                        if(compResult) {
                            res.json({
                                msg: "You have logged in",
                                token,
                                result: result[0]
                            })
                        }else {
                            res.json({
                                status: res.statusCode,
                                msg:
                                "Invalid password or check if you have registered"
                            })
                        }
                    })
                }
        })
    }
   async register(req,res){
        const data = req.body
        data.UserPass = await hash(data.UserPass, 15)
        //payload
        const user = {
            UserEmail : data.UserEmail,
            UserPass : data.UserPass
        }
        const query =`
        INSERT INTO users
        SET ?;
        `
        db.query(query,[data],(err)=>{
            if (err) throw err
            let token = tokenCreated(user)
            res.json({
                status:res.statusCode,
                token,
                msg:"You are now registered."
            })
        })
    }
    updateUser(req,res){
        const data = req.body
        if(data.UserPass){
            data.UserPass = hashSync(data.UserPass,15)
        }
        const query =`
        UPDATE users
        SET ?
        WHERE UserID = ${req.params.id};
        `
        db.query(query,[data],(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "The user record has been updated "
            })
        })
    }
    deleteUser(req,res){
        const query =`
        DELETE FROM users
        WHERE UserID = ${req.params.id};
        `
        db.query(query,(err)=>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                msg: "The user record has been deleted."
            })
        })
    }
}
module.exports =Users