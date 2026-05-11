
// catch the inputs

var nemo = document.getElementById('inname')
var cat = document.getElementById('incateg')
var pri = document.getElementById('inprice')
var des = document.getElementById('indesc')
var upto = document.getElementById('upd').style.display='none'

// the array
var hub =  []
if(JSON.parse(localStorage.getItem('goods'))!=null){
hub = JSON.parse(localStorage.getItem('goods'))

}
showdata()

// The main function

function mainfun(){
   getdatafrominput()
   
   showdata()
  

}

// get the value from inputs

function getdatafrominput(){

var dataentry ={
name : nemo.value ,
categ : cat.value ,
price : Number(pri.value) ,
desc : des.value ,
 
}
hub.push(dataentry)
localStorage.setItem('goods', JSON.stringify(hub))
}

// show the data in html

function showdata(){
   
 var magicbox = ``
 for(var i=0 ; i<hub.length ; i++){
magicbox+= `
    <tr>
                <td>${i}</td>
                <td>${hub[i].name}</td>
              
              
                <td>${hub[i].categ}</td>
                <td>${hub[i].price}</td>
                <td>${hub[i].desc}</td>
                <td><button onclick="deleteitem(${i})" class="btn btn-danger"> Delete</button></td>
                <td><button onclick='getupdatetheinputs(${i})' class="btn btn-warning" >Update</button></td>
            </tr>

`

 }
document.getElementById('tmain').innerHTML = magicbox
 clearinputs()
}

// delete function
function deleteitem(i){

   hub.splice(i,1)
    localStorage.setItem('goods', JSON.stringify(hub))
    showdata()

}

// clear the inputs after add
function clearinputs(){
nemo.value=""
cat.value=''
pri.value=''
des.value=''

}


// get the update data
var itmindex =0
function getupdatetheinputs(i){
    itmindex=i
nemo.value = hub[i].name
cat.value = hub[i].categ
pri.value = hub[i].price
des.value = hub[i].desc
document.getElementById('upd').style.display='block'
}

// doing the update
function doingtheupdate(){
    document.getElementById('upd').style.display='none'
    hub[itmindex].name = nemo.value
hub[itmindex].categ = cat.value
hub[itmindex].price = pri.value
hub[itmindex].desc = des.value
localStorage.setItem('goods', JSON.stringify(hub))
    showdata()
}

// search
function searchtheitm(value){
var mega = ''
for(var i =0; i<hub.length ;i++){
    if(hub[i].name.includes(value)){
        mega+=`
        
        <tr>
                <td>${i}</td>
                <td>${hub[i].name}</td>
              
              
                <td>${hub[i].categ}</td>
                <td>${hub[i].price}</td>
                <td>${hub[i].desc}</td>
                <td><button onclick="deleteitem(${i})" class="btn btn-danger"> Delete</button></td>
                <td><button onclick='getupdatetheinputs(${i})' class="btn btn-warning" >Update</button></td>
            </tr>
        
        `
    }
}

document.getElementById('tmain').innerHTML=mega
}

