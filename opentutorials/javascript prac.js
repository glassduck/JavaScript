var grades={'park' :10};
for(key in grades){
    document.write("key : "+key+" value : "+grades[key]+"<br/>")
}
//아래와 동일 
for(var name in grades){
    document.write("key : "+name+" value : "+grades[name]+"<br/>")
}

var grades = { 
    'list' : {'park' :10, 'kim' :8 ,'choi' :6},
    'show' : function(){
        for(var name in this.list){
            console.log(name,this.list[name])
        }
    }
}
alert(grades['list']['park'])
grades['show']()