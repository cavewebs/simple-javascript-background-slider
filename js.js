var imageID=0;
function changeimage(every_seconds){
    var imgarray = new Array("bg.jpg", "forestbridge.jpg", "desert.jpg");  
        var spot = Math.floor((Math.random() * 2) + 1);  
        var rl=imgarray[spot];
    //change the image
    if(!imageID){
        document.getElementsByTagName("body")[0].style.backgroundImage = "url("+"www.all-freeware.com/images/full/38943-nice_feathers_free_screensaver_desktop_screen_savers__nature.jpeg"+")";
        imageID++;
    }
    else{if(imageID==1){
        document.getElementsByTagName("body")[0].style.backgroundImage = "url("+"http://www.hickerphoto.com/data/media/186/flower-bouquet-nice_12128.jpg"+")";
        imageID++;
    }else{if(imageID==2){
        document.getElementsByTagName("body")[0].style.backgroundImage = "url("+"http://www.photos.a-vsp.com/fotodb/14_green_cones.jpg"+")";
        imageID=0;
    }}}
    //call same function again for x of seconds
    setTimeout("changeimage("+every_seconds+")",((every_seconds)*1000));
}
