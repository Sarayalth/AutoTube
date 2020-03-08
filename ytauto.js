linkStart();

function linkStart() {
	if (window.location.pathname == "/watch") {
		var div = document.createElement('div');
		var player = document.getElementsByClassName("video-stream html5-main-video");
		var seekBar = document.getElementsByClassName("ytp-play-progress ytp-swatch-background-color");
		var playButton = document.getElementsByClassName("ytp-play-button ytp-button");
		
		div.className = 'ytp-menuitem';
		div.setAttribute("role", "menuitemcheckbox");
		div.setAttribute("aria-checked", "false");
		div.tabIndex = '0';
		div.id = "AC";
		div.onclick = function (){
			if (document.getElementById("AC").getAttribute("aria-checked")=="true") {
				document.getElementById("AC").setAttribute("aria-checked", false);
				player[0].loop = false;
			}
		
			else if (document.getElementById("AC").getAttribute("aria-checked")=="false") {
				document.getElementById("AC").setAttribute("aria-checked", true);
				if (seekBar[0].style.transform == "scaleX(1)")
				{
					player[0].play();
				}
				else if (seekBar[0].style.transform != "scaleX(1)" && playButton[0].title == "Replay")
				{
					player[0].currentTime = 0;
					player[0].play();
				}
				player[0].loop = true;
			}
		};

		div.innerHTML = '<div class="ytp-menuitem-icon"></div><div class="ytp-menuitem-label">AutoReplay</div><div class="ytp-menuitem-content"><div class="ytp-menuitem-toggle-checkbox"></div></div>';

		document.getElementsByClassName('ytp-panel-menu')[0].appendChild(div);
		
	}
	else {
		setTimeout(linkStart, 5000);
	}
}