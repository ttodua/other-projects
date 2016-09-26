
function linkattacheEDIT(){
	var x = document.createElement('div'); x.setAttribute('style','position:fixed;bottom:0px;right:0px;'); x.innerHTML='<a href="https://www.blogger.com/blogger.g?blogID='+ document.querySelector("meta[itemprop='blogId']").getAttribute("content")+ '#allposts">ALL_POSTS</a>';
	document.body.appendChild(x);
} 
  
window.onload=function(){
  linkattacheEDIT();

};
