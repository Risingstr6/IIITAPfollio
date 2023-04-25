const express = require("express");
const mysql = require("mysql");
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);
const nodemailer = require('nodemailer');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT= 4000;
dotenv.config({path:'./.env'});

const options = {                
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.DB
};
//console.log(uuid());
const db = mysql.createConnection(options);
const sessionStore = new MySQLStore({}, db);

app.use(express.static(__dirname+'/assets'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));
app.use(session({
    
        genid: (req) => {
            return uuidv4() // use UUIDs for session IDs
          },
        secret: 'cookie_secret',
        resave: false,
        saveUninitialized: false,
        store: sessionStore,      // assigning sessionStore to the session
    }));


db.connect(function(error){
    if(error)
    {
      console.log(error);
    }else{
        console.log("Database connected!!");
    }
})


    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
            user: process.env.authemail,			//email ID
            pass: process.env.authepass				//Password 
        }
    });


    function sendMail(email, sub, bodi){
        var details = {
            from: 'sktsdhkhn@gmail.com', // sender address same as above
            to: email, 					// Receiver's email id
            subject: sub, // Subject of the mail.
            html: bodi					// Sending OTP 
        };


	transporter.sendMail(details, function (error, data) {
		if(error)
			console.log(error)
		else
			console.log(data);
		});
	}


const redirectULogin = function(req,res,next){
    if(!req.session.loggedin)
    {
        return res.render('register',{message:''});
    }
    next();
}


const redirectALogin = function(req,res,next){
    if(!req.session.loggedinadmin)
    {
        return res.render('registeradmin',{message:''});
    }
    next();
}


function generatePassword() {
    var length = 12,
        charset = 
"@#$&*0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$&*0123456789abcdefghijklmnopqrstuvwxyz",
        password = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
}



app.get("/",function(req,res){  
    res.render('index',{message:''});
})

app.get("/signup",function(req,res){
    res.render('register',{message:''});
})

app.get("/logout",function(req,res){
    var ss = sessionStore.sessions;
    for(var sid in ss){ 
        var ses = JSON.parse(ss[sid]);
        console.log(ses);
    }
    req.session.destroy((err) => {
        res.redirect('/');
      })
})

app.get("/alogout",function(req,res){
    req.session.destroy((err) => {
        res.redirect('/');
      })
})

app.get("/adminsignup",function(req,res){
    res.render('registeradmin',{message:''});
})


app.get("/forgotpass",function(req,res){
    res.render('fpass',{message:''});
})

app.get("/cpass", redirectULogin, function(req,res){
    res.render('cpass',{message:''});
})

app.get("/aforgotpass",function(req,res){
    res.render('adminfpass',{message:''});
})

app.get("/sb",redirectULogin,function(req,res){
    res.render('sbdetails',{message:''});
})

app.get("/acad",redirectULogin,function(req,res){
    res.render('academic_details',{message:''});
})

app.get("/valid",function(req,res){
    res.render('validate_req',{message:''});
})

app.get("/decline",function(req,res){
    res.render('reject_req',{message:''});
})

app.get("/nacad",redirectULogin,function(req,res){
    res.render('non_academic',{message:''});
})

app.get("/skills",redirectULogin,function(req,res){
    res.render('skills',{message:''});
})

app.get("/review",function(req,res){
    res.render('review',{message:''});
})

app.get("/adminlog",redirectALogin,function(req,res){
db.query('SELECT * from admin_panel ',function(err,ress)
{
        if(err) {
          console.log(err);
        }  
         else
        {   db.query('SELECT * from review ',function(err,resu)
           {
                if(err) {
                  console.log(err);
                }  
                 else
                {
                        return res.render('admind',{
                        message: ress,
                        reviw: resu
                    });
                }
            })
        }
    })
})

app.get("/home",redirectULogin,function(req,res){
    const email = req.session.email;
     db.query('SELECT * from student_basic WHERE email = ?',[email],function(err,basic)
             {
                 if(err) {
                     console.log(err);
                 }
                 else if(basic.length<=0){
                    return res.render('error',{
                        message: 'Something went wrong.Try again',
                        code:''
                       });
                 }
                 else{
                    db.query('SELECT * from skills WHERE email = ?',[email],function(err,skill)
                    {
                        if(err) {
                            console.log(err);
                        }  
                        else
                        {
                            db.query('SELECT * from academic_details WHERE email = ?',[email],function(err,acad)
                                {
                                    if(err) {
                                        console.log(err);
                                    }  
                                    else
                                    {
                                            db.query('SELECT * from non_academic_details WHERE email = ?',[email],function(err,nacad)
                                            {
                                                if(err) {
                                                    console.log(err);
                                                }  
                                                else
                                                {
                                                    return res.render('home',{
                                                        message: basic[0],
                                                        skill: skill[0],
                                                        acad: acad[0],
                                                        nacad: nacad[0],
                                                        code:'home'
                                                    });
                                                }
                                        })
                                    }
                            })
                        }
                   })
                 }
            })
})
                        


app.post("/signup",function(req,res){
    const { username, email, pass, confirmpass} = req.body;
    const ques = req.body.securityq;
    if(email.endsWith("@iiita.ac.in")==false)
    {
        return res.render('error',{
            message: 'Only IIITA domains can register',
            code:'signup'
           });
    }
    db.query('SELECT email from student_credentials WHERE email = ?',[email],async function(err,result)
    {
        if(err) {
            console.log(err);
        }
        if(result.length > 0){
           return res.render('error',{
            message: 'User is already registered. Kindly Login',
            code:'signup'
           });
        }else if (pass != confirmpass){
            return res.render('error',{
                message: 'Passwords does not match',
                code:'signup'
               });
           }
        let hashpass = await bcrypt.hash(pass,8); 
        console.log(hashpass);
        db.query('INSERT INTO student_credentials SET ?',{
            UserName: username,
            email: email,
            Password: hashpass,
         },function(error,result){
            if(error){
                console.log(error);
            }
            else{
                console.log(result);
                return res.render('success',{
                    message: 'User registered successfully',
                    code:'signup'
                   });
            }
         })
    })
});

  
  
app.post("/fpass",  function (req,res){
    const  email = req.body.email;
    console.log(email);
    db.query('SELECT * from student_credentials WHERE email = ?',[email],async function(err,result)
    {
        if(err) {
            console.log(err);
        }
        if(result.length <= 0){
           return res.render('error',{
            message: 'Wrong email id',
            code:'signup'
           });
        }
        let pass = generatePassword();
        console.log(pass);
        let hashpass = await bcrypt.hash(pass,8);
        console.log(hashpass);
        db.query('UPDATE student_credentials SET ? WHERE email = ?',[{
            Password: hashpass
         },email],function(error,result){
            if(error){
                console.log(error);
            }
            else{
                sendMail(email,'Temporary password', pass + ' is your temporary password for IIITAPfolio');
                console.log(result);
                return res.render('success',{
                    message: 'Check your mail for temporary password',
                    code:'signup'
                   });
            }
         })
    });
});

app.post("/cpass",  async function (req,res){
    const email = req.session.email;
    const { pass, confirmpass} = req.body;
    if (pass != confirmpass){
        return res.render('error',{
            message: 'Passwords does not match',
            code:'fpass'
           });
       }
        let hashpass = await bcrypt.hash(pass,8);
        console.log(hashpass);
        db.query('UPDATE student_credentials SET ? WHERE email = ?',[{
            Password: hashpass
         },email],function(error,result){
            if(error){
                console.log(error);
            }
            else{
                console.log(result);
                
                return res.render('success',{
                    message: 'Password Changed successfully',
                    code:'home'
                   });
            }
         })
       
    });



app.post("/adminfpass",  function (req,res){
    const { email, pass, confirmpass, securityq} = req.body;
    db.query('SELECT Securityq from admin_credentials WHERE email = ?',[email], function(err,result)
    {
        if(err) {
            console.log(err);
        }
        if(result.length <= 0){
           return res.render('error',{
            message: 'Wrong email id',
            code:'adminsignup'
           });
        }else if (pass != confirmpass){
            return res.render('error',{
                message: 'Passwords does not match',
                code:'fpass'
               });
           }
           var savedQ = result[0].Securityq;
           console.log(securityq);
           if( securityq==savedQ)
           {
            console.log("YES");
        db.query('UPDATE admin_credentials SET ?',{
            Password: pass
         },function(error,result){
            if(error){
                console.log(error);
            }
            else{
                console.log(result);
                
                return res.render('success',{
                    message: 'Password Changed successfully',
                    code: 'adminsignup'
                   });
            }
         })
        }
        else{
            return res.render('error',{
                message: 'Security question answer does not match',
                code:'aforgotpass'
               });
        }
    });
});

app.post("/search",function(req,res){
    const email = req.body.id;
    console.log(email);
    db.query('SELECT * from student_basic WHERE email = ?',[email],function(err,basic)
    {
        if(err) {
            console.log(err);
        }
        else if(basic.length<=0){
           return res.render('error',{
               message: 'Profile of User is not ready. Try again later',
               code:''
              });
        }
        else{
           db.query('SELECT * from skills WHERE email = ?',[email],function(err,skill)
           {
               if(err) {
                   console.log(err);
               }  
               else
               {
                   db.query('SELECT * from academic_details WHERE email = ?',[email],function(err,acad)
                       {
                           if(err) {
                               console.log(err);
                           }  
                           else
                           {
                                   db.query('SELECT * from non_academic_details WHERE email = ?',[email],function(err,nacad)
                                   {
                                       if(err) {
                                           console.log(err);
                                       }  
                                       else
                                       {
                                           return res.render('home',{
                                               message: basic[0],
                                               skill: skill[0],
                                               acad: acad[0],
                                               nacad: nacad[0],
                                               code:'search'
                                           });
                                       }
                               })
                           }
                   })
               }
          })
        }
   })
        })

app.post("/signin",function(req,res){
    const { email, pass } = req.body;

    db.query('SELECT Password from student_credentials WHERE email = ?',[email],async function(err,result)
    {
        if(err) {
            console.log(err);
        }
        if(result.length > 0){
            var savedPass = result[0].Password;
            if( await bcrypt.compare(pass,savedPass))
            {
             req.session.loggedin = true;
             req.session.email = email;
             db.query('SELECT * from student_basic WHERE email = ?',[email],function(err,result)
             {
                 if(err) {
                     console.log(err);
                 }
                 if(result.length > 0){
                     res.redirect("/home");
                 }
                 else{
                return res.render('sbdetails',{
                message:'Enter',
                code: 'sb'
                });} 
            })
            }else{
                return res.render('error',{
                    message: 'Password doesnt match',
                    code:'signup'
            });}
        
        }else {
            return res.render('error',{
                message: 'Account does not exist. Please SignUp',
                code:'signup'
               });
           }  
    })
});

app.post("/adminsignin",function(req,res){
    const { email, pass } = req.body;

    db.query('SELECT  Password from admin_credentials WHERE email = ?',[email], function(err,result)
    {
        if(err) {
            console.log(err);
        }
        if(result.length > 0){
            var savedPass = result[0].Password;
            if(pass==savedPass)
            {
                req.session.loggedinadmin = true;
                return res.redirect("/adminlog");
           } else{
            return res.render('error',{
                message: 'Password doesnt match',
                code:'adminsignup'
           });}
        
        }else {
            return res.render('error',{
                message: 'Account does not exist. Please SignUp',
                code:'signup'
               });
           }  
    })
});


app.post("/review",function(req,res){
    const {n1,review}=req.body;
    db.query('INSERT INTO review SET ?',{
        name: n1,
        review: review
    },function(error,result){
        if(error){
            console.log(error);
        }
        else{
            console.log(result); 
            return res.redirect("/");
        }
     })
})

app.post("/skills",function(req,res){
    const email = req.session.email;
    const {one,two,three,four,five} = req.body;
         console.log(req.body);
        
            db.query('UPDATE skills SET ? WHERE email = ?',[{
                one: one,
                two: two,
                three: three,
                four: four,
                five: five
             },email],function(error,result){
                if(error){
                    console.log(error);
                }
                else{
                    console.log(result); 
                    return res.redirect("/home");
                }
             })   
        })


app.post("/nacad",function(req,res){
    const email = req.session.email;
    const {p1,p2,p3,p4,cp1,cp2,cpa1,cpa2,cpa3,ha1,ha2,cca1,cca2,cca3,cca4,cca5,i1,i2,doc} = req.body;
            db.query('UPDATE non_academic_details SET ? WHERE email= ?',[{
                p1: p1,
                p2: p2,
                p3: p3,
                p4: p4,
                cp1: cp1,
                cp2: cp2,
                cpa1: cpa1,
                cpa2: cpa2,
                cpa3: cpa3,
                ha1: ha1,
                ha2: ha2,
                cca1: cca1,
                cca2: cca2,
                cca3: cca3,
                cca4: cca4,
                cca5: cca5,
                i1: i1,
                i2: i2,
             },email],function(error,result){
                if(error){
                    console.log(error);
                }
                else{
                    db.query('INSERT INTO admin_panel SET ?',{
                        email: email,
                        req_type: 'Edit non-academic details',
                        doc_link: doc
                    },function(error,result){
                        if(error){
                            console.log(error);
                        }
                        else{
                            console.log(result); 
                            return res.redirect("/home");
                        }
                     })
                }
             })  
        })



app.post("/acad",function(req,res){
    const email = req.session.email;
    console.log(email);
    const {c1,c2,c3,c4,aw1,aw2,aw3,pap1,pap2,pap3,doc}=req.body; 
    console.log(req.body);
        
            db.query('UPDATE academic_details SET ? WHERE email= ?',[{
                C1: c1,
                C2: c2,
                C3: c3,
                C4: c4,
                aw1: aw1,
                aw2: aw2,
                aw3: aw3,
                pap1: pap1,
                pap2: pap2,
                pap3: pap3
             },email],function(error,result){
                if(error){
                    console.log(error);
                }
                else{
                    db.query('INSERT INTO admin_panel SET ?',{
                        email: email,
                        req_type: 'Edit academic details',
                        doc_link: doc
                    },function(error,result){
                        if(error){
                            console.log(error);
                        }
                        else{
                            console.log(result); 
                            return res.redirect("/home");
                        }
                     })
                }
             })
        })
    

app.post("/sb",function(req,res){
    const { email, name, role, ten_marks, twelve_marks , address , phone, about_me,
         cur_sem, cur_cgpa, linkedin, twitter, github} = req.body;
         console.log(req.body);
    db.query('SELECT * from student_basic WHERE email = ?',[email],function(err,result)
    {
        if(err) {
            console.log(err);
        }
        if(result.length > 0){
            db.query('UPDATE student_basic SET ?',{
                name: name,
                role: role,
                ten_marks: ten_marks,
                twelve_marks: twelve_marks,
                address: address,
                phone: phone,
                about_me: about_me,
                cur_sem: cur_sem,
                cur_cgpa: cur_cgpa,
                linkedin: linkedin,
                twitter: twitter,
                github: github
             },function(error,result){
                if(error){
                    console.log(error);
                }
                else{
                    console.log(result); 
                    return res.redirect("/home");
                }
             })
        }
        db.query('INSERT INTO student_basic SET ?',{
            name: name,
            email: email,
            role: role,
            ten_marks: ten_marks,
            twelve_marks: twelve_marks,
            address: address,
            phone: phone,
            about_me: about_me,
            cur_sem: cur_sem,
            cur_cgpa: cur_cgpa,
            linkedin: linkedin,
            twitter: twitter,
            github: github
         },function(error,result){
            if(error){
                console.log(error);
            }
            else{
                db.query('INSERT INTO academic_details SET ?',{
                    email: email
                },function(error,result){
                    if(error){
                        console.log(error);
                    }
                    else{
                        db.query('INSERT INTO non_academic_details SET ?',{
                            email: email,
                        },function(error,result){
                            if(error){
                                console.log(error);
                            }
                            else{
                                db.query('INSERT INTO skills SET ?',{
                                    email: email,
                                },function(error,result){
                                    if(error){
                                        console.log(error);
                                    }
                                    else{
                                        console.log(result); 
                                        return res.redirect("/home");
                                    }
                                 })
                            }
                         })
                    }
                 })
            }
         })
    })
})



app.get("/du",redirectULogin,function(req,res){
    const email = req.session.email;
    db.query('DELETE from student_credentials WHERE email = ?',[email],function(err,result)
        {
            if(err) {
                console.log(err);
            }
            else{
                return res.render('index',{message:''});
            }
        })
})

app.get("/reseta",redirectULogin,function(req,res){
    const email = req.session.email;
    db.query('DELETE from academic_details WHERE email = ?',[email],function(err,result)
        {
            if(err) {
                console.log(err);
            }
            else{
                db.query('INSERT INTO academic_details SET ?',{
                    email: email,
                },function(error,result){
                    if(error){
                        console.log(error);
                    }
                    else{
                        console.log(result); 
                        return res.redirect("/home");
                    }
                 })
            }
        })
})


app.get("/resetna",redirectULogin,function(req,res){
    const email = req.session.email;
    db.query('DELETE from non_academic_details WHERE email = ?',[email],function(err,result)
        {
            if(err) {
                console.log(err);
            }
            else{
                db.query('INSERT INTO non_academic_details SET ?',{
                    email: email,
                },function(error,result){
                    if(error){
                        console.log(error);
                    }
                    else{
                        console.log(result); 
                        return res.redirect("/home");
                    }
                 })
            }
        })
})

app.post("/valid",function(req,res){
    const id=req.body.id;
    db.query('SELECT email,req_type from admin_panel WHERE id = ?',[id],function(err,result)
        {
            if(err) {
                console.log(err);
            }
            else if(result.length==0){
                return res.render('error',{
                    message: 'Id doesnt exist',
                    code:'adminlog'
            });
            }
            else{
               const email=result[0].email;
               console.log('valid'+email);
               const req_type=result[0].req_type;
               sendMail(email,'Congratulations', 'Dear User, your request to '+req_type+' is reviewed successfully. Flaunt your new skills to the world using IIITAPfolio.');
               db.query('DELETE from admin_panel WHERE id = ?',[id],function(err,resu)
                {
                    if(err) {
                        console.log(err);
                    }
                    else{
                        return res.redirect("/adminlog");
                    }
                })
            }
})

})


app.post("/decline",function(req,res){
    const id=req.body.id;
    db.query('SELECT email,req_type from admin_panel WHERE id = ?',[id],function(err,result)
        {
            if(err) {
                console.log(err);
            }
            else if(result.length==0){
                return res.render('error',{
                    message: 'Id doesnt exist',
                    code:'adminlog'
            });
            }
            else{
               const email=result[0].email;
               const req_type=result[0].req_type;
               let table_name;
               if(req_type=='Edit academic details')
               table_name='academic_details';
               else
               table_name='non_academic_details';
               db.query(`DELETE from ${table_name} WHERE email = ?`,[email],function(err,result)
               {
                   if(err) {
                       console.log(err);
                   }
                   else{
                       db.query(`INSERT INTO ${table_name} SET ?`,{
                           email: email,
                       },function(error,result){
                           if(error){
                               console.log(error);
                           }
                           else{
                            sendMail(email,'Incorrect documents', 'Dear User, your request to '+req_type+' is rejected. Info provided is insufficient to validate your edit request. Admin has reset your profile temporarily. Resubmit your details again.');
                            db.query('DELETE from admin_panel WHERE id = ?',[id],function(err,resu)
                            {
                                if(err) {
                                    console.log(err);
                                }
                                else{
                                    return res.redirect("/adminlog");
                                }
                            })
                           }
                        })
                   }
               })
              
            }
        })
        })


app.listen(PORT,function(){
    console.log("Server started on port "+PORT);
});