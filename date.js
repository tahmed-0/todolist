//jshint esversion:6

exports.getDate = function () {


//anouns function it use to be getDate()




const today = new Date();

const options = {
    weekday: 'long',
    day: 'numeric',
    month : 'long'

};

return today.toLocaleDateString("en-US", options);


}

exports.getDay = function() {



    const today = new Date();
    
    const options = {
        weekday: 'long',
    
    };
    
    return today.toLocaleDateString("en-US", options);
   
    
    }

    exports.getMonth = function() {



    const today = new Date();
    
    const options = {
        month: 'long',
    
    };
    
    return today.toLocaleDateString("en-US", options);

    
    }
