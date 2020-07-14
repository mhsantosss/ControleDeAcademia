// create

exports.post = function(req, res){
    //rec.query
    //rec.body

   
    const keys = Object.keys(req.body);

    for(key of keys ){
        if (req.body[key] == ""){
            return res.send('Please, fill all fields!')
        }
    }
    
    
     return res.send(req.body);
}

