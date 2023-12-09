let arr=["/","*","+","-"]

//-15+5, 15+5,15-5,-15-5
const calc4=(exp)=>{
    console.log("ans",exp)
}
    

const calc3=(str)=>{

    console.log("3",str)

    let f=0;
  
    for(let i =1; i<str.length; i++){
    
        if(arr.includes(str[i])){
                if(str[i]=="-" ){
                    f=1
                    break;
                }
                else{
                    f=2;
                  
                }
        }
    }
 
    if(f==0){
        console.log("break3",str)
    }else if(f==2){
         calc4(str)
    }else{
    let bag=""
    let val=0
            for(let i=1; i<str.length; i++){
            
                if(str[i]=="-"){
                let a=""
                let b="" 
                let j=i-1;
                let k=i+1  
              
                 while(arr.includes(str[j])==false && str[j]!=undefined)
                 {
                  
                   a+=str[j]
                  
                   j--
                 }
                 while(!arr.includes(str[k]) && str[k]!=undefined)
                 {
                   b+=str[k]
               
                   k++
                 }
               //5-10-5
                let c=a.split("").reverse().join("")
              
 
                 b=Number(b)
                 c=Number(c)
             // console.log(c,b)
              
              if(str[j]=="-"){
                val=b+c
                //console.log("b",b,c)
                bag=c+"-"+b
                let s=str.replace(bag,val)
                f=2
                calc3(s) 
             }

             else if(b<c){
                val=c-b
                bag+=c+"-"+b
                let s=str.replace(bag,val)
                calc3(s)
              
             }
             else if(b>c){
                val=b-c
                bag+=c+"-"+b
                let s=str.replace(bag,"-"+val)
                calc3(s)
           
             }
            
             
             else{
                if(b)
                val=""
                bag+=c+"-"+b
                console.log("b",bag)
                let s=str.replace(bag,0)
                calc3(s)
            
             }



    //          if(str[j]!=undefined && str[j]=="-"){
    //             if(b<c){
    //              val=c-b
    // //  console.log("v",val)
    //   bag+=c+"+"+b
    //    let s=str.replace(bag,val)
    //    calc2(s)
    //             }
    //             else if(c<b){
                 
    //                  val=b-c
    //     //  console.log("v",val)
    //       bag+="-"+c+"+"+b
    //        let s=str.replace(bag,"+"+val)
    //     //   console.log(s)
    //        calc2(s)
                    
    //             }
    //             else if(c==b){
    //              val="";
    //              bag="-"+c+"+"+b
    //              let s=str.replace(bag,val)
    //              calc2(s)
    //          }
    //  }
     
     
    //  else{
    //      val=b+c
    //    //  console.log("v",val)
    //      bag+=c+"+"+b
    //       let s=str.replace(bag,val)
    //     //  console.log(s)
    //       calc2(s)
    //  }

             break; 
            }
            }}
}
const calc2=(str)=>{

    console.log(2,str)
    let f=0;
  
  for(let i =0; i<str.length; i++){
  
      if(arr.includes(str[i])){
              if(str[i]=="+"){
                  f=1
                  break;
              }
              else{
                  f=2;
                
              }
      }
  }
  
  if(f==0){
      console.log("break2",str)
  }else if(f==2){
       calc3(str)
  }else{

    let bag=""
    let val=0
    
       
            for(let i=0; i<str.length; i++){
            
                if(str[i]=="+"){
                let a=""
                let b="" 
                let j=i-1;
                let k=i+1  
              
                 while(arr.includes(str[j])==false && str[j]!=undefined)
                 {
                  
                   a+=str[j]
                  
                   j--
                 }
                 while(!arr.includes(str[k]) && str[k]!=undefined)
                 {
                   b+=str[k]
               
                   k++
                 }
               
                let c=a.split("").reverse().join("")
                
 
                 b=Number(b)
                 c=Number(c)
                 console.log("j",j,i,b,c)
                 //-18+15
                if(str[j]!=undefined && str[j]=="-"){
                           if(b<c){
                            val=c-b
               //  console.log("v",val)
                 bag+=c+"+"+b
                  let s=str.replace(bag,val)
                  calc2(s)
                           }
                           else if(c<b){
                            
                                val=b-c
                   //  console.log("v",val)
                     bag+="-"+c+"+"+b
                      let s=str.replace(bag,"+"+val)
                   //   console.log(s)
                      calc2(s)
                               
                           }
                           else if(c==b){
                            val="";
                            bag="-"+c+"+"+b
                            let s=str.replace(bag,val)
                            calc2(s)
                        }
                }
                
                
                else{
                    val=b+c
                  //  console.log("v",val)
                    bag+=c+"+"+b
                     let s=str.replace(bag,val)
                   //  console.log(s)
                     calc2(s)
                }
               
                 break;
                }
            
        }}

}

let calc1=(str)=>{
  console.log(1,str)
  let f=0;

for(let i =0; i<str.length; i++){

    if(arr.includes(str[i])){
            if(str[i]=="*"){
                f=1
                break;
            }
            else{
                f=2;
              
            }
    }
}

if(f==0){
    console.log(str)
}else if(f==2){
     calc2(str)
}else{


let bag=""
let val=0

   
        for(let i=0; i<str.length; i++){
        
            if(str[i]=="*"){
            let a=""
            let b="" 
            let j=i-1;
            let k=i+1  
          
             while(arr.includes(str[j])==false && str[j]!=undefined)
             {
              
               a+=str[j]
              
               j--
             }
             while(!arr.includes(str[k]) && str[k]!=undefined)
             {
               b+=str[k]
           
               k++
             }
           
             const c=a.split("").reverse().join("")
              bag+=c+"*"+b
              val+=Number(c)*Number(b)
          
           
             let s=str.replace(bag,val)
           
             calc1(s)
             break;
            }
        
    }
   
}

}

const calc=(str)=>{
let f=0;

for(let i =0; i<str.length; i++){

    if(arr.includes(str[i])){
            if(str[i]=="/"){
                f=1
                break;
            }
            else{
                f=2;
              
            }
    }
}

if(f==0){
    console.log(str)
}else if(f==2){
     calc1(str)
}else{


let bag=""
let val=0

   
        for(let i=0; i<str.length; i++){
        
            if(str[i]=="/"){
            let a=""
            let b="" 
            let j=i-1;
            let k=i+1  
          
             while(arr.includes(str[j])==false && str[j]!=undefined)
             {
              
               a+=str[j]
              
               j--
             }
             while(!arr.includes(str[k]) && str[k]!=undefined)
             {
               b+=str[k]
           
               k++
             }
           
             const c=a.split("").reverse().join("")
              bag+=c+"/"+b
              val+=Number(c)/Number(b)
          
           
             let s=str.replace(bag,val)
           
             calc(s)
             break;
            }
        
    }
}
}
let u="3*45/5/3*3"
let v="30/15*15/5*3+15"
let w="6/2+5-10-5-3+3"
let s="33.33/11+2.22-2-2-1*3"

calc(s)
