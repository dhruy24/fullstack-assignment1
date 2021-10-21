

const bars = document.querySelector(".fa-video");
const cross = document.querySelector(".fa-times");
const sidebar = document.querySelector(".sidebar");


bars.addEventListener("click", () => {sidebar.classList.toggle("show-sidebar")});

cross.addEventListener("click", () => {sidebar.classList.remove("show-sidebar")});






documnet.document.querySelector("#pdf").addEventListner("click",function(){
		
		const reader = new FileReader();
		
		reader.addEventListner("load",()=>{
		
		localStorage.setItem("recentpdf",reader.result);
		
		});
		
		reader.readAsDataURL(this.files[0]);
		
		});
		
		const pdfurl = localStorage.getItem("recentpdf");
		 function showpdf(){
		 
		 document.querySelector("pdf-frame").setAttribute("src",pdfurl);
		 
		 }