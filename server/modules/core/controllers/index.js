exports.renderIndex = function renderIndex(req,res){
    res.sendFile('index.html',{root:'./public/'});
};
