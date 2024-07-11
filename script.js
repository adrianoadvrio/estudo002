var ima = document.querySelector('.ima1')
var aaa = document.getElementById("imageoption").src = "2.jpg"

document.getElementById("imageoption").src = "1.jpg"


window.addEventListener('keydown', function(e) {
    if (e.key == " " ||
        e.code == "Space" ||      
        e.code == 32 ) {
            
        ima.classList.remove('ima1')
        ima.classList.add('ima2')
       document.getElementById("imageoption").src = "2.jpg"
        
        
        }
        
    })
