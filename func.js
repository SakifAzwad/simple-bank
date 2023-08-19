function xx(input)
{
    var p=document.getElementById(input).value;
    p=parseFloat(p);
    document.getElementById(input).value="";
    return p;
}

function yy(input)
{
    var p=document.getElementById(input).innerText;
    p=parseFloat(p);
    return p;
}
function zz(input,value)
{
    document.getElementById(input).innerText=value;
}
