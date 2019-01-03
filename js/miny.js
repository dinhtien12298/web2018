// Opacity when hovering navBar
var layerOpacity = document.getElementsByClassName("layer_opacity")[0];
var subMenu = document.getElementsByClassName("sub-menu");
for (i = 0; i < subMenu.length; i++) {
    subMenu[i].onmouseover = function() {
        if (window.outerWidth > 768) {
            layerOpacity.style.height = document.getElementsByTagName('body')[0].clientHeight + "px";
        }
    };
    subMenu[i].onmouseout = function() {
        if (window.outerWidth > 768) {
            layerOpacity.style.height = "0px";
        }
    }
}

// iconSearch change color and searchBar scale when focusing searchBar
var searchField = document.getElementById("search");
var iconSearch = document.getElementsByTagName("i")[0];
searchField.onfocus = function() {
    iconSearch.style.color = "#ff9900";
    iconSearch.style.transform = "scale(1.3)";
}
searchField.onblur = function () {
    iconSearch.style.color = "#7088a9";
    iconSearch.style.transform = "scale(1)";
}

// Mobile: Menu CanVas
var menuButton = document.getElementById("icon-nav");
let navTag = document.getElementsByTagName("nav")[0];
var closeButton = document.getElementsByClassName("close-nav-mobile")[0];

if (window.outerWidth <= 768) {
    layerOpacity.style.height = document.getElementsByTagName('body')[0].clientHeight + "px";
}

menuButton.onclick = function() {
    navTag.style.marginLeft = "0";
    layerOpacity.style.marginLeft = "0";
    document.getElementsByTagName('body')[0].style.overflow = "hidden";
}

closeButton.onclick = function() {
    navTag.style.marginLeft = `-${0.7 * document.getElementsByTagName('body')[0].clientWidth}px`;
    layerOpacity.style.marginLeft = "-100%";
    document.getElementsByTagName('body')[0].style.overflow = "unset";
}

// Mobile: Menu Accordion
var subject = document.getElementsByClassName("subject");
var iconPlus = document.getElementsByClassName("icon-plus");
var iconMinus = document.getElementsByClassName("icon-minus");

for (let i = 0; i < subMenu.length; i++) {
    subMenu[i].addEventListener("click", function() {
        var current = subMenu[i];
        var list_menu_active = document.getElementsByClassName('menu-active');
        if (list_menu_active.length) {
            for (let i = 0; i < list_menu_active.length; i++) {
                if (current == list_menu_active[i]) { continue };
                list_menu_active[i].classList.remove('menu-active');
            }
        }
        
        if(current.classList.contains('menu-active')){
           current.classList.remove('menu-active'); 
        }
        else {
            current.classList.add('menu-active');
        }
    })
}

// Scroll to Top
var scrollTopButton = document.getElementById("scroll-top");
var html = document.documentElement;

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
};

scrollTopButton.onclick = function() {
    scrollToTop(200, 3);
}

// function scrollToTop(scrollDuration) {
//     var scrollStep = -window.scrollY / (scrollDuration / 15),
//         scrollInterval = setInterval(function(){
//         if ( window.scrollY != 0 ) {
//             window.scrollBy( 0, scrollStep );
//         }
//         else clearInterval(scrollInterval); 
//     },15);
// }

function scrollToTop(totalTime, easingPower) {
    var timeLeft = totalTime;
    var scrollByPixel = setInterval(function () {
        var percentSpent = (totalTime - timeLeft) / totalTime;
        if (timeLeft >= 0) {
            var newScrollTop = html.scrollTop * (1 - easeInOut(percentSpent, easingPower));
            html.scrollTop = newScrollTop;
            timeLeft--;
        } else {
            clearInterval(scrollByPixel);
        }
    }, 1);
}

function easeInOut(time, power) {
    if (time < 0.5) {
        return 0.5 * Math.pow(2 * time, power);
    } else {
        return 0.5 * (2 - Math.pow(2 * (1 - time), power));
    }
}