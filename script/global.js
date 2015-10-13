// AGG. PREFERITI

var bookmarkurl="http://www.coopgloria.it"
var bookmarktitle="CoopGloria.it - Cooperativa Agricola Gloria"

function addbookmark(){
if (document.all)
window.external.AddFavorite(bookmarkurl,bookmarktitle)
};
            function intercetta()
            {
                for (var i=0; i<document.links.length; i++)
                if (document.links[i].className=="blank")
                {
                    document.links[i].target="_blank";
                }
            }


// POPUP MAX

function open_max(URL)
{
  var w = screen.availWidth;
  var h = screen.availHeight;

  browserName = navigator.appName;
  if (browserName == 'Netscape')
  {
    w -= 11;
    h -= 112;
  }
  else
  {
    w -= 11;
    h -= 127;
  }

 window.open(URL,"","menubar=no,toolbar=no,status,"+"scrollbars,resizable,width=" + w + ",height=" + h + ",top=0,left=0");
};


// POPUP CUSTOM

function popup(URL,w,h) {

	window.open(URL,"","menubar=no,toolbar=no,status=no,"+"scrollbars,resizable,width=" + w + ",height=" + h + ",top=200,left=200");

};

function filedown(URL) {

	window.open("/script/downfile.php?filedown=" + URL + "","popdown","menubar=no,toolbar=no,status=no, scrollbars,width=460,height=290,top=250,left=250");

}


var links=document.getElementsByTagName("a");
var imgs=document.getElementsByTagName("img");

function enabletooltips() {

for(i=0;i<links.length;i++){
    t=links[i].getAttribute("title");
    if(t!=""){
        links[i].removeAttribute("title");
        links[i].style.position="relative";
        tooltip=document.createElement("div");
        tooltip.className="tooltip";
        tooltip.style.display="none";
        tooltip.appendChild(document.createTextNode(t));
        links[i].appendChild(tooltip);
        links[i].onmouseover=showTooltip;
        links[i].onmouseout=hideTooltip;
        }
    }

for(g=0;g<imgs.length;g++){
    h=imgs[g].getAttribute("alt");
    if(h!=""){
        imgs[g].removeAttribute("alt");
        }
    }
    
};

bName = navigator.appName;

if (bName != "Netscape")
{
    function showTooltip(event)
    {
        this.style.zIndex="25";
        this.getElementsByTagName("div")[0].style.display="block";
    }

    function hideTooltip(event)
    {
        this.style.zIndex="24";
        this.getElementsByTagName("div")[0].style.display="none";
    }
}



function intercetta()
{
for (var i=0; i<document.links.length; i++)
                if (document.links[i].className=="blank")
                {
                    document.links[i].target="_blank";
                }
            }