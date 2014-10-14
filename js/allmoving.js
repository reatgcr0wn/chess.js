allMovingBlack = [];
allMovingWhite = [];
kingMovingBlack = [];
kingMovingWhite = [];

function allMovingBlackF(){

	allMovingBlack = [];
	for (var x = 1;x<=8;x++) {
		for (var y = 1;y<=8;y++) {
			if($("#td"+x*10+y+" a").hasClass("black")){

				var pieceId = x*100+y;

				if ($("#td"+x*10+y+" a").hasClass("pawn")) {

					if (pieceId > 200 && pieceId < 300 ) {
						pawnMoving = new Array(pieceId+100,pieceId+200,0);
					}else{
						pawnMoving = new Array(pieceId+100,0,0);
					}

					for (var i =  0 ; i < pawnMoving.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(pawnMoving[i]==piecePosition[k]){
								pawnMoving.splice(i,3);
							}
						}
					}

					//斜めにコマがあったら取れる
					pawnMoving.push(pieceId+100+1);
					pawnMoving.push(pieceId+100-1);
				

					if (enpassantFlag==1 && pieceId>500&&pieceId<600&&(pieceId==enpassantObjectsId1||pieceId==enpassantObjectsId2)) {
						pawnMoving.push(enpassantMoveable);
					}

					allMovingBlack = allMovingBlack.concat(pawnMoving);
				}

				if ($("#td"+x*10+y+" a").hasClass("rook")) {
					
					var rookMoving1 = new Array(pieceId+1,pieceId+2,pieceId+3,pieceId+4,pieceId+5,pieceId+6,pieceId+7);//右
					var rookMoving2 = new Array(pieceId-1,pieceId-2,pieceId-3,pieceId-4,pieceId-5,pieceId-6,pieceId-7);//左
					var rookMoving3 = new Array(pieceId+100,pieceId+200,pieceId+300,pieceId+400,pieceId+500,pieceId+600,pieceId+700);//下
					var rookMoving4 = new Array(pieceId-100,pieceId-200,pieceId-300,pieceId-400,pieceId-500,pieceId-600,pieceId-700);//上
					
					//途中に駒がある場合それ以降進めなくする	
					for (var i =  0 ; i < rookMoving1.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(rookMoving1[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									rookMoving1.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//相手の駒のとき
									rookMoving1.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < rookMoving2.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(rookMoving2[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									rookMoving2.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									rookMoving2.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < rookMoving3.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(rookMoving3[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									rookMoving3.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									rookMoving3.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < rookMoving4.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(rookMoving4[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									rookMoving4.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									rookMoving4.splice(i+1,7);
								}
							}
						}
					}

					rookMoving = rookMoving1.concat(rookMoving2,rookMoving3,rookMoving4);
					

					allMovingBlack = allMovingBlack.concat(rookMoving);
				}

				if ($("#td"+x*10+y+" a").hasClass("knight")) {
					
					var knightMoving1 = new Array(pieceId+200+1,0,0);
					var knightMoving2 = new Array(pieceId+200-1,0,0);
					var knightMoving3 = new Array(pieceId+100+2,0,0);
					var knightMoving4 = new Array(pieceId+100-2,0,0);
					var knightMoving5 = new Array(pieceId-100+2,0,0);
					var knightMoving6 = new Array(pieceId-100-2,0,0);
					var knightMoving7 = new Array(pieceId-200+1,0,0);
					var knightMoving8 = new Array(pieceId-200-1,0,0);
					
					for (var i =  0 ; i < knightMoving1.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(knightMoving1[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									knightMoving1.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < knightMoving2.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(knightMoving2[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									knightMoving2.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < knightMoving3.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(knightMoving3[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									knightMoving3.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < knightMoving4.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(knightMoving4[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									knightMoving4.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < knightMoving5.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(knightMoving5[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									knightMoving5.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < knightMoving6.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(knightMoving6[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									knightMoving6.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < knightMoving7.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(knightMoving7[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									knightMoving7.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < knightMoving8.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(knightMoving8[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									knightMoving8.splice(i,1);
								}
							}
						}
					}
					knightMoving = knightMoving1.concat(knightMoving2,knightMoving3,knightMoving4,knightMoving5,knightMoving6,knightMoving7,knightMoving8);

					allMovingBlack = allMovingBlack.concat(knightMoving);
				}

				if ($("#td"+x*10+y+" a").hasClass("bishop")) {
					
					var bishopMoving1 = new Array(pieceId-100-1,pieceId-200-2,pieceId-300-3,pieceId-400-4,pieceId-500-5,pieceId-600-6,pieceId-700-7);
					var bishopMoving2 = new Array(pieceId-100+1,pieceId-200+2,pieceId-300+3,pieceId-400+4,pieceId-500+5,pieceId-600+6,pieceId-700+7);
					var bishopMoving3 = new Array(pieceId+100-1,pieceId+200-2,pieceId+300-3,pieceId+400-4,pieceId+500-5,pieceId+600-6,pieceId+700-7);
					var bishopMoving4 = new Array(pieceId+100+1,pieceId+200+2,pieceId+300+3,pieceId+400+4,pieceId+500+5,pieceId+600+6,pieceId+700+7);
					
					for (var i =  0 ; i < bishopMoving1.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(bishopMoving1[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									bishopMoving1.splice(i,7);

								}
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//相手の駒のとき
									bishopMoving1.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < bishopMoving2.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(bishopMoving2[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									bishopMoving2.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									bishopMoving2.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < bishopMoving3.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(bishopMoving3[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									bishopMoving3.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									bishopMoving3.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < bishopMoving4.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(bishopMoving4[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									bishopMoving4.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									bishopMoving4.splice(i+1,7);
								}
							}
						}
					}

					bishopMoving = bishopMoving1.concat(bishopMoving2,bishopMoving3,bishopMoving4);
					
					allMovingBlack = allMovingBlack.concat(bishopMoving);
				}				

				if ($("#td"+x*10+y+" a").hasClass("queen")) {
					
					var queenMoving1 = new Array(pieceId+100+1,pieceId+200+2,pieceId+300+3,pieceId+400+4,pieceId+500+5,pieceId+600+6,pieceId+700+7);
					var queenMoving2 = new Array(pieceId+100-1,pieceId+200-2,pieceId+300-3,pieceId+400-4,pieceId+500-5,pieceId+600-6,pieceId+700-7);
					var queenMoving3 = new Array(pieceId-100+1,pieceId-200+2,pieceId-300+3,pieceId-400+4,pieceId-500+5,pieceId-600+6,pieceId-700+7);
					var queenMoving4 = new Array(pieceId-100-1,pieceId-200-2,pieceId-300-3,pieceId-400-4,pieceId-500-5,pieceId-600-6,pieceId-700-7);
					var queenMoving5 = new Array(pieceId+1,pieceId+2,pieceId+3,pieceId+4,pieceId+5,pieceId+6,pieceId+7);
					var queenMoving6 = new Array(pieceId-1,pieceId-2,pieceId-3,pieceId-4,pieceId-5,pieceId-6,pieceId-7);
					var queenMoving7 = new Array(pieceId+100,pieceId+200,pieceId+300,pieceId+400,pieceId+500,pieceId+600,pieceId+700);
					var queenMoving8 = new Array(pieceId-100,pieceId-200,pieceId-300,pieceId-400,pieceId-500,pieceId-600,pieceId-700);

					for (var i =  0 ; i < queenMoving1.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(queenMoving1[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									queenMoving1.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//相手の駒のとき
									queenMoving1.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < queenMoving2.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(queenMoving2[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									queenMoving2.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									queenMoving2.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < queenMoving3.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(queenMoving3[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									queenMoving3.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									queenMoving3.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < queenMoving4.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(queenMoving4[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									queenMoving4.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									queenMoving4.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < queenMoving5.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(queenMoving5[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									queenMoving5.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//相手の駒のとき
									queenMoving5.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < queenMoving6.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(queenMoving6[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									queenMoving6.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									queenMoving6.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < queenMoving7.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(queenMoving7[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									queenMoving7.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									queenMoving7.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < queenMoving8.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(queenMoving8[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									queenMoving8.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									queenMoving8.splice(i+1,7);
								}
							}
						}
					}
					queenMoving = queenMoving1.concat(queenMoving2,queenMoving3,queenMoving4,queenMoving5,queenMoving6,queenMoving7,queenMoving8);
					
					allMovingBlack = allMovingBlack.concat(queenMoving);

				}

				if ($("#td"+x*10+y+" a").hasClass("king")) {
					
					var kingMoving1 = new Array(pieceId-100-1,0,0);
					var kingMoving2 = new Array(pieceId-100,0,0);
					var kingMoving3 = new Array(pieceId-100+1,0,0);
					var kingMoving4 = new Array(pieceId-1,0,0);
					var kingMoving5 = new Array(pieceId+1,0,0);
					var kingMoving6 = new Array(pieceId+100-1,0,0);
					var kingMoving7 = new Array(pieceId+100,0,0);
					var kingMoving8 = new Array(pieceId+100+1,0,0);

					for (var i =  0 ; i < kingMoving1.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(kingMoving1[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									kingMoving1.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < kingMoving2.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(kingMoving2[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									kingMoving2.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < kingMoving3.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(kingMoving3[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									kingMoving3.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < kingMoving4.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(kingMoving4[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									kingMoving4.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < kingMoving5.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(kingMoving5[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									kingMoving5.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < kingMoving6.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(kingMoving6[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									kingMoving6.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < kingMoving7.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(kingMoving7[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									kingMoving7.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < kingMoving8.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(kingMoving8[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
									kingMoving8.splice(i,1);
								}
							}
						}
					}

					kingMoving = kingMoving1.concat(kingMoving2,kingMoving3,kingMoving4,kingMoving5,kingMoving6,kingMoving7,kingMoving8);
					
					//相手の駒が効いている場所に動けないようにする
					for (var i =  0 ; i < kingMoving.length ; i++){
						for(var k = 0 ; k <allMovingWhite.length ; k++){
							if(kingMoving[i]==allMovingWhite[k]){
									kingMoving[i]=0;
							}
						}
					}
					//相手の駒が効いている場所に動けないようにする--end--

					//kingMovingから0をカット
					kingMoving = $.grep(kingMoving, function (value) {  
		        	return value != 0;  
		   			});
		   			kingMoving = $.grep(kingMoving, function (value) {  
		        	return value < 100;  
		   			});

		   			kingMovingBlack = kingMoving
					
					allMovingBlack = allMovingBlack.concat(kingMoving);
				}
			}
		}
	}
	
	allMovingBlack = jQuery.unique(allMovingBlack);
}

function allMovingWhiteF(){

	allMovingWhite = [];
	for (var x = 1;x<=8;x++) {
		for (var y = 1;y<=8;y++) {
			if($("#td"+x*10+y+" a").hasClass("white")){

				var pieceId = x*100+y;

				if ($("#td"+x*10+y+" a").hasClass("pawn")) {
					
					if (pieceId > 700 && pieceId < 800 ) {
						var pawnMoving = new Array(pieceId-100,pieceId-200);
					}else{
						var pawnMoving = new Array(pieceId-100,0);
					}

					for (var i =  0 ; i < pawnMoving.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(pawnMoving[i]==piecePosition[k]){
								pawnMoving.splice(i,3);
							}
						}
					}

					pawnMoving.push(pieceId-100+1);
					pawnMoving.push(pieceId-100-1);

					if (enpassantFlag==1&& pieceId>400&&pieceId<500&&(pieceId==enpassantObjectsId1||pieceId==enpassantObjectsId2)) {
						pawnMoving.push(enpassantMoveable);
					}
					allMovingWhite = allMovingWhite.concat(pawnMoving);
				}		

				if ($("#td"+x*10+y+" a").hasClass("rook")) {
					
					var rookMoving1 = new Array(pieceId+1,pieceId+2,pieceId+3,pieceId+4,pieceId+5,pieceId+6,pieceId+7);//右
					var rookMoving2 = new Array(pieceId-1,pieceId-2,pieceId-3,pieceId-4,pieceId-5,pieceId-6,pieceId-7);//左
					var rookMoving3 = new Array(pieceId+100,pieceId+200,pieceId+300,pieceId+400,pieceId+500,pieceId+600,pieceId+700);//下
					var rookMoving4 = new Array(pieceId-100,pieceId-200,pieceId-300,pieceId-400,pieceId-500,pieceId-600,pieceId-700);//上
					
					//途中に駒がある場合それ以降進めなくする	
					for (var i =  0 ; i < rookMoving1.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(rookMoving1[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									rookMoving1.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//相手の駒のとき
									rookMoving1.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < rookMoving2.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(rookMoving2[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									rookMoving2.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									rookMoving2.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < rookMoving3.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(rookMoving3[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									rookMoving3.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									rookMoving3.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < rookMoving4.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(rookMoving4[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									rookMoving4.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									rookMoving4.splice(i+1,7);
								}
							}
						}
					}

					rookMoving = rookMoving1.concat(rookMoving2,rookMoving3,rookMoving4);

					allMovingWhite = allMovingWhite.concat(rookMoving);
				}

				if ($("#td"+x*10+y+" a").hasClass("knight")) {
					
					var knightMoving1 = new Array(pieceId+200+1,0,0);
					var knightMoving2 = new Array(pieceId+200-1,0,0);
					var knightMoving3 = new Array(pieceId+100+2,0,0);
					var knightMoving4 = new Array(pieceId+100-2,0,0);
					var knightMoving5 = new Array(pieceId-100+2,0,0);
					var knightMoving6 = new Array(pieceId-100-2,0,0);
					var knightMoving7 = new Array(pieceId-200+1,0,0);
					var knightMoving8 = new Array(pieceId-200-1,0,0);
					
					for (var i =  0 ; i < knightMoving1.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(knightMoving1[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									knightMoving1.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < knightMoving2.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(knightMoving2[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									knightMoving2.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < knightMoving3.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(knightMoving3[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									knightMoving3.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < knightMoving4.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(knightMoving4[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									knightMoving4.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < knightMoving5.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(knightMoving5[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									knightMoving5.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < knightMoving6.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(knightMoving6[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									knightMoving6.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < knightMoving7.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(knightMoving7[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									knightMoving7.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < knightMoving8.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(knightMoving8[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									knightMoving8.splice(i,1);
								}
							}
						}
					}
					knightMoving = knightMoving1.concat(knightMoving2,knightMoving3,knightMoving4,knightMoving5,knightMoving6,knightMoving7,knightMoving8);

					allMovingWhite = allMovingWhite.concat(knightMoving);
				}

				if ($("#td"+x*10+y+" a").hasClass("bishop")) {

					var bishopMoving1 = new Array(pieceId-100-1,pieceId-200-2,pieceId-300-3,pieceId-400-4,pieceId-500-5,pieceId-600-6,pieceId-700-7);
					var bishopMoving2 = new Array(pieceId-100+1,pieceId-200+2,pieceId-300+3,pieceId-400+4,pieceId-500+5,pieceId-600+6,pieceId-700+7);
					var bishopMoving3 = new Array(pieceId+100-1,pieceId+200-2,pieceId+300-3,pieceId+400-4,pieceId+500-5,pieceId+600-6,pieceId+700-7);
					var bishopMoving4 = new Array(pieceId+100+1,pieceId+200+2,pieceId+300+3,pieceId+400+4,pieceId+500+5,pieceId+600+6,pieceId+700+7);
					
					for (var i =  0 ; i < bishopMoving1.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(bishopMoving1[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									bishopMoving1.splice(i,7);

								}
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//相手の駒のとき
									bishopMoving1.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < bishopMoving2.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(bishopMoving2[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									bishopMoving2.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									bishopMoving2.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < bishopMoving3.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(bishopMoving3[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									bishopMoving3.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									bishopMoving3.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < bishopMoving4.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(bishopMoving4[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									bishopMoving4.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									bishopMoving4.splice(i+1,7);
								}
							}
						}
					}

					bishopMoving = bishopMoving1.concat(bishopMoving2,bishopMoving3,bishopMoving4);
					
					allMovingWhite = allMovingWhite.concat(bishopMoving);
				}				

				if ($("#td"+x*10+y+" a").hasClass("queen")) {

					var queenMoving1 = new Array(pieceId+100+1,pieceId+200+2,pieceId+300+3,pieceId+400+4,pieceId+500+5,pieceId+600+6,pieceId+700+7);
					var queenMoving2 = new Array(pieceId+100-1,pieceId+200-2,pieceId+300-3,pieceId+400-4,pieceId+500-5,pieceId+600-6,pieceId+700-7);
					var queenMoving3 = new Array(pieceId-100+1,pieceId-200+2,pieceId-300+3,pieceId-400+4,pieceId-500+5,pieceId-600+6,pieceId-700+7);
					var queenMoving4 = new Array(pieceId-100-1,pieceId-200-2,pieceId-300-3,pieceId-400-4,pieceId-500-5,pieceId-600-6,pieceId-700-7);
					var queenMoving5 = new Array(pieceId+1,pieceId+2,pieceId+3,pieceId+4,pieceId+5,pieceId+6,pieceId+7);
					var queenMoving6 = new Array(pieceId-1,pieceId-2,pieceId-3,pieceId-4,pieceId-5,pieceId-6,pieceId-7);
					var queenMoving7 = new Array(pieceId+100,pieceId+200,pieceId+300,pieceId+400,pieceId+500,pieceId+600,pieceId+700);
					var queenMoving8 = new Array(pieceId-100,pieceId-200,pieceId-300,pieceId-400,pieceId-500,pieceId-600,pieceId-700);

					for (var i =  0 ; i < queenMoving1.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(queenMoving1[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									queenMoving1.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//相手の駒のとき
									queenMoving1.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < queenMoving2.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(queenMoving2[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									queenMoving2.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									queenMoving2.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < queenMoving3.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(queenMoving3[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									queenMoving3.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									queenMoving3.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < queenMoving4.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(queenMoving4[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									queenMoving4.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									queenMoving4.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < queenMoving5.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(queenMoving5[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									queenMoving5.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("black")){//相手の駒のとき
									queenMoving5.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < queenMoving6.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(queenMoving6[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									queenMoving6.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									queenMoving6.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < queenMoving7.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(queenMoving7[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									queenMoving7.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									queenMoving7.splice(i+1,7);
								}
							}
						}
					}
					for (var i =  0 ; i < queenMoving8.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(queenMoving8[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){
									queenMoving8.splice(i,7);
								}
								if($("#td"+piecePosition[k]+" a").hasClass("black")){
									queenMoving8.splice(i+1,7);
								}
							}
						}
					}
					queenMoving = queenMoving1.concat(queenMoving2,queenMoving3,queenMoving4,queenMoving5,queenMoving6,queenMoving7,queenMoving8);
					
					allMovingWhite = allMovingWhite.concat(queenMoving);

				}

				if ($("#td"+x*10+y+" a").hasClass("king")) {
				
					var kingMoving1 = new Array(pieceId-100-1,0,0);
					var kingMoving2 = new Array(pieceId-100,0,0);
					var kingMoving3 = new Array(pieceId-100+1,0,0);
					var kingMoving4 = new Array(pieceId-1,0,0);
					var kingMoving5 = new Array(pieceId+1,0,0);
					var kingMoving6 = new Array(pieceId+100-1,0,0);
					var kingMoving7 = new Array(pieceId+100,0,0);
					var kingMoving8 = new Array(pieceId+100+1,0,0);

					for (var i =  0 ; i < kingMoving1.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(kingMoving1[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									kingMoving1.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < kingMoving2.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(kingMoving2[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									kingMoving2.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < kingMoving3.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(kingMoving3[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									kingMoving3.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < kingMoving4.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(kingMoving4[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									kingMoving4.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < kingMoving5.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(kingMoving5[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									kingMoving5.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < kingMoving6.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(kingMoving6[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									kingMoving6.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < kingMoving7.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(kingMoving7[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									kingMoving7.splice(i,1);
								}
							}
						}
					}
					for (var i =  0 ; i < kingMoving8.length ; i++){
						for(var k = 0 ; k <piecePosition.length ; k++){
							if(kingMoving8[i]==piecePosition[k]){
								if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
									kingMoving8.splice(i,1);
								}
							}
						}
					}

					kingMoving = kingMoving1.concat(kingMoving2,kingMoving3,kingMoving4,kingMoving5,kingMoving6,kingMoving7,kingMoving8);
					
					//相手の駒が効いている場所に動けないようにする
					for (var i =  0 ; i < kingMoving.length ; i++){
						for(var k = 0 ; k <allMovingBlack.length ; k++){
							if(kingMoving[i]==allMovingBlack[k]){
									kingMoving[i]=0;
							}
						}
					}
					//相手の駒が効いている場所に動けないようにする--end--

					//kingMovingから0をカット
					kingMoving = $.grep(kingMoving, function (value) {  
		        	return value != 0;  
		   			});

					kingMovingWhite = kingMoving;
					
					allMovingWhite = allMovingWhite.concat(kingMoving);
				}

			}
		}
	}
	allMovingWhite = $.unique(allMovingWhite);

}

