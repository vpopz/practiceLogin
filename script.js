var ipn =document.getElementById('inputName');
var na  =document.getElementById('nameAlert');
var ipp =document.getElementById('inputNum');
var pa  =document.getElementById('phoneAlert');
var ipw =document.getElementById('inputPass');
var pwa =document.getElementById('passwordAlert');
var numRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var pasRegex = /^([A-Za-z0-9]){8,20}$/;
var nameregex=/^([A-Za-z]){4,20}$/;
var ba  =document.getElementById('buttonAlert')



function nameValid(){
    if(!ipn.value.match(nameregex)){
        na.innerHTML='Invalid format :Enter alphabets alone';
        na.style.color='red';
        return false;
    }else{
        na.innerHTML="valid";
        na.style.color='green';
        return true;
    };
};

function numValid(){
   if(!ipp.value.match(numRegex)){
        pa.innerHTML="Invalid format:Enter numbers alone";
        pa.style.color='red';
        return false;
    }else{
        pa.innerHTML="valid";
        pa.style.color='green';
        return true;
    };
};

function passValid(){
    if(!ipw.value.match(pasRegex)){
        pwa.innerHTML="invalid format:Enter alphabets and numbers alone";
        pwa.style.color='red';
        return false;
    }else{
        pwa.innerHTML="valid format";
        pwa.style.color='green';
        return true;
    };
};

function combineValid(){
    if(!nameValid() || !numValid() ||!passValid()){
ba.innerHTML='Invalid data';
ba.style.color='green';
return false;
    }else{
        return true;
    }
}