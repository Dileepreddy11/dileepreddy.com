// Sentence 
const jobTitles = ["Student", "Designer", "Developer", "Writer", "Artist", "Explorer"];
    let index = 0;
 function changeJobTitle() {
      const jobTitleElement = document.getElementById('dynamicJob');
      jobTitleElement.innerHTML = jobTitles[index];
      index = (index + 1) % jobTitles.length;
    }
    setInterval(changeJobTitle, 400);
    // i
    function toggleInfo() {
      var infoContent123 = document.getElementById('infoContent123');
      infoContent123.style.display = (infoContent123.style.display === 'block') ? 'none' : 'block';
    }

// Resume
document.getElementById("viewResumeButton").addEventListener("click", function() {
  document.getElementById("resumeImage").style.display = "block";
  document.getElementById("viewResumeButton").style.display = "none";
  document.getElementById("closeResumeButton").style.display = "inline-block";
});

document.getElementById("closeResumeButton").addEventListener("click", function() {
  document.getElementById("resumeImage").style.display = "none";
  document.getElementById("viewResumeButton").style.display = "inline-block";
  document.getElementById("closeResumeButton").style.display = "none";
});

// Certificates
const slider=document.getElementById("slider");
let slideIndex=0;
function nextSlide(){
  slideIndex=(slideIndex+1)%slider.children.length;
  updateSlider();
}
function updateSlider(){
  const translateValue= -slideIndex*100+'%';
  slider.style.transition='transform 0.5s ease-out';
  slider.style.transform=`translate(${translateValue})`;
  if(slideIndex===slider.children.length-1){
    setTimeout(()=> {
      slideIndex=0;
      slider.style.transition='transform 0.5s ease-in-out';
      updateSlider();
    },500);
  }
}
setInterval(nextSlide,2000);

// Invite
document.getElementById("shareButton").onclick=function(){
  if(navigator.share){
    navigator.share({
       title:"Portfolio",
       text:"Hello, I am Dileep. We are here to provide the best and free web development courses and we are always here to add the respective documents to get downloaded.Please Support Us.Thanks in advance.",
       url:"https://dileepreddy11.github.io/dileepreddy.com/"
    })
    .then(()=> console.log("Shared Successfully"))
    .catch((error)=>console.error("Error Sharing:", error));
  }else{
    alert("Sharing not supported on this device.");
  }
  };
  

 function showQR(){
  var qrDiv= document.getElementById('qrCode');
  qrDiv.style.display='block';
 }
 function hideQR(){
  var qrDiv= document.getElementById('qrCode');
  qrDiv.style.display='none';
 }
 function toggleQR(){
  var qrDiv=  document.getElementById('qrCode');
  if(qrDiv.style.display==='none'){
  qrDiv.style.display='block';
 }
 else{
  qrDiv.style.display='none'
 }
}

// Donate
function openUPIApp(app, vpa, amount, event){
  event.preventDefault();
  var upiLink='upi://' + vpa + '?am=' + amount;
  window.location.href= upiLink;
}

function copyToClipboard(upiId){
   var tempInput= document.createElement('input');
   tempInput.value=upiId;
   document.body.appendChild(tempInput);
   tempInpu.select();
   document.execCommand('copy');
   document.body.removeChild(tempInput);
   alert('UPI ID copied to clipboard. You can now paste it in your UPI payment app to begin your payment with secure. thanks from Dileep team.')
}
// Services
function downloadFile(){
  var downloadLink=document.getElementById('downloadLink');
  downloadLink.style.display='block';
  downloadLink.click();
  downloadLink.style.display='none';
}