// Owl carousel
function startCarousel(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        dots: false,
        center: true,
        mouseDrag: false,
        mergeFit: true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:4
            },
            1300:{
                items:5
            },
            1800:{
                items:6
            },
            2200:{
                items:7
            }
        }
    })

    var owl = $('.owl-carousel');
    owl.owlCarousel();
    // Go to the next item
    $('.nxt-btn-owl').click(function() {
        owl.trigger('next.owl.carousel');
    })
    // Go to the previous item
    $('.prev-btn-owl').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })
}

class Movie{
    constructor(title, img, bgImg, time, age, release, twoD, threeD, fourDX, IMAX, DBOX, VIP, filter){
        this.title = title;
        this.img = img;
        this.bgImg = bgImg;
        this.time = time;
        this.age = age;
        this.release = release;
        this.twoD = twoD;
        this.threeD = threeD;
        this.fourDX = fourDX;
        this.IMAX = IMAX;
        this.DBOX = DBOX;
        this.VIP = VIP;
        this.filter = filter;
    }
}

var movies=[];
movies.push(new Movie("Ant-Man And The Wasp", "img/movie-poster/ant-man-and-the-wasp.jpg","img/blur/ant-man-2.jpg","2 HR 5 MIN","12A","July 4", "y", "y", "y", "y", "y", "y", "n"));
movies.push(new Movie("Incredibles 2", "img/movie-poster/incredibles-2.jpg","img/blur/incredibles-2.jpg","2 HR 5 MIN","12A","July 13", "y", "y", "y", "y", "y", "y", "n"));
movies.push(new Movie("Jurassic World: Fallen Kingdom", "img/movie-poster/jurassic-world.jpg","img/blur/jurassic-world-2.jpg","2 HR 10 MIN","12A","June 6", "y", "y", "y", "y", "y", "y", "n"));
movies.push(new Movie("The Meg", "img/movie-poster/the-meg.jpg","img/blur/the-meg.jpg","1 HR 52 MIN","12A","August 10", "y", "y", "n", "n", "n", "y", "n"));
movies.push(new Movie("Christopher Robin", "img/movie-poster/christopher-robin.jpg","img/blur/christopher-robin.jpg","1 HR 43 MIN","PG","August 17", "y", "y", "y", "n", "n", "y", "n"));
movies.push(new Movie("Hotel Transylvania 3", "img/movie-poster/hotel-transelvanyia.jpg","img/blur/hotel-3.jpg","1 HR 37 MIN","PG","July 27", "y", "y", "n", "y", "y", "n", "n"));
movies.push(new Movie("The Equalizer 2", "img/movie-poster/the-equalizer.jpg","img/blur/the-equalizer-2.jpg","2 HR 12 MIN","15","August 24", "y", "y", "y", "y", "y", "y", "n"));
movies.push(new Movie("BlackKKlansman", "img/movie-poster/blackkklansman.jpg","img/blur/blackkklansman.jpg","2 HR 16 MIN","15","August 24", "y", "n", "n", "n", "n", "n", "n"));
movies.push(new Movie("Unfriended: Dark Web", "img/movie-poster/dark-web.jpg","img/blur/unfriended-2.jpg","1 HR 33 MIN","15","August 10", "y", "y", "n", "n", "n", "n", "n"));
movies.push(new Movie("Marvel Studios 10th: The Avengers", "img/movie-poster/avengers.jpg","img/blur/the-avengers.jpg","2 HR 23 MIN","12A","August 30", "y", "y", "n", "y", "n", "y", "n"));
movies.push(new Movie("Marvel Studios 10th: Captain America: Civil War", "img/movie-poster/avengers-civil-war.jpg","img/blur/avengers-civil-war.jpg","2 HR 30 MIN","12A","August 30", "y", "y", "n", "y", "n", "y", "n"));
movies.push(new Movie("Marvel Studios 10th: Avengers: Infinity War", "img/movie-poster/avengers-iw.jpg","img/blur/avengers-iw.jpg","2 HR 30 MIN","12A","August 30", "y", "y", "n", "y", "n", "y", "n"));
movies.push(new Movie("Marvel Studios 10th: Guardians of the Galaxy Vol. 2", "img/movie-poster/guardians-2.jpg","img/blur/guardians-2.jpg","2 HR 30 MIN","12A","August 30", "y", "y", "n", "y", "n", "y", "n"));

//background change
var bgArr=[];
function getBgArr(){
    bgArr = movies.filter(function(movie){
        if(movie.filter === "n"){
            return true;
        }
        return false;
    })
    return bgArr;
}
bgArr = getBgArr();

var bgNum = 0;

$('.nxt-btn-owl').click(function(){
    getBgArr();
    bgNum = bgNum + 1;
    bgNum = bgNum % bgArr.length;
    $(".whats-on").css("background-image", 'url(' + bgArr[bgNum].bgImg + ')');
})

$('.prev-btn-owl').click(function(){
    getBgArr();
    if(bgNum ===0){
        bgNum = bgArr.length;
    }
    bgNum = bgNum - 1;
    $(".whats-on").css("background-image", 'url(' + bgArr[bgNum].bgImg + ')');
})

//filter movies
function printResults(movie){
    $("<div class='item'><div class='movie-item'><div class='movie-poster-owl'><img id='img' src='"+movie.img+"'></div><div class='movie-title-owl'><h3>"+movie.title+"</h3></div><div class='movie-info-owl'><span>"+movie.time+" | "+movie.age+"</span></div><div class='movie-release-owl'><span>Release "+movie.release+"</span></div><div class='get-tickets-owl'><button class='btn-owl'>Get Tickets</button></div></div</div>").appendTo(".owl-carousel");
}

$(".sort-btn").on("click", function(){
    $(".owl-container").empty();
    $("<div class='owl-carousel owl-theme'></div>").appendTo(".owl-container");
    var btn = $(this).val();
    var filtered = [];
    movies.forEach(function(movie){
        movie.filter = "y";
        if(btn === "2D"){
            if(movie.twoD === "y"){
                movie.filter = "n";
                printResults(movie);
            }
        }else if(btn==="3D"){
            if(movie.threeD == "y"){
                movie.filter = "n";
                printResults(movie);
            }
        }else if(btn==="4DX"){
            if(movie.fourDX == "y"){
                movie.filter = "n";
                printResults(movie);
            }
        }else if(btn==="IMAX"){
            if(movie.IMAX == "y"){
                movie.filter = "n";
                printResults(movie);
            }
        }else if(btn==="DBOX"){
            if(movie.DBOX == "y"){
                movie.filter = "n";
                printResults(movie);
            }
        }else if(btn==="VIP"){
            if(movie.VIP == "y"){
                movie.filter = "n";
                printResults(movie);
            }
        }else if(btn==="All"){
            movie.filter = "n";
            printResults(movie);
        }
    })
    startCarousel();
})

//search bar
$(".search").on("click", function(){
    var searchBox = $(".search-box");
    var navBar = $("nav");
    navBar.css("margin-top", "10px");
    searchBox.slideDown(200);
})

$(".close-icon").on("click", function(){
    var searchBox = $(".search-box");
    var navBar = $("nav");
    navBar.css("margin-top", "0");
    searchBox.slideUp(200);
})

$(".search-box").on("click", function(e){
    e.stopPropagation();
})

//quick book
$(".quick-book").on("click", function(){
    var menu = $(".menu-sub");
    var menuArrow = $(".quick-book-txt");
    if(menu.hasClass("active")){
        menu.hide();
        menu.removeClass("active");
        menuArrow.removeClass("active");

    }else{
        menu.slideDown(300);
        menu.addClass("active");
        menuArrow.addClass("active");
    }
})

//drop down slide effect
$(".quick-book-items").on("click", function(){
    var allMenu = $(".quick-book-menu");
    var menu = $("div:nth-child(3)", this);
    var inactiveMenu = $("div:nth-child(2)", this);
    if(menu.hasClass("active")){
        menu.hide();
        menu.removeClass("active");
    }else{
        //hides any drop downs currently open
        allMenu.hide()
        allMenu.removeClass("active");
        //shows the drop down that has been clicked
        menu.slideDown(300);
        menu.addClass("active");
    }
    //if menu is currently inactive, it won't slide down
    if(inactiveMenu.hasClass("inactive")){
        inactiveMenu.next().hide();
        inactiveMenu.next().removeClass("active");
    }
})

//rotate drop down arrow when clicked
$(".quick-book-items").on("click", function(){
    var allDropDown = $(".quick-book-items-drop-down");
    var thisDropDown = $("div:nth-child(2)", this);
    if(thisDropDown.hasClass("active")){
        thisDropDown.removeClass("active");
    }else{
        allDropDown.removeClass("active");
        thisDropDown.addClass("active");
    }
    if(thisDropDown.hasClass("inactive")){
        thisDropDown.removeClass("active");
    }
})

//sub menu closes when clicked outside
$("body").click(function (e) {
    //e.stopPropagation();
    var container = $(".quick-book");
    //check if the clicked area is dropDown or not
    if (container.has(e.target).length === 0) {
        $('.menu-sub').hide();
        $('.menu-sub').removeClass("active");
        $(".quick-book-txt").removeClass("active");
    }
})

//stops the sub menu or drop down lists from closing when clicked inside
$(".menu-sub").on("click", function(e){
    e.stopPropagation();
})

$(".quick-book").on("click", function(e){
    e.stopPropagation();
})

$(".quick-book-menu").on("click", function(e){
    e.stopPropagation();
})

//prevents body from scrolling when scrolling inside drop down menu
$('.quick-book-menu').on('DOMMouseScroll mousewheel', function(ev) {
    var $this = $(this),
        scrollTop = this.scrollTop,
        scrollHeight = this.scrollHeight,
        height = $this.height(),
        delta = (ev.type == 'DOMMouseScroll' ?
                 ev.originalEvent.detail * -40 :
                 ev.originalEvent.wheelDelta),
        up = delta > 0;
    var prevent = function() {
        ev.stopPropagation();
        ev.preventDefault();
        ev.returnValue = false;
        return false;
    }
    if (!up && -delta > scrollHeight - height - scrollTop) {
        //scrolling down, but this will take us past the bottom.
        $this.scrollTop(scrollHeight);
        return prevent();
    } else if (up && delta > scrollTop) {
        //scrolling up, but this will take us past the top.
        $this.scrollTop(0);
        return prevent();
    }
})

//search the menu items with a search box
$(".drop-down-search").keyup(function () {
    var filter = $(this).val();
    var parent = $(this).offsetParent();
    var li = $("ul li", parent);
    li.each(function () {
        if ($(this).text().search(new RegExp(filter, "i")) < 0) {
            $(this).hide();
        } else {
            $(this).show();
        }
    })
})

//get today's date
var today = new Date();

var dayArr = ["Sun","Mon","Tue","Wed","Thu", "Fri","Sat"];
var monthArr = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

var day = today.getDay();
var date = today.getDate();
var month = monthArr[today.getMonth()];

//add day to previous day
var day1 = ((dayArr[(today.getDay()) % 7])+" "+date+" "+month);
var day2 = ((dayArr[(today.getDay() + 1) % 7])+" "+(date+1)+" "+month);
var day3 = ((dayArr[(today.getDay() + 2) % 7])+" "+(date+2)+" "+month);
var day4 = ((dayArr[(today.getDay() + 3) % 7])+" "+(date+3)+" "+month);
var day5 = ((dayArr[(today.getDay() + 4) % 7])+" "+(date+4)+" "+month);
var day6 = ((dayArr[(today.getDay() + 5) % 7])+" "+(date+5)+" "+month);
var day7 = ((dayArr[(today.getDay() + 6) % 7])+" "+(date+6)+" "+month);

//print the dates in the date menu
$(document).ready(function(){
    $(".li-today").html(day1);
    $(".li-tomorrow").html(day2);
    $( "<li>"+day3+"</li>" ).appendTo(".date-select");
    $( "<li>"+day4+"</li>" ).appendTo(".date-select");
    $( "<li>"+day5+"</li>" ).appendTo(".date-select");
    $( "<li>"+day6+"</li>" ).appendTo(".date-select");
    $( "<li>"+day7+"</li>" ).appendTo(".date-select");
    //startCarousel();
})

//show selected menu item in the drop down menu
var venue = "";
var film = "";
var date = "";
var time = "";

function menuClose(){
    var menu = $(".quick-book-menu");
    var dropDown = $(".quick-book-items-drop-down");
    menu.hide();
    menu.removeClass("active");
    dropDown.removeClass("active");
}

$(".venue-select li").on("click", function(e){
    venue = $(this).text();
    var dropDownTxt = $("#venue-drop-down");
    dropDownTxt.text(venue);
    menuClose();
})

$(".film-select li").on("click", function(e){
    film = $(this).text();
    var dropDownTxt = $("#film-drop-down");
    dropDownTxt.text(film);
    menuClose();
})

$(".date-select").on("click","li", function(e){
    date = $(this).text();
    var dropDownTxt = $("#date-drop-down");
    dropDownTxt.text(date);
    menuClose();
})

$(".time-select").on("click","li", function(e){
    time = $(this).text();
    var dropDownTxt = $("#time-drop-down");
    dropDownTxt.text(time);
    menuClose();
})

//hide & show drop down if a selection has been made
setInterval(function(){
    var venueItem, filmItem, dateItem, timeItem;
    venueItem = $("#quick-book-venue");
    filmItem = $("#quick-book-film");
    dateItem = $("#date-drop-down");
    timeItem = $("#time-drop-down");
    //once a venue & film has been selected, the available date and times can be selected
    if(venue != "" && film != ""){
        dateItem.removeClass("inactive");
        //dateItem.addClass("active");
    }
    //once a film is selected, the available times can be selected
    if(date != ""){
        timeItem.removeClass("inactive");
    }
})

$( document ).ready(function(){
    $("#burger-nav").click(function(){
        $("#resize").toggleClass("active");
    });
    $("#cross-nav").click(function(){
        $("#resize").toggleClass("active");
    })
    $(".sort-btn").on("click", function(){
        $(".sort-btn").removeClass("active");
        $(this).addClass("active");
    })
})

$(document).ready(function(){
    startCarousel();
})
