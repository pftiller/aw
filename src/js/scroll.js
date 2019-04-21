

// document.addEventListener("DOMContentLoaded", function(event) { 
//     let headerHeight = document.querySelector('header').clientHeight;
//     window.addEventListener('scroll', function(e) {
//         didScroll = true;
//     });
//     setInterval(function() {
//         if (didScroll) {
//             hasScrolled();
//             didScroll = false;
//         }
//     }, 250);
    
//     function hasScrolled() {

//         let st = window.scrollY;
//         let headerClass = document.querySelector('header').classList;
//         if(Math.abs(lastScrollTop - st) <= delta)
//         return;
    

//     if (st > lastScrollTop && st > headerHeight){
//         headerClass.remove('header-down');
//         headerClass.add('header-up');
//     } else {

//         if(st + window.innerHeight < document.height) {
//             headerClass.remove('header-up');
//             headerClass.add('header-down');
//         }
//     }
    
//     lastScrollTop = st;
//     }
//   });