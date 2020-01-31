var express = require("express");
var app = express();
var githubStrategy = require("passport-github").Strategy;
var passport = require("passport")

passport.use(
    new githubStrategy({
        clientID:"820fbb8702949cdaa19a",
        clientSecret:"233e2db60135262c54b9e6e5169fdb881ff37cbc",
        callbackURL:"/auth/github/login/callback"
    },
    function(profile){
        console.log("profile",profile);
})
)
app.get("/auth/github",passport.authenticate("github",{
    scope:["profile","email"]
}))

app.get("/auth/github/login/callback",passport.authenticate("github",{

}))

app.listen(5000,()=>{
    console.log("server is listning on 5000...")
})
