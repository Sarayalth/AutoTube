linkStart();

function linkStart() {
	if (window.location.pathname == "/watch") {
    var div = document.createElement('div');

    div.className = 'ytp-menuitem';
	div.setAttribute("role", "menuitemcheckbox");
	div.setAttribute("aria-checked", "false");
	div.tabIndex = '0';
	div.id = "AC";
	div.onclick = function (){
	if (document.getElementById("AC").getAttribute("aria-checked")=="true") {
		document.getElementById("AC").setAttribute("aria-checked", false);
		shitHappens();
	}
	
	else if (document.getElementById("AC").getAttribute("aria-checked")=="false") {
		document.getElementById("AC").setAttribute("aria-checked", true);
		shitHappens();
	}
};

    div.innerHTML = '<div class="ytp-menuitem-label">AutoReplay</div><div class="ytp-menuitem-content"><div class="ytp-menuitem-toggle-checkbox"></div></div>';

    document.getElementsByClassName('ytp-panel-menu')[0].appendChild(div);
	
	shitHappens();
	}
	else {
	setTimeout(linkStart, 5000);
	}
}

function shitHappens() {
 if (window.location.pathname == "/watch") {
	if (document.getElementById("AC").getAttribute("aria-checked")=="true") {
	var nowtime= document.getElementsByClassName("ytp-progress-bar")[0].getAttribute("aria-valuenow");
	var maxtime= document.getElementsByClassName("ytp-progress-bar")[0].getAttribute("aria-valuemax");
	var input = document.getElementsByClassName("ytp-play-button ytp-button");

	
	if (nowtime == maxtime)
		{
			console.log("Trying to press Replay button");
			input[0].click();
		} 
	setTimeout(shitHappens, 5000);
	}
	else {
		setTimeout(shitHappens, 5000);
	}
 }
 else {
	setTimeout(shitHappens, 5000);
	}
}