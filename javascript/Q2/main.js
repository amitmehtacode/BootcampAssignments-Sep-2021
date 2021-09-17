function isplan(str){
    str = str.replace(/\W/g, '').toLowerCase();
    return(str == str.split('').reverse().join(''));
}
document.write(isplan('amit'));