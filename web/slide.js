var slideindex=1;
showslide(slideindex);
function nextslide(n)
{
showslide(slideindex+=n);
}
function curslide(n)
{
showslide(slideindex=n);
}
function showslide(n)
{

var i;
var slides=document.getElementsByClassName("topimage");
var dots=document.getElementsByClassName('dot');
if(n>slides.length)
slideindex=1;
else if(n<1)
slideindex=slides.length;
for(i=0;i<slides.length;i++)
{
slides[i].style.display="none";
}

for(i=0;i<dots.length;i++)
{
dots[i].className = dots[i].className.replace(" active", "");
}

slides[slideindex-1].style.display = "block";
 // dots[slideindex-1].ClassName += " active";
 if(slideindex===3)
 {
     console.log("yahi h ");
 document.getElementsByClassName("menu")[0].style.color="#FFFFFF";
 }
else
document.getElementsByClassName("menu")[0].style.color="#000000";
    
 }