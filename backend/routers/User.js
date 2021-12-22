const express=require('express');
const router=express.Router();
const User=require('../controllers/User');



router.post("/signIn", User.user_signIn_post);

router.post("/auth", User.user_auth_post);

router.get("/allusers", User.user_alluser_get);

router.get("/delete/:id", User.user_delete_get);

router.post("/updaterole", User.user_updaterole_post);


router.get("/:id",User.user_detail_get );

router.post("/update/:id",User.user_updaterole_post );

router.get("/signOut/:id", User.user_signout_get);

router.post("/signUp", User.user_signup_post);


module.exports=router;