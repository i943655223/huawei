"use strict";window.onload=function(){var m=document.getElementsByClassName("boximg")[0],a=document.getElementsByClassName("mask")[0],e=document.getElementsByClassName("bigimg")[0],d=document.getElementsByClassName("bigImg")[0];m.onmouseenter=function(){a.style.display="block",e.style.display="block"},m.onmouseleave=function(){a.style.display="none",e.style.display="none"},m.onmousemove=function(e){var t=window.event||e,s=t.clientX+scroll().left,o=t.clientY+scroll().top,f=s-m.offsetLeft-2*a.offsetWidth-40,l=o-m.offsetTop-a.offsetHeight-20,n=m.offsetWidth-a.offsetWidth,i=m.offsetHeight-a.offsetHeight;f<0&&(f=0),l<0&&(l=0),n<f&&(f=n),i<l&&(l=i),a.style.left=f+"px",a.style.top=l+"px",d.style.marginLeft=-f/m.offsetWidth*d.offsetWidth+"px",d.style.marginTop=-l/m.offsetHeight*d.offsetHeight+"px"}};