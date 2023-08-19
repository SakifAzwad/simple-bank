document.getElementById('btn1').addEventListener('click',function()
{
    var xx=document.getElementById('inp1').value;
    var yy=document.getElementById('inp2').value;

    if(xx =="simplebank@gmail.com" && yy=="123456")
    {
        window.location.href='second.html';
    }
    else alert('Invalid ID and Password');
});

document.getElementById('btn2').addEventListener('click',function()
{
    var xx=document.getElementById('inp2').value;
    console.log(xx);
});

document.getElementById('btn3').addEventListener('click',function()
{
    var xx=document.getElementById('inp3').value;
    console.log(xx);
});