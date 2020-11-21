let country="China"; //string
let animal="panda"; //number
let iscute=true; //boolean
let arr=[country, animal, iscute];
alert("first and second elements: "+arr[0]+", "+arr[1]);
arr[2]=false;
alert("the third element after change: "+arr[2]);
let language="chinese";
arr.push(language);
let color="gold";
arr.unshift(color);
alert("array after change: "+arr);
alert("array length: "+arr.length);


let string="Every man in the world! Every woman on earth!";
alert("string: "+string);
let change="man";
var new_string=string.replace(change, "person");
change="woman";
new_string=new_string.replace(change, "person");
alert("new string: "+new_string);