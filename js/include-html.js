document.addEventListener("DOMContentLoaded",(e)=>{
	const includeHTML = (el,url)=>{
		const xhr = new XMLHttpRequest;
		xhr.addEventListener("readystatechange",()=>{
			if(xhr.readyState!==4) return;
			if(xhr.status >=200 && xhr.status <300){
				el.outerHTML = xhr.responseText;
			} else {
				let message = xhr.statusText || "Error al cargar el archivo, verifica que estes haciendo la petición por http o https";
				el.outerHTML = `<div>Error ${message} </div>`;
			}
		});
		xhr.open("GET",url);
		xhr.setRequestHeader("Content-type","text/html; charset=utf-8");
		xhr.send();
	}
	
	document.querySelectorAll("[data-include]").forEach((el)=>includeHTML(el, el.getAttribute("data-include")));
})