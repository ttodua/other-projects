
function linkattacheEDIT(){
	var x = document.createElement('div'); x.setAttribute('style','position:fixed;bottom:0px;right:0px;'); x.innerHTML='<a href="https://www.blogger.com/blogger.g?blogID='+ document.querySelector("meta[itemprop='blogId']").getAttribute("content")+ '#allposts">ALL_POSTS</a>';
	document.body.appendChild(x);
} 
  
//to check whenever element is loaded
function when_element_is_loaded(Id_or_class,functionname){	
	Id_or_class=Id_or_class.trim(); var eName = Id_or_class.substr(1);  if('#'==Id_or_class.charAt(0)){var x=document.getElementById(eName);} else{var x=document.getElementsByClassName(eName)[0];}  
	if(x) { functionname(); }	 else { setTimeout(when_element_is_loaded, 100,  Id_or_class, functionname); } 
}


function qart_filtr(m) 
	{
		var m=m.replace(/a/g,'ა');	var m=m.replace(/b/g,'ბ');	var m=m.replace(/g/g,'გ');	var m=m.replace(/d/g,'დ');
		var m=m.replace(/e/g,'ე');	var m=m.replace(/v/g,'ვ');	var m=m.replace(/z/g,'ზ');	var m=m.replace(/T/g,'თ');
		var m=m.replace(/i/g,'ი');	var m=m.replace(/k/g,'კ');	var m=m.replace(/l/g,'ლ');	var m=m.replace(/m/g,'მ');
		var m=m.replace(/n/g,'ნ');	var m=m.replace(/o/g,'ო');	var m=m.replace(/p/g,'პ');	var m=m.replace(/J/g,'ჟ');
		var m=m.replace(/r/g,'რ');	var m=m.replace(/s/g,'ს');	var m=m.replace(/t/g,'ტ');	var m=m.replace(/u/g,'უ');
		var m=m.replace(/f/g,'ფ');	var m=m.replace(/q/g,'ქ');	var m=m.replace(/R/g,'ღ');	var m=m.replace(/y/g,'ყ');
		var m=m.replace(/S/g,'შ');	var m=m.replace(/C/g,'ჩ');	var m=m.replace(/c/g,'ც');	var m=m.replace(/Z/g,'ძ');
		var m=m.replace(/w/g,'წ');	var m=m.replace(/W/g,'ჭ');	var m=m.replace(/x/g,'ხ');	var m=m.replace(/j/g,'ჯ');
		var m=m.replace(/h/g,'ჰ');
		return m;
	}
	function rus_filtr(m) 
	{
		var m=m.replace(/ih/g,'ич(ან й)');
		var m=m.replace(/iа/g,'иа(ან я)');
		var m=m.replace(/a/g,'а');	var m=m.replace(/b/g,'б');	var m=m.replace(/g/g,'г');	var m=m.replace(/d/g,'д');
		var m=m.replace(/e/g,'е(ან э)');	var m=m.replace(/v/g,'в');	var m=m.replace(/z/g,'з');	var m=m.replace(/T/g,'Т');
		var m=m.replace(/i/g,'и');	var m=m.replace(/k/g,'к');	var m=m.replace(/l/g,'л');	var m=m.replace(/m/g,'м');
		var m=m.replace(/n/g,'н');	var m=m.replace(/o/g,'о');	var m=m.replace(/p/g,'п');	var m=m.replace(/J/g,'Й(ან Ж)');
		var m=m.replace(/r/g,'р');	var m=m.replace(/s/g,'с');	var m=m.replace(/t/g,'т');	var m=m.replace(/u/g,'у');
		var m=m.replace(/f/g,'ф');	var m=m.replace(/q/g,'я');	var m=m.replace(/R/g,'Р');	var m=m.replace(/y/g,'ы');
		var m=m.replace(/S/g,'С(ან ш)');	var m=m.replace(/C/g,'Ц(ან ч)');	var m=m.replace(/c/g,'ц');	var m=m.replace(/Z/g,'З(ან дь)');
		var m=m.replace(/w/g,'ш(ან ъ-ь)');	var m=m.replace(/W/g,'Ш(ან ъ-ь)');	var m=m.replace(/x/g,'х');	var m=m.replace(/j/g,'й');
		var m=m.replace(/h/g,'ч');
		return m;
	}


//######################## simple POPUP  ############################# https://github.com/ttodua/useful-javascript/ ###############
function show_my_popup(TEXTorID,AdditionalStyles='' ){
		TEXTorID=TEXTorID.trim(); var FirstChar= TEXTorID.charAt(0); var eName = TEXTorID.substr(1); if ('#'==FirstChar || '.'==FirstChar){	if('#'==FirstChar){var x=document.getElementById(eName);} else{var x=document.getElementsByClassName(eName)[0];}} else { var x=document.createElement('div');x.innerHTML=TEXTorID;} var randm_id=Math.floor((Math.random()*100000000));
	var DivAA = document.createElement('div');    DivAA.id = "blkBackgr_"+randm_id;  DivAA.className = "MyJsBackg";   DivAA.setAttribute("style", 'background:black; height:5000px; left:0px; opacity:0.9; position:fixed; top:0px; width:100%; z-index:9599;'); document.body.appendChild(DivAA);
	var DivBB = document.createElement('div');    DivBB.id = 'popupp_'+randm_id;     DivBB.className = "MyJsPopup";   DivBB.setAttribute("style",'background-color:white; border:6px solid white; border-radius:10px; display:block; min-height:1%; min-width:350px; width:auto; overflow:auto; max-height:80%; max-width:800px; padding:15px; position:fixed; text-align:left; top:10%; z-index:9599; left:0px; right:0px; margin-left:auto; margin-right:auto; width:80%;'+ AdditionalStyles); 	DivBB.innerHTML = '<div style="background-color:#C0BCBF; border-radius:55px; padding:5px; font-family:arial; float:right; font-weight:700; margin:-15px -10px 0px 0px;"><a href="javascript:my_popup_closee('+randm_id+');" style="display:block;margin:-5px 0 0 0;font-size:1.6em;">x</a></div>'; document.body.appendChild(DivBB);z=x.cloneNode(true);DivBB.appendChild(z); if(z.style.display=="none"){z.style.display="block";}       }               function my_popup_closee(RandomIDD) { var x=document.getElementById("blkBackgr_"+RandomIDD); x.parentNode.removeChild(x);      var x=document.getElementById('popupp_'+RandomIDD); x.parentNode.removeChild(x);
}
//#####################################################################################################################################

	


	//es funqcia sul boloshi itvirteba
	function hide_popuping_divs()
	{
		var elmnts = document.getElementsByClassName("hidedd_pop");
		var index;
		for (index = 0; index < elmnts.length; ++index) 
		{
			if (index < 9999 )
			{
			elmnts[index].className = elmnts[index].className + " hidden_pops";
			//elmnts[index].style.display= "none";
			}
		}
	}	

	
		

    function savefilee(a, filename, content) 
     {
        contentType =  'data:application/octet-stream,';
        uriContent = contentType + encodeURIComponent(content);
        a.setAttribute('href', uriContent);
        a.setAttribute('download', filename);
      }

	function toggle_visibility(id)
	{
		var e = document.getElementById(id);
		if(e.style.display == 'block')
		  e.style.display = 'none';
		else
		  e.style.display = 'block';
	}
      function MyFilesave(a, filename, content) {
        contentType =  'data:application/octet-stream,';
        uriContent = contentType + encodeURIComponent(content);
        a.setAttribute('href', uriContent);
        a.setAttribute('download', filename);
      }



function GetTopGe(domain,id,targetDiv){
	if (domain==window.location.hostname){
	  var div=document.getElementById(targetDiv) || document.body;
	  div.insertAdjacentHTML("beforeend", "<!-- TOP.GE COUNTER CODE --><div class='topgebanner' style='text-align:right;'><script src='//counter.top.ge/cgi-bin/cod?100+"+id+"' type='text/javascript'/><noscript><a href='http://counter.top.ge/cgi-bin/showtop?"+id+"' target='_top'><img alt='TOP.GE' border='0' src='//counter.top.ge/cgi-bin/count?ID:"+id+"+JS:false'/></a></noscript></div><!-- / END OF TOP.GE COUNTER CODE -->");
	}
}


	var ele = location.href;
	var curr_urll=ele;
	var homep = 'http://'+location.host;




	// googgleeeeeeeee
	// -- qartuli
	var googl_link1 = homep+'/g.';
	var googl_link2 = homep+'/g-';
	var curr_urll=curr_urll.replace(googl_link1,'');
	var curr_urll=curr_urll.replace(googl_link2,'');
	var curr_urll=curr_urll.replace('?m=1','');

	if ( ele.indexOf(googl_link1) > -1 || ele.indexOf(googl_link2) > -1)
	{
		var sity1 = curr_urll;
		var sity1 = sity1.replace(/&20/g,'+'); 
		var sity1 = sity1.replace(/\./g,'+');
		var sity1 = qart_filtr(sity1);

		document.location="http://www.google.com/m?q="+sity1;
	}
	//--- rusuli
	var googl_link16 = homep+'/gr.';
	var googl_link26 = homep+'/gr-';
	var curr_urll=curr_urll.replace(googl_link16,'');
	var curr_urll=curr_urll.replace(googl_link26,'');
	var curr_urll=curr_urll.replace('?m=1','');

	if ( ele.indexOf(googl_link16) > -1 || ele.indexOf(googl_link26) > -1)
	{
		var r=confirm("ეგრევე თარგმნა(თუარადა ამკრეფ საიტზე გადასვლა)");
			if (r==true)
			{
			var sity16 = curr_urll;
			var sity16 = sity16.replace(/&20/g,'+'); 
			var sity16 = sity16.replace(/\./g,'+');
			var sity16 = rus_filtr(sity16);
			document.location="http://www.google.com/m?q="+sity16;
			}
			else
			{
			document.location="http://www.lexilogos.com/keyboard/russian.htm"; 
			}
		//window.stop();
		//document.execCommand('Stop');
	}



      // sityva 1
      var qartsity_link1 = homep+'/s.';
      var qartsity_link2 = homep+'/s-';
      var curr_urll=curr_urll.replace(qartsity_link1,'');
      var curr_urll=curr_urll.replace(qartsity_link2,'');
      var curr_urll=curr_urll.replace('?m=1','');

      if ( ele.indexOf(qartsity_link1) > -1 || ele.indexOf(qartsity_link2) > -1)
      {
        var sity1 = curr_urll; if ( sity1.indexOf('*') == -1) {sity1=sity1+'*';}
        sity1 = qart_filtr(sity1); 
        document.write('<div style="border:1px;">შედეგებს დაუცადეთ რამდენიმე წამი</div><div style="display:none;">	<form accept-charset="utf-8" action="http://www.nplg.gov.ge/gwdict/index.php" enctype="application/x-www-form-urlencoded" id="gw" method="POST" ><input id="gwq"  name="q" size="28" value="' + sity1 + '" ><select name="d" class="input" style="width:100%" dir="ltr">	<option value="0" >All dictionaries</option><option value="8" selected="selected">ლექსიკონი ქართული</option></select><input name="srch[adv]" type="hidden" value="all"> <input name="srch[by]" type="hidden" value="d"><input name="srch[in]" type="hidden" value="-1">   <input name="a" type="hidden" value="srch"><input name="" type="hidden" value=""><input id="blbl" name="search" type="submit" ></form></div><scr'+'ipt type="text/javascript">window.setTimeout(\'document.forms[0].submit();\',100); </scr'+'ipt>');
      }
	
	// wm.werili
	var weril_sityv = homep+'/wm.';
	var curr_urll=curr_urll.replace(weril_sityv,'');
	var curr_urll=curr_urll.replace('?m=1','');

	if (ele.indexOf(weril_sityv) > -1)
	{
		var sity1 = curr_urll; 
		sity1 = qart_filtr(sity1); 
		document.location="https://www.google.ge/m?q=inurl%3Aorthodoxy.ge%2Ftserili+%22" + sity1 + "%22";
	}








	
		 
		 
		 
	  function hl2(idd, setLocation)
		{

			var elmm= document.getElementById(idd);
			if (elmm)
			{
				if (setLocation) {	location.hash = "#" + idd; }
				if (elmm.style.backgroundColor=='red')
				{
					elmm.style.backgroundColor= 'grey';
				}
				else
				{
					elmm.style.backgroundColor= 'red';
				}
			}
		}

	//es funqcia sul boloshi itvirteba
	function hlight()
	{
		var loc = location.href;
		if (loc.indexOf('#') > -1)
		{
			
			var regExp = /\#(.*)/g;
			var matches = loc.match(regExp);
			if (loc.indexOf('?') > -1)
			{
				var rExp = /(.*)\?/g;
				var matches = matches[0].match(rExp);
			}
			var idddd = matches[0];
				idddd = idddd.replace('#','');
				idddd = idddd.replace('?','');
		if (idddd !=='')
			{
			setInterval(function(){  hl2(idddd,false);  },600);
			}
         
			
		}
	}
	








	var refr= document.referrer;
  if ( false && 
     refr && refr != "" && refr=="http://otaxi.ge"
	   ||
    location.href=="http://www.otaxi.pvt.ge/"
       || 
    location.href=="http://www.otaxi.pvt.ge/#redr"
     ) {	
		var cook_name='siteredirect2d22';
		//var cok_name=document.cookie.cook_name; if (cok_name!=null && cok_name!="" ) */ 
		if ( document.cookie.indexOf(cook_name) < 0)  {
		 var exdate=new Date();
		 exdate.setDate(exdate.getDate() + 1111111);
		 document.cookie=cook_name + "= otaxige_redirect_divv; expires="+exdate.toUTCString();
          window.setTimeout(function(){show_my_popup('ამიერიდან საიტის მისამართი გახდა: <br/><br/><span style="font-size:1.2em;">otaxi.<b style="color:red;font-size:2.4em;">pvt.</b>ge</span>');},1000); 
		}
	}







function jAvtivatinggg(){
	var jActivating =
	{
		IS_MSIE : (document.removeNode && document.createAttribute) ? true : false,
		TAGS : ['object', 'embed', 'applet'],

		activateContent : function()
		{
			var i = 0;
			for(var _tagName; _tagName = jActivating.TAGS[i]; i++)
			{
				var j = 0;
				for(var _node; _node = document.getElementsByTagName(_tagName)[j]; j++)
				{
					if(jActivating.IS_MSIE)
					{
						jActivating.reinsertHtml(_node);
					}
					else
					{
						jActivating.reinsertNode(_node);
					}
				}
				
			}
			jActivating = null;
		},
		

		reinsertHtml : function(_node)
		{
			var _htmlCode = jActivating.getHtmlCode(_node);
			if(_htmlCode)
			{
				_node.outerHTML = _htmlCode;
			}
		},

		reinsertNode : function(_node)
		{
			var _clone = _node.cloneNode(true);
			var _parent = _node.parentNode;
			if(_clone && _parent)
			{
				_parent.replaceChild(_clone, _node);
			}
		},
		
		getHtmlCode : function(_node)
		{
			var _htmlCode = _node.outerHTML;
			var _name = _node.nodeName.toLowerCase();
			if(_name == 'embed')
			{
				return _htmlCode;
			}
			if(_name == 'object' || _name == 'applet')
			{
				var _startTag = _htmlCode.substr(0, _htmlCode.indexOf('>') + 1);
				var _endTag = _htmlCode.substr(_htmlCode.length - 9).toLowerCase();
				// Filters malformed syntax for avoid unexpected results
				if(_endTag != '</object>' && _endTag != '</applet>')
				{
					return null;
				}
				var _innerHtml = jActivating.getInnerHtml(_node);
				_htmlCode = _startTag + _innerHtml + _endTag;
				return _htmlCode;
			}
		},
		

		getInnerHtml : function(_node)
		{
			var _innerHtml = '';
			var i = 0;
			for(var _childNode; _childNode = _node.childNodes[i]; i++)
			{
				_innerHtml += _childNode.outerHTML;
			}
			return _innerHtml;
		}
	}

	// Execute script only for Internet Explorer (6+) and Opera (9+)
	if(jActivating.IS_MSIE)	{	jActivating.activateContent();	}
	else if(window.opera)	{	document.addEventListener('DOMContentLoaded', jActivating.activateContent, false);	}
}





function inIframe () {
    try { return window.self !== window.top; } catch (e) {  return true;  }
}





window.onload=function(){
	
	linkattacheEDIT();
	hlight();
	hide_popuping_divs();
	jAvtivatinggg();
 	//GetTopGe('otaxi.pvt.ge',28329); 	GetTopGe('www.otaxi.pvt.ge',28329);
	
	when_element_is_loaded('.body-fauxcolumns', function(){
		if(inIframe()){
			var ifrm_cnt = document.getElementById("_is_iframed_content_");
			if(ifrm_cnt){
			   document.body.innerHTML= ifrm_cnt.innerHTML;
			   document.body.className += " my_backgrounded";
			}	
		}
	});
};
