const ram =['1',2,]
function* getData(){
   yield ram;
   yield 2;
}

const data=getData()
 console.log(data.next());
 console.log(data.next())


 const d =['1','2','3','5']
 d.map((d)=>{
    return console.log(d);
 })

 Array.prototype.custome =function (callback){
    const result =[];
    for(i=0;i<this.length;i++){
        result.push(callback(this[i],i,this))
    }
    return result;
 }
 d

 const value= d.custome((item)=>{
    return item*2;
 })

 console.log(value);
