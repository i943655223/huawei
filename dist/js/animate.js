;function swiperAnimateCache(e){for(j=0;j<e.slides.length;j++)for(allBoxes=e.slides[j].querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes.style?allBoxes[i].setAttribute("swiper-animate-style-cache",allBoxes[i].attributes.style.value):allBoxes[i].setAttribute("swiper-animate-style-cache"," "),allBoxes[i].style.visibility="hidden"}function swiperAnimate(e){clearSwiperAnimate(e);var t=e.slides[e.activeIndex].querySelectorAll(".ani");for(i=0;i<t.length;i++)t[i].style.visibility="visible",effect=t[i].attributes["swiper-animate-effect"]?t[i].attributes["swiper-animate-effect"].value:"",t[i].className=t[i].className+"  "+effect+" animated",style=t[i].attributes.style.value,duration=t[i].attributes["swiper-animate-duration"]?t[i].attributes["swiper-animate-duration"].value:"",duration&&(style=style+"animation-duration:"+duration+";-webkit-animation-duration:"+duration+";"),delay=t[i].attributes["swiper-animate-delay"]?t[i].attributes["swiper-animate-delay"].value:"",delay&&(style=style+"animation-delay:"+delay+";-webkit-animation-delay:"+delay+";"),t[i].setAttribute("style",style)}function clearSwiperAnimate(e){for(j=0;j<e.slides.length;j++)for(allBoxes=e.slides[j].querySelectorAll(".ani"),i=0;i<allBoxes.length;i++)allBoxes[i].attributes["swiper-animate-style-cache"]&&allBoxes[i].setAttribute("style",allBoxes[i].attributes["swiper-animate-style-cache"].value),allBoxes[i].style.visibility="hidden",allBoxes[i].className=allBoxes[i].className.replace("animated"," "),allBoxes[i].attributes["swiper-animate-effect"]&&(effect=allBoxes[i].attributes["swiper-animate-effect"].value,allBoxes[i].className=allBoxes[i].className.replace(effect," "))}