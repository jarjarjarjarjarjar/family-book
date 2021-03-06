var family = ["dadi.png","dad.png","mom.png","brother.png"]
var num = 0
function changeimage() {
    if(num==4){num=0}
    document.getElementById("familybook").src=family[num];num=num+1;
    //else{document.getElementById("familybook").src=family[num];num=num+1;}
}
if(i==9){i=0;}
document.getElementById("img1").src=images[i];
i++;