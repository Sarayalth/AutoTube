linkStart();

function linkStart() {
	if (window.location.pathname == "/watch") {
		var autoReplayDiv = document.createElement('div');
		var pipDiv = document.createElement('div');
		var player = document.getElementsByClassName("video-stream html5-main-video");
		var seekBar = document.getElementsByClassName("ytp-play-progress ytp-swatch-background-color");
		var playButton = document.getElementsByClassName("ytp-play-button ytp-button");
		
		autoReplayDiv.className = 'ytp-menuitem';
		autoReplayDiv.setAttribute("role", "menuitemcheckbox");
		autoReplayDiv.setAttribute("aria-checked", "false");
		autoReplayDiv.tabIndex = '0';
		autoReplayDiv.id = "AC";
		autoReplayDiv.onclick = function (){
			if (document.getElementById("AC").getAttribute("aria-checked")=="true") {
				document.getElementById("AC").setAttribute("aria-checked", false);
				player[0].loop = false;
			}
		
			else if (document.getElementById("AC").getAttribute("aria-checked")=="false") {
				document.getElementById("AC").setAttribute("aria-checked", true);
				if (seekBar[0].style.transform == "scaleX(1)")
				{
					player[0].play();
					player[0].requestPictureInPicture();
				}
				else if (seekBar[0].style.transform != "scaleX(1)" && playButton[0].title == "Replay")
				{
					player[0].currentTime = 0;
					player[0].play();
					player[0].requestPictureInPicture();
				}
				player[0].loop = true;
			}
		};

		pipDiv.className = 'ytp-menuitem';
		pipDiv.setAttribute("role", "menuitemcheckbox");
		pipDiv.setAttribute("aria-checked", "false");
		pipDiv.tabIndex = '0';
		pipDiv.id = "pip";
		pipDiv.onclick = function (){
			if (document.getElementById("pip").getAttribute("aria-checked")=="true") {
				document.getElementById("pip").setAttribute("aria-checked", false);
				if (player[0] !== document.pictureInPictureElement) {
					player[0].requestPictureInPicture();
				  } else {
					document.exitPictureInPicture();
				  }
			}
		
			else if (document.getElementById("pip").getAttribute("aria-checked")=="false") {
				document.getElementById("pip").setAttribute("aria-checked", true);
				player[0].requestPictureInPicture();
			}
		};
		
		autoReplayDiv.innerHTML = '<div class="ytp-menuitem-icon"></div><div class="ytp-menuitem-label">AutoReplay</div><div class="ytp-menuitem-content"><div class="ytp-menuitem-toggle-checkbox"></div></div>';

		pipDiv.innerHTML = '<div class="ytp-menuitem-icon"></div><div class="ytp-menuitem-label">Picture-in-Picture</div><div class="ytp-menuitem-content"><div class="ytp-menuitem-toggle-checkbox"></div></div>';

		document.getElementsByClassName('ytp-panel-menu')[0].appendChild(autoReplayDiv);
		document.getElementsByClassName('ytp-panel-menu')[0].appendChild(pipDiv);

		player[0].addEventListener('enterpictureinpicture', function(event) {
			document.getElementById("pip").setAttribute("aria-checked", true);
		});
		  
		player[0].addEventListener('leavepictureinpicture', function(event) {
			document.getElementById("pip").setAttribute("aria-checked", false);
		});
	}
	else {
		setTimeout(linkStart, 5000);
	}
}