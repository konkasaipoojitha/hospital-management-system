function showHome(){
   document.querySelector(".HomePage").style.display = "block";
   document.querySelector(".loginpage").style.display = "none";
   document.querySelector(".patientform").style.display="none";
   document.querySelector(".recompage").style.display="none";

}
function bmical()
{
   let a=document.querySelector(".weig").value;
   let b=document.querySelector(".heig").value;
   let c1=b*0.3048;
   let c=a/(c1*c1);
   document.querySelector(".dmi").innerText=c;
}
function showpatientdetails()
{
   document.querySelector(".HomePage").style.display="none";
   document.querySelector(".patientform").style.display="block";
}
function back()
{
   document.querySelector(".loginpage").style.display="block";
   document.querySelector(".HomePage").style.display="none";
}
function back1()
{
   document.querySelector(".patientform").style.display="none";
   document.querySelector(".HomePage").style.display="block";
}
function recommendations()
{
   document.querySelector(".patientform").style.display="none";
   document.querySelector(".recompage").style.display="block";
}
function medicinedetails()
{
   document.querySelector(".medicine").style.display="block";
   document.querySelector(".medicine").innerText="Dolo 650";
}
function food()
{
   document.querySelector(".food").style.display="block";
   document.querySelector(".food").innerText="fruits and nuts";
}
function dosage()
{
   document.querySelector(".dosage").style.display="block";
   document.querySelector(".dosage").innerText="2ml";
}
function howtouse()
{
   document.querySelector(".howtouse").style.display="block";
   document.querySelector(".howtouse").innerText="After meals";
}
function sideeffects()
{
    document.querySelector(".sideeffects").style.display="block";
   document.querySelector(".sideeffects").innerText="ellergy";
}
function downloadpresc()
{
   window.print();
}
function alarm()
{
   setInterval(()=>{
      alert("Time to take medicine")
   },4000);
}function back2()
{
   document.querySelector(".recompage").style.display="none";
   document.querySelector(".patientform").style.display="block";
}
function doctorconsult()
{
   document.querySelector(".doctorconsult").style.display="block";
   document.querySelector(".recompage").style.display="none"; 
}