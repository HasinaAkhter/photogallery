$('.para').css('display' , 'none').fadeIn(1600);
$('img').css('display' , 'none').fadeIn(1600);
//update copyright info
//const copy = document.querySelector('footer p');
//copy.innerHTML = '&copy; www.phtogallery.hasinaakhter.com 2017-2018 All rights reserved.';
//update copyright info dynamically
const date = new Date().getFullYear();
document.getElementById("year").innerHTML = date;
