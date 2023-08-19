document.getElementById('btn2').addEventListener('click',function()
{
    var a1=xx('inp2');
    if(isNaN(a1))
    {
        alert('PLease Provide a Valid Amount');
        return;
    }
    var a2=yy('amn1');
    a2+=a1;
    zz('amn1',a2);

    var a3=yy('amn3');
    a3+=a1;
    zz('amn3',a3);
});

document.getElementById('btn3').addEventListener('click',function()
{
    var a1=xx('inp3');
    if(isNaN(a1))
    {
        alert('PLease Provide a Valid Amount');
        return;
    }
    var a2=yy('amn2');
    var a3=yy('amn3');
    if(a1>a3)
    {
        alert('Insufficient Balance');
        return;
    }
    a2+=a1;
    a3-=a1;
    zz('amn2',a2);
    zz('amn3',a3);

});