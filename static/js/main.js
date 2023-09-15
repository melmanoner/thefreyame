var dark_theme = document.getElementById('dark');
var light_theme = document.getElementById('light');
var screen = document.getElementById('screen');
var change_theme = document.getElementById('change_theme');
var header = document.getElementById('header');
var toggle = document.getElementById('toggle');
var blue_btn_gotit = document.getElementById('blue_btn');
var send_message_button = document.getElementById('send_message_button');
var input_info = document.getElementById('input_info');
var re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;


setTimeout(function(){
	$('#hello').css('display', 'block');
}, 1500);

setTimeout(function(){
	$('#giftforu').css('display', 'block');
}, 3000);

setTimeout(function(){
	$('#exlusive').css('display', 'block');
}, 5000);



setTimeout(function(){
	$('#block_photo').css('display', 'block');
},7000);

setTimeout(function(){
	$('#km_writing').css('display', 'none');
}, 7500);

setTimeout(function(){
	$('#blue_btn').css('display', 'block');
},8500);



window.onload = function(){
	if (localStorage.getItem('theme')=='dark'){
		console.log('xxx');
		console.log('дарк выполнено')
		document.body.style.background = "#0D0D0D";
		screen.style.background = "#0D0D0D";
		change_theme.style.left = "30px"
		change_theme.style.background = "white"
		screen.style.border = "none";
		screen.style.borderRadius = "0";
		header.style.border = "0";
		header.style.borderRadius = "0";
		toggle.style.background = "#292929";
		toggle.style.border = "2px solid #292929";
		$('#name').css('color','white');
		$('#online').css('color','white');
		$('.left').css('background','#1B1B1B');
		$('.left').css('color','white');
		$('.ex_pack').css('color','#57B3F2');
		$('.left').css('border','1px solid #1B1B1B');
		$('#km_writing').css('color', '#FFFFFF');
		$('#km_writing').css('opacity', '0.25');
		console.log(localStorage.getItem('theme'));
		console.log('Темный');	
		

		
	}
	else {
		console.log('Выполнено условие лайт')
		document.body.style.background = "#F1F4FF";
		screen.style.background = "#F1F4FF";
		change_theme.style.left = "5px"
		change_theme.style.background = "#1966FF";
		screen.style.border = "0.770508px solid rgba(255, 255, 255, 0.2)";
		screen.style.borderRadius = "15.4102px";
		header.style.border = "	0.770508px solid rgba(255, 255, 255, 0.2)";
		header.style.borderRadius = "15.4102px";
		toggle.style.background = "none";
		toggle.style.border = "2px solid #1966FF";
		$('#name').css('color','#121212');
		$('#online').css('color','#1966FF');
		$('.left').css('background','#DAEDF8');
		$('.left').css('color','#4E7489');
		$('.left').css('border','1px solid #DAEDF8');
		$('#km_writing').css('color', '#4E7489');
		$('#km_writing').css('opacity', '0.5');

		console.log(localStorage.getItem('theme'));
		console.log('Светлый');
	}
}


dark_theme.onclick = function dark(){
	console.log('дарк выполнено')
	document.body.style.background = "#0D0D0D";
	screen.style.background = "#0D0D0D";
	change_theme.style.left = "30px"
	change_theme.style.background = "white"
	screen.style.border = "none";
	screen.style.borderRadius = "0";
	header.style.border = "0";
	header.style.borderRadius = "0";
	toggle.style.background = "#292929";
	toggle.style.border = "2px solid #292929";
	$('#name').css('color','white');
	$('#online').css('color','white');
	$('.left').css('background','#1B1B1B');
	$('.left').css('color','white');
	$('.ex_pack').css('color','#57B3F2');
	$('.left').css('border','1px solid #1B1B1B');
	$('#km_writing').css('color', '#FFFFFF');
	$('#km_writing').css('opacity', '0.25');
	localStorage.setItem('theme','dark');	
};

light_theme.onclick = function(){
	console.log('Выполнено')
	document.body.style.background = "#F1F4FF";
	screen.style.background = "#F1F4FF";
	change_theme.style.left = "5px"
	change_theme.style.background = "#1966FF";
	screen.style.border = "0.770508px solid rgba(255, 255, 255, 0.2)";
	screen.style.borderRadius = "15.4102px";
	header.style.border = "	0.770508px solid rgba(255, 255, 255, 0.2)";
	header.style.borderRadius = "15.4102px";
	toggle.style.background = "none";
	toggle.style.border = "2px solid #1966FF";
	$('#name').css('color','#121212');
	$('#online').css('color','#1966FF');
	$('.left').css('background','#DAEDF8');
	$('.left').css('color','#4E7489');
	$('.left').css('border','1px solid #DAEDF8');
	$('#km_writing').css('color', '#4E7489');
	$('#km_writing').css('opacity', '0.5');
	localStorage.setItem('theme','light');
};	



blue_btn_gotit.onclick = function(){
	$('#send_message_button').css('opacity','1') ;
	$('#send_message_button').removeAttr('disabled');
	$('#input_info').removeAttr('disabled');
	$('#input_info').css('opacity','1');
	blue_btn_gotit.style.display = 'none';
	input_info.placeholder = "Enter your name :)";
	$('.message_block').append($('<div id="msg_name" class="message left"> Plz write ur name </div>'));
}


send_message_button.onclick = function(){
	if (input_info.value==''||input_info.value==' '){
		alert('enter ur name')
	}else{
		$('#send_message_button').attr('disabled','disabled');
		$('#send_message_button').css('opacity','0.5');
		$('#hello').css('display','none');
		$('.message_block').append($('<div id="msg_name" class="message right">'+input_info.value+' </div>'));
		var name = input_info.value;
		input_info.value = '';
		input_info.placeholder = "Enter your email :)";
		$('#km_writing').css('display', 'block');
		setTimeout(function(){
			$('#giftforu').css('display','none');
			$('.message_block').append($('<div id="msg_name2" class="message left"> Plz write ur email </div>'));
		},500);
		$('#km_writing').css('display', 'none');

		
		$('#send_message_button').removeAttr('disabled');
		$('#send_message_button').css('opacity','1');
		$('#send_message_buttom').attr('method', 'POST');
		send_message_button.onclick = function(){

			if (re.test(input_info.value)){
				$('#exlusive').css('display','none');
				$('.message_block').append($('<div id="msg_name2" class="message right">'+input_info.value+' </div>'));
				$('#km_writing').css('display', 'block');
				var email = input_info.value;
				input_info.value='';
				

				const dict = {
					name: name,
					email: email,
				};


				input_info.placeholder = 'Thank you!:)'
				setTimeout(function(){
					$('#km_writing').css('display', 'block');
					$('#block_photo').css('display','none');
					$('.message_block').append($('<div id="msg_name2" class="message left"> Thank you for joining me, <span class="ex_pack"> the photos have already been sent to your email </span>, I invite you to subscribe to <span class="ex_pack"> my free Fansly page </span> to see more unique content with me - </div>'));
					setTimeout(function(){
						$('.message_block').append($('<button class="gotit" id="fansly_btn"><img src="static/img/fansly_btn.svg" style="margin-right:10px;" alt="" class="eye_btn"><span class="span_gotit">FANSLY</span></button>'));
						$('#km_writing').css('display', 'none');
					}, 500);
					}, 700);

				$.ajax({
					type: "POST", 
					url: "send.php",
					data: {name:name, email:email},
					success: function(){
						alert('AJAX SUC');
					}
				})


				$('#send_message_button').attr('disabled','disabled');
				$('#send_message_button').css('opacity','0.5');
			}
			else{
				alert('enter correct email');
			}
			
			}

			

			


			
			
			
		}
		
}