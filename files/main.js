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
const runinngVid = $('.mainVid iframe' );
const runinngTitle = $('.mainVid h3');


box1.click(function(){
    for (let x of boxesArray){
        if(x === box1){
            box1.css("display","none");
            runinngVid.attr('src',"https://www.youtube.com/embed/rS6cvjFXg9s");
            runinngTitle.html("Cute kitten named Garfield washes its paws and prepares to sleep.")
        }else{
            x.css("display","flex");
        }
    }
    
})

box2.click(function(){
    for (let x of boxesArray){
        if(x === box2){
            box2.css("display","none");
            runinngVid.attr('src',"https://www.youtube.com/embed/BFNekjEgvuk");
            runinngTitle.html("Kitten sleeps sweetly with the Chicken ");
            
        }else{
            x.css("display","flex");
        }
    }
    

})
box3.click(function(){
    for (let x of boxesArray){
        if(x === box3){
           box3.css("display","none");
            runinngVid.attr('src',"https://www.youtube.com/embed/te1fHMaw4UY") ;
            runinngTitle.html("White kitten and white tiny bunnies 🐰 | It's so Сute! 🥰");
            
        }else{
            x.css("display","flex");
        }
    }
    
})

box4.click(function(){
    for (let x of boxesArray){
        if(x === box4){
            box4.css("display","none");
            runinngVid.attr('src',"https://www.youtube.com/embed/MFyUZqSknvw");
            runinngTitle.html("Kittens meets and walk with a cute white bunny");
            
        }else{
            x.css("display","flex");
        }
    }
    
})
box5.click(function(){
    for (let x of boxesArray){
        if(x === box5){
            box5.css("display","none");
            runinngVid.attr('src',"https://www.youtube.com/embed/hlajmIPiphk");
            runinngTitle.html("Mom Cat playing and talking to her Cute Meowing baby Kittens");
        }else{
            x.css("display","flex");
        }
    }
    
})
box6.click(function(){
    for (let x of boxesArray){
        if(x === box6){
            box6.css("display","none");
            runinngVid.attr('src',"https://www.youtube.com/embed/Cz47GimSxIc") ;
            runinngTitle.html( "Funny Kitten wags its tail like a Puppy");
        }else{
            x.css("display","flex");
        }
    }
    
})
box7.click(function(){
    for (let x of boxesArray){
        if(x === box7){ 
            box7.css("display","none");
            runinngVid.attr('src',"https://www.youtube.com/embed/RmpuhbdnAfQ");
            runinngTitle.html("Kitty Coco and her Sleepy younger brother 🥰");
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
            runinngTitle.html("Kittens walk with a tiny chicken");
        }else{
            x.css("display","flex");
        }
    }
    
})