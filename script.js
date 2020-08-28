const myPortolio ={};

myPortolio.inputEmpty = function(){
    $('input').empty();
}

myPortolio.eventListeners = function () {
    $('form').on('submit', function(){
        myPortolio.inputEmpty();

            
            
})

} 
    

//Init Method
myPortolio.init = function() {
    myPortolio.eventListeners();
} 

//Document Ready
$(function(){
    myPortolio.init();
})
