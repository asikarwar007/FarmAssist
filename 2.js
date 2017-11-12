var http=require('http');
var demo=[];
console.log("Doing the Post Operations...");
// Define an demo object with properties and values. This object will be used for POST request.

var demo=JSON.stringify({"question":"hi"});

var extServerOptionsPost={
host:'http://westus.api.cognitive.microsoft.com/qnamaker/v2.0',
path:'/knowledgebases/b1691100-1af3-4309-abb7-faee88b4a9c5/generateAnswer',
method:'POST',
headers:{
'Ocp-Apim-Subscription-Key':'2d12d30d8e0742148c2d2881cbbcdbf9s',
'Content-Type':'application/json'
}
};

var reqPost=http.request(extServerOptionsPost,function(res){
console.log("response statusCode: ",res.statusCode);
res.on('data',function(data){
console.log('Posting Result:\n');
process.stdout.write(data);
console.log('\n\n POST Operation Completed');
});
});


reqPost.write(demo);
reqPost.end();
reqPost.on('error',function(e){
    console.error(e);
});
