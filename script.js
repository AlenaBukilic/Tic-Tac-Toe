$(document).ready(function(){

	var x = $('#eks');
	var o = $('#oks');
	var playerX = false;
	var playerO = false;
	var arr = document.getElementsByClassName('field');
	var values = [];
	var count = 0;

	x.click(function(){

		if(count == 0){
			x.css('color','#242424');
			playerX = true;
			playerO = false;
			o.css('color','whitesmoke');
		}

	});
	o.click(function(){

		if(count == 0){
			o.css('color','#242424');
			playerO = true;
			playerX = false;
			x.css('color','whitesmoke');
		}
		
	});

	$('#board > a').click(function(){
		if(playerX && $(this).val() == 0){
			$(this).text('X');
			$(this).css('color','#242424');
			$(this).val('X');
			values.push('X');
		}
		else if(playerO && $(this).val() == 0){
			$(this).text('O');
			$(this).css('color','#242424');
			$(this).val('O');
			values.push('O');
		}
		else if($(this).val() != 0){
			return false;
		}
		else {
			swal("Choose your symbol!");
			return false;
		}
		check();
		if (check() == true){
			return true;
		}

		count++;
		if(count == 5){
			setTimeout(tie,500);
			return true;
		}

		setTimeout(smartPlay, 500);
		
	});

	function check(){

		for(k=0;k < arr.length; k++){

			if(k == 0 && arr[k].value != null){

				if(arr[k].value == arr[k+1].value && arr[k].value == arr[k+2].value){
					arr[k].style.color = "rgba(131, 194, 90, 0.9)";
					arr[k+1].style.color = "rgba(131, 194, 90, 0.9)";
					arr[k+2].style.color = "rgba(131, 194, 90, 0.9)";

					setTimeout(win,1000);
					
					return true;
				}
				else if(arr[k].value == arr[k+3].value && arr[k].value == arr[k+6].value){
					arr[k].style.color = "rgba(131, 194, 90, 0.9)";
					arr[k+3].style.color = "rgba(131, 194, 90, 0.9)";
					arr[k+6].style.color = "rgba(131, 194, 90, 0.9)";

					setTimeout(win,1000);
					
					return true;
				}
				else if(arr[k].value == arr[k+4].value && arr[k].value == arr[k+8].value){
					arr[k].style.color = "rgba(131, 194, 90, 0.9)";
					arr[k+4].style.color = "rgba(131, 194, 90, 0.9)";
					arr[k+8].style.color = "rgba(131, 194, 90, 0.9)";

					setTimeout(win,1000);
					
					return true;
				}

			}
			else if(k==1 && arr[k].value != null){

				if(arr[k].value == arr[k+3].value && arr[k].value == arr[k+6].value){
					arr[k].style.color = "rgba(131, 194, 90, 0.9)";
					arr[k+3].style.color = "rgba(131, 194, 90, 0.9)";
					arr[k+6].style.color = "rgba(131, 194, 90, 0.9)";

					setTimeout(win,1000);
					
					return true;
				}
			}
			else if(k==2 && arr[k].value != null){

				if(arr[k].value == arr[k+3].value && arr[k].value == arr[k+6].value){
					arr[k].style.color = "rgba(131, 194, 90, 0.9)";
					arr[k+3].style.color = "rgba(131, 194, 90, 0.9)";
					arr[k+6].style.color = "rgba(131, 194, 90, 0.9)";

					setTimeout(win,1000);
					
					return true;
				}
				else if(arr[k].value == arr[k+2].value && arr[k].value == arr[k+4].value){
					arr[k].style.color = "rgba(131, 194, 90, 0.9)";
					arr[k+2].style.color = "rgba(131, 194, 90, 0.9)";
					arr[k+4].style.color = "rgba(131, 194, 90, 0.9)";

					setTimeout(win,1000);
					
					return true;
				}
			}
			else if(k==3 && arr[k].value != null){

				if(arr[k].value == arr[k+1].value && arr[k].value == arr[k+2].value){
					arr[k].style.color = "rgba(131, 194, 90, 0.9)";
					arr[k+1].style.color = "rgba(131, 194, 90, 0.9)";
					arr[k+2].style.color = "rgba(131, 194, 90, 0.9)";

					setTimeout(win,1000);
					
					return true;
				}
			}
			else if(k==6 && arr[k].value != null){

				if(arr[k].value == arr[k+1].value && arr[k].value == arr[k+2].value){
					arr[k].style.color = "rgba(131, 194, 90, 0.9)";
					arr[k+1].style.color = "rgba(131, 194, 90, 0.9)";
					arr[k+2].style.color = "rgba(131, 194, 90, 0.9)";

					setTimeout(win,1000);
					
					return true;
				}
			}

		}
		
			
	}

	function win(){
		$('#board').css({'background-color':'#83c25a','color':'whitesmoke', 'font-size':'30px'});
		$('#board').text('Win!');
		setTimeout(reload, 1000);
	}

	function tie(){
		$('#board').css({'background-color':'#fc6e55','color':'whitesmoke', 'font-size':'30px'});
		$('#board').text('Tie!');
		setTimeout(reload, 1000);
	}

	function reload(){
		//location.reload();
		history.go(0);
	}

	function smartPlay(){

		if(count == 1){
			if(arr[4].value == null){
				move(arr[4]);
				return true;
			}
			else if(arr[4].value != null){
				var arr2 = [0,2,6,8];
				var s = Math.floor(Math.random()*4);
				if(arr[arr2[s]].value != null){
					smartPlay();
				}
				else{
					move(arr[arr2[s]]);
					return true;
				}
			}
		}

		if(arr[4].value != values[0] && count == 3){

			if(arr[1].value == arr[4].value && arr[7].value == null){
				move(arr[7]);
				check();
				return true;
			}
			else if(arr[5].value == arr[4].value && arr[3].value == null){
				move(arr[3]);
				check();
				return true;
			}
			else if(arr[3].value == arr[4].value && arr[5].value == null){
				move(arr[5]);
				check();
				return true;
			}
			else if(arr[7].value == arr[4].value && arr[1].value == null){
				move(arr[1]);
				check();
				return true;
			}

		}

		if(count >= 3){

			for(l = 0; l < arr.length; l++){

				if(arr[l].value == values[1]){

					if(l == 0){
					
						if(arr[l].value == arr[l+1].value && arr[l+2].value == null){
							move(arr[l+2]);
							check();
							return true;
						}
						else if(arr[l].value == arr[l+2].value && arr[l+1].value == null){
							move(arr[l+1]);
							check();
							return true;
						}
						else if(arr[l].value == arr[l+3].value && arr[l+6].value == null){
							move(arr[l+6]);
							check();
							return true;
						}
						else if(arr[l].value == arr[l+6].value && arr[l+3].value == null){
							move(arr[l+3]);
							check();
							return true;
						}
					}
					else if(l==1){
						
						if(arr[l].value == arr[l+3].value && arr[l+6].value == null){
							move(arr[l+6]);
							check();
							return true;
						}
						else if(arr[l].value == arr[l+6].value && arr[l+3].value == null){
							move(arr[l+3]);
							check();
							return true;
						}

					}
					else if(l==2){
						
						if(arr[l].value == arr[l-1].value && arr[l-2].value == null){
							move(arr[l-2]);
							check();
							return true;
						}
						else if(arr[l].value == arr[l-2].value && arr[l-1].value == null){
							move(arr[l-1]);
							check();
							return true;
						}
						else if(arr[l].value == arr[l+3].value && arr[l+6].value == null){
							move(arr[l+6]);
							check();
							return true;
						}
						else if(arr[l].value == arr[l+6].value && arr[l+3].value == null){
							move(arr[l+3]);
							check();
							return true;
						}

					}
					else if(l==3){
						
						if(arr[l].value == arr[l+1].value && arr[l+2].value == null){
							move(arr[l+2]);
							check();
							return true;
						}
						else if(arr[l].value == arr[l+2].value && arr[l+1].value == null){
							move(arr[l+1]);
							check();
							return true;
						}

					}
					else if(l==5){
						
						if(arr[l].value == arr[l-1].value && arr[l-2].value == null){
							move(arr[l-2]);
							check();
							return true;
						}
						else if(arr[l].value == arr[l-2].value && arr[l-1].value == null){
							move(arr[l-1]);
							check();
							return true;
						}

					}
					else if(l==6){
						
						if(arr[l].value == arr[l+1].value && arr[l+2].value == null){
							move(arr[l+2]);
							check();
							return true;
						}
						else if(arr[l].value == arr[l+2].value && arr[l+1].value == null){
							move(arr[l+1]);
							check();
							return true;
						}
						else if(arr[l].value == arr[l-3].value && arr[l-6].value == null){
							move(arr[l-6]);
							check();
							return true;
						}
						else if(arr[l].value == arr[l-6].value && arr[l-3].value == null){
							move(arr[l-3]);
							check();
							return true;
						}

					}
					else if(l==7 || l == 8){
				
						if(arr[l].value == arr[l-3].value && arr[l-6].value == null){
							move(arr[l-6]);
							check();
							return true;
						}
						else if(arr[l].value == arr[l-6].value && arr[l-3].value == null){
							move(arr[l-3]);
							check();
							return true;
						}
					}
					else if (arr[2].value == arr[4].value && arr[6].value == null) {
						
						move(arr[6]);
						check();
						return true;
					}
					else if(arr[6].value == arr[4].value && arr[2].value == null){
						
						move(arr[2]);
						check();
						return true;
					}
					else if(arr[0].value == arr[4].value && arr[8].value == null){
						
						move(arr[8]);
						check();
						return true;
					}
					else if(arr[8].value == arr[4].value && arr[0].value == null){
						
						move(arr[0]);
						check();
						return true;
					}

				}

			}
		}




		for(j=0; j < arr.length; j++){

			if( j==0 && arr[j].value != null){

				if(arr[j].value == arr[j+1].value && arr[j+2].value == null){
					move(arr[j+2]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j+2].value && arr[j+1].value == null ){
					move(arr[j+1]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j+3].value && arr[j+6].value == null){
					move(arr[j+6]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j+6].value && arr[j+3].value == null){
					move(arr[j+3]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j+4].value && arr[j+8].value == null){
					move(arr[j+8]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j+8].value && arr[j+4].value == null) {
					move(arr[j+4]);
					check();
					return true;
				}
			}
			else if(j==1 && arr[j].value != null){
				if(arr[j].value == arr[j+3].value && arr[j+6].value == null){
					move(arr[j+6]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j+6].value && arr[j+3].value == null){
					move(arr[j+3]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j-1].value && arr[j+1].value == null){
					move(arr[j+1]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j+1].value && arr[j-1].value == null){
					move(arr[j-1]);
					check();
					return true;
				}
			}
			else if(j==2 && arr[j].value != null){
				if(arr[j].value == arr[j+2].value && arr[j+4].value == null){
					move(arr[j+4]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j+4].value && arr[j+2].value == null){
					move(arr[j+2]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j+3].value && arr[j+6].value == null){
					move(arr[j+6]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j+6].value && arr[j+3].value == null){
					move(arr[j+3]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j-1].value && arr[j-2].value == null){
					move(arr[j-2]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j-2].value && arr[j-1].value == null){
					move(arr[j-1]);
					check();
					return true;
				}
			}
			else if(j == 3 && arr[j].value != null){
				if(arr[j].value == arr[j+1].value && arr[j+2].value == null){
					move(arr[j+2]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j+2].value && arr[j+1].value == null){
					move(arr[j+1]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j+3].value && arr[j-3].value == null){
					move(arr[j-3]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j-3].value && arr[j+3].value == null){
					move(arr[j+3]);
					check();
					return true;
				}
			}
			else if(j == 6 && arr[j].value != null){
				if(arr[j].value == arr[j+1].value && arr[j+2].value == null){
					move(arr[j+2]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j+2].value && arr[j+1].value == null){
					move(arr[j+1]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j-3].value && arr[j-6].value == null){
					move(arr[j-6]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j-6].value && arr[j-3].value == null){
					move(arr[j-3]);
					check();
					return true;
				}
			}
			else if(j == 4 && arr[j].value != null){
				if(arr[j].value == arr[j-3].value && arr[j+3].value == null){
					move(arr[j+3]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j+3].value && arr[j-3].value == null){
					move(arr[j-3]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j-1].value && arr[j+1].value == null){
					move(arr[j+1]);
					return true;
				}
				else if(arr[j].value == arr[j+1].value && arr[j-1].value == null){
					move(arr[j-1]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j+4].value && arr[j-4].value == null){
					move(arr[j-4]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j-4].value && arr[j+4].value == null){
					move(arr[j+4]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j+2].value && arr[j-2].value == null){
					move(arr[j-2]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j-2].value && arr[j+2].value == null){
					move(arr[j+2]);
					check();
					return true;
				}

			}
			else if(j == 5 && arr[j].value != null){
				if(arr[j].value == arr[j-1].value && arr[j-2].value == null){
					move(arr[j-2]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j-2].value && arr[j-1].value == null){
					move(arr[j-1]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j-3].value && arr[j+3].value == null){
					move(arr[j+3]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j+3].value && arr[j-3].value == null){
					move(arr[j-3]);
					check();
					return true;
				}
			}
			else if(j == 7 && arr[j].value != null){
				if(arr[j].value == arr[j-3].value && arr[j-6].value == null){
					move(arr[j-6]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j-6].value && arr[j-3].value == null){
					move(arr[j-3]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j-1].value && arr[j+1].value == null){
					move(arr[j+1]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j+1].value && arr[j-1].value == null){
					move(arr[j-1]);
					check();
					return true;
				}

			}
			else if(j == 8 && arr[j].value != null){
				if(arr[j].value == arr[j-3].value && arr[j-6].value == null){
					move(arr[j-6]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j-6].value && arr[j-3].value == null){
					move(arr[j-3]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j-1].value && arr[j-2].value == null){
					move(arr[j-2]);
					check();
					return true;
				}
				else if(arr[j].value == arr[j-2].value && arr[j-1].value == null){
					move(arr[j-1]);
					check();
					return true;
				}

			}

		}

		if(count == 2){
			
			if(arr[0].value != null && arr[0].value == arr[8].value || arr[2].value != null && arr[2].value == arr[6].value){
				var arr3 = [1,3,5,7];
				var w = Math.floor(Math.random()*4);
				if(arr[arr3[w]].value != null){
					smartPlay();
				}
				else{
					move(arr[arr3[w]]);
					return true;
				}
			}
			else if(arr[0].value != null && arr[0].value == arr[4].value || arr[8].value != null && arr[8].value == arr[4].value){
				
				var arr3 = [2,6];
				var w = Math.floor(Math.random()*2);
				if(arr[arr3[w]].value != null){
					smartPlay();
				}
				else{
					move(arr[arr3[w]]);
					return true;
				}
			}
			else if(arr[2].value != null && arr[2].value == arr[4].value || arr[6].value != null && arr[6].value == arr[4].value){
				
				var arr3 = [0,8];
				var w = Math.floor(Math.random()*2);
				if(arr[arr3[w]].value != null){
					smartPlay();
				}
				else{
					move(arr[arr3[w]]);
					return true;
				}
			}
			else if(arr[1].value != null && arr[1].value == arr[3].value) {
				
				var arr3 = [0,2,6];
				var w = Math.floor(Math.random()*3);
				if(arr[arr3[w]].value != null){
					smartPlay();
				}
				else{
					move(arr[arr3[w]]);
					return true;
				}
			}
			else if(arr[1].value != null && arr[1].value == arr[5].value) {
				
				var arr3 = [0,2,8];
				var w = Math.floor(Math.random()*3);
				if(arr[arr3[w]].value != null){
					smartPlay();
				}
				else{
					move(arr[arr3[w]]);
					return true;
				}
			}
			else if(arr[5].value != null && arr[5].value == arr[7].value) {
			
				var arr3 = [2,6,8];
				var w = Math.floor(Math.random()*3);
				if(arr[arr3[w]].value != null){
					smartPlay();
				}
				else{
					move(arr[arr3[w]]);
					return true;
				}
			}
			else if(arr[3].value != null && arr[3].value == arr[7].value) {
			
				var arr3 = [0,6,8];
				var w = Math.floor(Math.random()*3);
				if(arr[arr3[w]].value != null){
					smartPlay();
				}
				else{
					move(arr[arr3[w]]);
					return true;
				}
			}
			else if(arr[1].value != null && arr[1].value == arr[6].value) {
				
				var arr3 = [0,2];
				var w = Math.floor(Math.random()*2);
				if(arr[arr3[w]].value != null){
					smartPlay();
				}
				else{
					move(arr[arr3[w]]);
					return true;
				}
			}
			else if(arr[1].value != null && arr[1].value == arr[8].value) {
				
				var arr3 = [0,2];
				var w = Math.floor(Math.random()*2);
				if(arr[arr3[w]].value != null){
					smartPlay();
				}
				else{
					move(arr[arr3[w]]);
					return true;
				}
			}
			else if(arr[7].value != null && arr[7].value == arr[0].value) {
				
				var arr3 = [6,8];
				var w = Math.floor(Math.random()*2);
				if(arr[arr3[w]].value != null){
					smartPlay();
				}
				else{
					move(arr[arr3[w]]);
					return true;
				}
			}
			else if(arr[7].value != null && arr[7].value == arr[2].value) {
				
				var arr3 = [6,8];
				var w = Math.floor(Math.random()*2);
				if(arr[arr3[w]].value != null){
					smartPlay();
				}
				else{
					move(arr[arr3[w]]);
					return true;
				}
			}
			else if(arr[3].value != null && arr[3].value == arr[2].value) {
				
				var arr3 = [0,6];
				var w = Math.floor(Math.random()*2);
				if(arr[arr3[w]].value != null){
					smartPlay();
				}
				else{
					move(arr[arr3[w]]);
					return true;
				}
			}
			else if(arr[3].value != null && arr[3].value == arr[8].value) {
				
				var arr3 = [0,6];
				var w = Math.floor(Math.random()*2);
				if(arr[arr3[w]].value != null){
					smartPlay();
				}
				else{
					move(arr[arr3[w]]);
					return true;
				}
			}
			else if(arr[5].value != null && arr[5].value == arr[0].value) {
				
				var arr3 = [2,8];
				var w = Math.floor(Math.random()*2);
				if(arr[arr3[w]].value != null){
					smartPlay();
				}
				else{
					move(arr[arr3[w]]);
					return true;
				}
			}
			else if(arr[5].value != null && arr[5].value == arr[6].value) {
				
				var arr3 = [2,8];
				var w = Math.floor(Math.random()*2);
				if(arr[arr3[w]].value != null){
					smartPlay();
				}
				else{
					move(arr[arr3[w]]);
					return true;
				}
			}
		}

		randomPlay();
	}

	function move(place){
		if(playerX){
			place.append('O');
			place.value = 'O';
			values.push('O');
		}
		else if(playerO){
			place.append('X');
			place.value = 'X';
			values.push('X');
		}
	}

	function randomPlay(){

		var i = Math.floor(Math.random()*9);

		if(arr[i].value != null){

			randomPlay();

		}
		else{
			move(arr[i]);
			check();
			return true;
		}
	}

});
