let box=document.querySelector("div")
let bu=document.querySelector("button")
let red=document.getElementById("red")
let green=document.getElementById("green")
let blue=document.getElementById("blue")
let yellow=document.getElementById("yellow")
let p=document.querySelector("#p")
let bb=document.querySelectorAll(".bb")
let h2=document.querySelector("h2")
let colorseq=[red,green,blue,yellow]
var level=1;
function u(){
   level=level+1
   p.textContent=`${level}`
   alert("LEVEL UP!!!")
   bu.style.display="flex"
   fun()
}

bu.addEventListener("click",fun);
function fun() {
      
   
      bu.style.display="none"
      if(level==1){
         let count0=0;
         repeat();
         function repeat(){
         if(count0<2){
            setTimeout(()=>{
            color();
            },500)
            count0++;
            setTimeout(()=>{
            repeat();
            },600)
       
         }else{
            clearInterval()
            user()
            time(3)
         }
      }
      }else if(level==2){
         let count1=0;
         repeat();
         function repeat(){
         if(count1<3){
            setTimeout(()=>{
              color();
            },500)
            count1++;
            setTimeout(()=>{
            repeat();
            },600)
       
         }else{
          clearInterval()
          user();
          time(5)
        }
      }
      }else if(level==3){
         let count2=0;
         repeat();
         function repeat(){
          if(count2<4){
            setTimeout(()=>{
            color();
            },500)
             count2++;
            setTimeout(()=>{
               repeat();
            },600)
       
         }else{
            clearInterval()
            user()
            time(6)
         }
      }
      }else if(level==4){
         let count3=0;
         repeat();
         function repeat(){
             if(count3<5){
            setTimeout(()=>{
               color();
            },500)
            count3++;
            setTimeout(()=>{
               repeat();
            },600)
       
            }else{
            clearInterval()
            user()
            time(8)
         }   }
      }else if(level==5){
         let count4=0;
         repeat();
         function repeat(){
            if(count4<6){
                  setTimeout(()=>{
                  color();
                  },500)
                  count4++;
               setTimeout(()=>{
                  repeat();
               },600)
       
            }else{
                  clearInterval();
               user()
               time(10)
            }
         }
    }else{
      level=1;
      bu.style.display="flex"

    }
}
     

var seq=[]
function color(){
   setTimeout(()=>{
      let ran=Math.floor(Math.random()*4);
      seq.push(colorseq[ran].getAttribute("id"))
      console.log(seq)
      colorseq[ran].style.backgroundColor="white"
      setTimeout(()=>{
        colorseq[ran].style.backgroundColor=colorseq[ran].getAttribute("id");
      },300)
   },550)
  
   
}
var userseq=[]

function click(){
   this.style.backgroundColor="white"
   this.style.border="5px solid"
   setTimeout(()=>{
      this.style.backgroundColor=this.getAttribute("id");
      this.style.border="none"
    },150)
   userseq.push(this.getAttribute("id"))
   console.log(userseq)
}
function user(){
for(i of bb){
   i.addEventListener("click",click);
} 
  
}  
   //  red.addEventListener("click",(event)=>{
    
   //     red.style.backgroundColor="white"
   //     setTimeout(()=>{
   //       red.style.backgroundColor=red.getAttribute("id");
   //     },150)
       
   //  })

   //  blue.addEventListener("click",(event)=>{
   //    userseq.push(blue.getAttribute("id"))
   //     console.log(userseq)
   //     blue.style.backgroundColor="white"
   //     setTimeout(()=>{
   //       blue.style.backgroundColor=blue.getAttribute("id");
   //     },150)
   //  })
   //  green.addEventListener("click",(event)=>{
   //    userseq.push(green.getAttribute("id"))
   //     console.log(userseq)
   //     green.style.backgroundColor="white"
   //     setTimeout(()=>{
   //       green.style.backgroundColor= green.getAttribute("id");
   //     },150)
   //  })
   //  yellow.addEventListener("click",(event)=>{
   //    userseq.push(yellow.getAttribute("id"))
   //     console.log(userseq)
   //     yellow.style.backgroundColor="white"
   //     setTimeout(()=>{
   //       yellow.style.backgroundColor=yellow.getAttribute("id");
   //     },150)
   // })
   
function time(ti){
   h2.style.display="flex"
   var t=ti;
   setInterval(()=>{
      if(t>=0){
        h2.textContent=t
        t--;
      }
      else{
         clearInterval()
      }
   },1000)
   
  
   setTimeout(()=>{
      h2.style.display="none"
      cell();
   },(ti+2)*1000)
} 
function cell(){
   
  
  
    if(JSON.stringify(userseq)==JSON.stringify(seq)){
       
       seq.length=null;
       userseq.length=null;
        u();
     }else{
      alert("missed GAME OVER")

   }
   
   
}
   
  



