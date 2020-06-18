function sub(){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;

    if (n1 == ""){
        ons.notification.alert('The First Number is Empty ');
    }else{
        var r = Number(n1) * Number(n2) ;
        ons.notification.alert('Result is ' + r);
        ons.notification.toast('Result is ' + r,{timeout:5000});
        document.getElementById('n1').value = '';
        document.getElementById('n2').value = '';
    }
   
}
function add(){
    var n1 = document.getElementById('n1').value;
    var n2 = document.getElementById('n2').value;

    if (n1 == ""){
        ons.notification.alert('The First Number is Empty ');
    }else{
        var r = Number(n1) + Number(n2) ;
        ons.notification.alert('Result is ' + r);
        ons.notification.toast('Result is ' + r,{timeout:5000});
        document.getElementById('n1').value = '';
        document.getElementById('n2').value = '';
    }
   
}
function clearinput(){
    document.getElementById('n1').value = '';
    document.getElementById('n2').value = '';

}
