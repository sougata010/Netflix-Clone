let btn1 = document.querySelector(".slider1");
let btn2 = document.querySelector(".slider2");
let movie = document.querySelectorAll(".thumbnail");
let k=0;
btn1.addEventListener("click",()=>{
    if(k==0){
        btn2.classList.add("slider2ani")
        movie.forEach((e)=>{
            e.classList.add("mtransformforward1")
        })
        k=1
        return
    }
    else if(k==1){
        btn1.classList.add("slideras")
        movie.forEach((e)=>{
            e.classList.remove("mtransformforward1")
            e.classList.add("mtransformforward2")
        })
        k=2
        return
    }
    
})
btn2.addEventListener("click",()=>{
    if(k==1){
        btn2.classList.remove("slider2ani")
        movie.forEach((e)=>{
            e.classList.remove("mtransformforward1")
        })
        k=0
        return
    }
    else if(k==2){
        btn1.classList.remove("slideras")
        movie.forEach((e)=>{
            e.classList.remove("mtransformforward2")
            e.classList.add("mtransformforward1")
        })
        k=1
        return
    }
    
})
let mtx1=document.querySelector(".mtx1")
let mtx2=document.querySelector(".mtx2")
let mtx3=document.querySelector(".mtx3")
let mtx4=document.querySelector(".mtx4")
let mtx5=document.querySelector(".mtx5")
let mtx6=document.querySelector(".mtx6")
let stx1=document.querySelector(".ss1")
let stx2=document.querySelector(".ss2")
let stx3=document.querySelector(".ss3")
let stx4=document.querySelector(".ss4")
let stx5=document.querySelector(".ss5")
let stx6=document.querySelector(".ss6")
let f1=document.querySelector(".f1")
let f2=document.querySelector(".f2")
let f3=document.querySelector(".f3")
let f4=document.querySelector(".f4")
let f5=document.querySelector(".f5")
let f6=document.querySelector(".f6")
mtx1.addEventListener("click",()=>{
    stx1.classList.toggle("stx1")
    f1.classList.toggle("ficontg")
})
mtx2.addEventListener("click",()=>{
    stx2.classList.toggle("stx2")
    f2.classList.toggle("ficontg")
})
mtx3.addEventListener("click",()=>{
    stx3.classList.toggle("stx3")
    f3.classList.toggle("ficontg")
})
mtx4.addEventListener("click",()=>{
    stx4.classList.toggle("stx4")
    f4.classList.toggle("ficontg")
})
mtx5.addEventListener("click",()=>{
    stx5.classList.toggle("stx5")
    f5.classList.toggle("ficontg")
})
mtx6.addEventListener("click",()=>{
    stx6.classList.toggle("stx1")
    f6.classList.toggle("ficontg")
})

