'use strict'
$(document).ready(function(){
     //   Правий перемикач
    $('.next').click(function(){
        var currentImage = $('.img.curry');                         //Доступ до класів зображ.
        var currentImageIndex = $('.img.curry').index();            //Індект поточного елемента
        var nextImageIndex = currentImageIndex + 1;                 //Перехід праворуч
        var nextImage = $('.img').eq(nextImageIndex);               //Вибираю елемент по індексу
        
        currentImage.fadeOut(1000);                                 //Перехід
        currentImage.removeClass('curry');                          //Видал. попередній елемент
        nextImage.fadeIn(1000);                                     //Перехід
        nextImage.addClass('curry');                                //Додаю клас
        
     // Застос. для того щоб після останнього слайду відразу йшов 1-й
        if(nextImageIndex == ($('.img:last').index()+1)){
            $('.img').eq(0).fadeIn(1000);
            $('.img').eq(0).addClass('curry');
          } 
    });
     
    //    Лівий перемикач
    $('.prev').click(function(){
        var currentImage = $('.img.curry');
        var currentImageIndex = $('.img.curry').index();
        var prevImageIndex = currentImageIndex - 1;
        var prevImage = $('.img').eq(prevImageIndex);
        
        currentImage.fadeOut(1000);
        currentImage.removeClass('curry');
        prevImage.fadeIn(1000);
        prevImage.addClass('curry');
    });
      
});