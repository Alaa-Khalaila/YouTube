import {videos} from './data.js';
const box = $('.box');
const box1 = $('#box1');
const box2 = $('#box2');
const box3 = $('#box3');
const box4 = $('#box4');
const box5 = $('#box5');
const box6 = $('#box6');
const box7 = $('#box7');
const box8 = $('#box8');


let boxesArray = [box1,box2,box3,box4,box5,box6,box7,box8]
const runinngVid = $('.mainVid iframe' )

box1.click(function(){
    for (let x of boxesArray){
        if(x === box1){
            box1.css("display","none");
            runinngVid.attr('src',"https://www.youtube.com/embed/rS6cvjFXg9s");
        }else{
            x.css("display","flex");
        }
    }
    
})

box2.click(function(){
    for (let x of boxesArray){
        if(x === box2){
            box2.css("display","none")
            runinngVid.attr('src',"https://www.youtube.com/embed/BFNekjEgvuk")
            
        }else{
            x.css("display","flex");
        }
    }
    

})
box3.click(function(){
    for (let x of boxesArray){
        if(x === box3){
           box3.css("display","none")
            runinngVid.attr('src',"https://www.youtube.com/embed/te1fHMaw4UY") 
            
        }else{
            x.css("display","flex");
        }
    }
    
})

box4.click(function(){
    for (let x of boxesArray){
        if(x === box4){
            box4.css("display","none")
            runinngVid.attr('src',"https://www.youtube.com/embed/MFyUZqSknvw")
            
        }else{
            x.css("display","flex");
        }
    }
    
})
box5.click(function(){
    for (let x of boxesArray){
        if(x === box5){
            box5.css("display","none")
            runinngVid.attr('src',"https://www.youtube.com/embed/hlajmIPiphk")
        }else{
            x.css("display","flex");
        }
    }
    
})
box6.click(function(){
    for (let x of boxesArray){
        if(x === box6){
            box6.css("display","none")
            runinngVid.attr('src',"https://www.youtube.com/embed/Cz47GimSxIc")  
        }else{
            x.css("display","flex");
        }
    }
    
})
box7.click(function(){
    for (let x of boxesArray){
        if(x === box7){ 
            box7.css("display","none")
            runinngVid.attr('src',"https://www.youtube.com/embed/RmpuhbdnAfQ")
        }else{
            x.css("display","flex");
        }
    }
    
})
box8.click(function(){
    for (let x of boxesArray){
        if(x === box8){
            box8.css("display","none");
            runinngVid.attr('src',"https://www.youtube.com/embed/7yLxxyzGiko");
        }else{
            x.css("display","flex");
        }
    }
    
})