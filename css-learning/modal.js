	var modal=document.getElementById('myModal');
	var img=document.getElementById('myImg');
	var modalImg=document.getElementById('img01');
	var cap=document.getElementById('caption');


	img.onclick=function(){
		modal.style.display="block";
		modalImg.src=this.src;
		cap.innerHTML=this.alt;
	}

	var span=document.getElementsByClassName('close')[0];
	span.onclick = function(){
		modal.style.display="none";
	}
