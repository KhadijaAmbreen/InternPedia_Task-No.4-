Array.from((document.querySelectorAll("#cl-button")),(ele)=>{
    ele.addEventListener("click",()=>{
        let x = getComputedStyle(document.querySelector(".navbar")).display
        if(x==="none"){
            document.querySelector(".navbar").style.display="block"
            document.querySelector(".navbar").style.animationName="startnav"
        }
        else{
            document.querySelector(".navbar").style.animationName="closenav"
            setTimeout(()=>{
                document.querySelector(".navbar").style.display="none"
            },400)
        }
    })
})