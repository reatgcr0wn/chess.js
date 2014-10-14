moveableId = [];



function moveableBlack(){
		for (var i = 0;i<=8;i++) {
			for (var k = 0;k<=8;k++) {
				$("#td"+i*10+k).removeClass("moveable");
			}
		}
	
	//コマの種類を判定
	if (pieceColor == "black") {
		if (piece == "pawn") {
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).removeClass("moveable");
			}
			console.log(selectedId);
			if (selectedId > 200 && selectedId < 300 ) {
				moveableId = new Array(selectedId+100,selectedId+200,0);
			}else{
				moveableId = new Array(selectedId+100,0,0);
			}
			for (var i =  0 ; i < moveableId.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId[i]==piecePosition[k]){
						moveableId.splice(i,3);
					}
				}
			}
			//斜めにコマがあったら取れる
			for(var k = 0 ; k <piecePosition.length ; k++){
				if( selectedId+100+1==piecePosition[k] && $("#td"+piecePosition[k]+" a").hasClass("white") ){
					moveableId.push(selectedId+100+1);
				}
				if( selectedId+100-1==piecePosition[k] && $("#td"+piecePosition[k]+" a").hasClass("white") ){
					moveableId.push(selectedId+100-1);
				}
			}
		

			if (enpassantFlag==1 && selectedId>500&&selectedId<600&&(selectedId==enpassantObjectsId1||selectedId==enpassantObjectsId2)) {
				moveableId.push(enpassantMoveable);
			}
			console.log("moveableId="+moveableId);
			
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).addClass("moveable");
			}
		}

		if (piece == "rook") {
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).removeClass("moveable");
			}
			var moveableId1 = new Array(selectedId+1,selectedId+2,selectedId+3,selectedId+4,selectedId+5,selectedId+6,selectedId+7);//右
			var moveableId2 = new Array(selectedId-1,selectedId-2,selectedId-3,selectedId-4,selectedId-5,selectedId-6,selectedId-7);//左
			var moveableId3 = new Array(selectedId+100,selectedId+200,selectedId+300,selectedId+400,selectedId+500,selectedId+600,selectedId+700);//下
			var moveableId4 = new Array(selectedId-100,selectedId-200,selectedId-300,selectedId-400,selectedId-500,selectedId-600,selectedId-700);//上
			
			//途中に駒がある場合それ以降進めなくする	
			for (var i =  0 ; i < moveableId1.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId1[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId1.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//相手の駒のとき
							moveableId1.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId2.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId2[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId2.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId2.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId3.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId3[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId3.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId3.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId4.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId4[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId4.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId4.splice(i+1,7);
						}
					}
				}
			}

			console.log(moveableId1)
			moveableId = moveableId1.concat(moveableId2,moveableId3,moveableId4);
			
			console.log("moveableId="+moveableId);
			
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).addClass("moveable");
			}
		}

		if (piece == "knight") {
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).removeClass("moveable");
			}
			var moveableId1 = new Array(selectedId+200+1,0,0);
			var moveableId2 = new Array(selectedId+200-1,0,0);
			var moveableId3 = new Array(selectedId+100+2,0,0);
			var moveableId4 = new Array(selectedId+100-2,0,0);
			var moveableId5 = new Array(selectedId-100+2,0,0);
			var moveableId6 = new Array(selectedId-100-2,0,0);
			var moveableId7 = new Array(selectedId-200+1,0,0);
			var moveableId8 = new Array(selectedId-200-1,0,0);
			
			for (var i =  0 ; i < moveableId1.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId1[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId1.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId2.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId2[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId2.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId3.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId3[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId3.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId4.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId4[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId4.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId5.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId5[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId5.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId6.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId6[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId6.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId7.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId7[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId7.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId8.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId8[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId8.splice(i,1);
						}
					}
				}
			}
			moveableId = moveableId1.concat(moveableId2,moveableId3,moveableId4,moveableId5,moveableId6,moveableId7,moveableId8);
			console.log("moveableId="+moveableId);
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).addClass("moveable");
			}
		}

		if (piece == "bishop") {
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).removeClass("moveable");
			}
			var moveableId1 = new Array(selectedId-100-1,selectedId-200-2,selectedId-300-3,selectedId-400-4,selectedId-500-5,selectedId-600-6,selectedId-700-7);
			var moveableId2 = new Array(selectedId-100+1,selectedId-200+2,selectedId-300+3,selectedId-400+4,selectedId-500+5,selectedId-600+6,selectedId-700+7);
			var moveableId3 = new Array(selectedId+100-1,selectedId+200-2,selectedId+300-3,selectedId+400-4,selectedId+500-5,selectedId+600-6,selectedId+700-7);
			var moveableId4 = new Array(selectedId+100+1,selectedId+200+2,selectedId+300+3,selectedId+400+4,selectedId+500+5,selectedId+600+6,selectedId+700+7);
			
			for (var i =  0 ; i < moveableId1.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId1[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId1.splice(i,7);

						}
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//相手の駒のとき
							moveableId1.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId2.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId2[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId2.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId2.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId3.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId3[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId3.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId3.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId4.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId4[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId4.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId4.splice(i+1,7);
						}
					}
				}
			}

			moveableId = moveableId1.concat(moveableId2,moveableId3,moveableId4);
			console.log("moveableId="+moveableId);
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).addClass("moveable");
			}
		}

		if (piece == "queen") {
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).removeClass("moveable");
			}
			var moveableId1 = new Array(selectedId+100+1,selectedId+200+2,selectedId+300+3,selectedId+400+4,selectedId+500+5,selectedId+600+6,selectedId+700+7);
			var moveableId2 = new Array(selectedId+100-1,selectedId+200-2,selectedId+300-3,selectedId+400-4,selectedId+500-5,selectedId+600-6,selectedId+700-7);
			var moveableId3 = new Array(selectedId-100+1,selectedId-200+2,selectedId-300+3,selectedId-400+4,selectedId-500+5,selectedId-600+6,selectedId-700+7);
			var moveableId4 = new Array(selectedId-100-1,selectedId-200-2,selectedId-300-3,selectedId-400-4,selectedId-500-5,selectedId-600-6,selectedId-700-7);
			var moveableId5 = new Array(selectedId+1,selectedId+2,selectedId+3,selectedId+4,selectedId+5,selectedId+6,selectedId+7);
			var moveableId6 = new Array(selectedId-1,selectedId-2,selectedId-3,selectedId-4,selectedId-5,selectedId-6,selectedId-7);
			var moveableId7 = new Array(selectedId+100,selectedId+200,selectedId+300,selectedId+400,selectedId+500,selectedId+600,selectedId+700);
			var moveableId8 = new Array(selectedId-100,selectedId-200,selectedId-300,selectedId-400,selectedId-500,selectedId-600,selectedId-700);

			for (var i =  0 ; i < moveableId1.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId1[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId1.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//相手の駒のとき
							moveableId1.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId2.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId2[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId2.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId2.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId3.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId3[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId3.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId3.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId4.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId4[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId4.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId4.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId5.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId5[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId5.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//相手の駒のとき
							moveableId5.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId6.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId6[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId6.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId6.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId7.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId7[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId7.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId7.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId8.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId8[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId8.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId8.splice(i+1,7);
						}
					}
				}
			}
			moveableId = moveableId1.concat(moveableId2,moveableId3,moveableId4,moveableId5,moveableId6,moveableId7,moveableId8);
			console.log("moveableId="+moveableId);
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).addClass("moveable");
			}
		}

		if (piece == "king") {
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).removeClass("moveable");
			}
			var moveableId1 = new Array(selectedId-100-1,0,0);
			var moveableId2 = new Array(selectedId-100,0,0);
			var moveableId3 = new Array(selectedId-100+1,0,0);
			var moveableId4 = new Array(selectedId-1,0,0);
			var moveableId5 = new Array(selectedId+1,0,0);
			var moveableId6 = new Array(selectedId+100-1,0,0);
			var moveableId7 = new Array(selectedId+100,0,0);
			var moveableId8 = new Array(selectedId+100+1,0,0);

			for (var i =  0 ; i < moveableId1.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId1[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId1.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId2.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId2[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId2.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId3.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId3[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId3.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId4.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId4[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId4.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId5.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId5[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId5.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId6.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId6[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId6.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId7.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId7[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId7.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId8.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId8[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//自分の駒のとき
							moveableId8.splice(i,1);
						}
					}
				}
			}

			moveableId = moveableId1.concat(moveableId2,moveableId3,moveableId4,moveableId5,moveableId6,moveableId7,moveableId8);
			
			//相手の駒が効いている場所に動けないようにする
			for (var i =  0 ; i < moveableId.length ; i++){
				for(var k = 0 ; k <allMovingWhite.length ; k++){
					if(moveableId[i]==allMovingWhite[k]){
							moveableId[i]=0;
					}
				}
			}
			//相手の駒が効いている場所に動けないようにする--end--
			//moveableIdから0をカット
			moveableId = $.grep(moveableId, function (value) {  
        	return value != 0;  
   			});

			console.log("moveableId="+moveableId);
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).addClass("moveable");
			}
		}

	}


	if (pieceColor =="") {
		for (var i = 0;i<=8;i++) {
			for (var k = 0;k<=8;k++) {
				$("#td"+i*10+k).removeClass("moveable");
			}
		}
		moveableId = [];
	}

 preSelectedId= selectedId;

}


function moveableWhite() {  //コマの色が白

	for (var i = 0;i<=8;i++) {
			for (var k = 0;k<=8;k++) {
				$("#td"+i*10+k).removeClass("moveable");
			}
	}

	if (pieceColor == "white") {
		if (piece == "pawn") {
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).removeClass("moveable");
			}
			console.log(selectedId);
			if (selectedId > 700 && selectedId < 800 ) {
				moveableId = new Array(selectedId-100,selectedId-200);
			}else{
				moveableId = new Array(selectedId-100,0);
			}

			for (var i =  0 ; i < moveableId.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId[i]==piecePosition[k]){
							moveableId.splice(i,3);
					}
				}
			}

			for(var k = 0 ; k <piecePosition.length ; k++){
				if(selectedId-100+1==piecePosition[k] && $("#td"+piecePosition[k]+" a").hasClass("black")){
					moveableId.push(selectedId-100+1);
				}
				if(selectedId-100-1==piecePosition[k] && $("#td"+piecePosition[k]+" a").hasClass("black")){
					moveableId.push(selectedId-100-1);
				}
			}

			if (enpassantFlag==1&& selectedId>400&&selectedId<500&&(selectedId==enpassantObjectsId1||selectedId==enpassantObjectsId2)) {
				moveableId.push(enpassantMoveable);
			}
			console.log("moveableId="+moveableId)
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).addClass("moveable");
			}
		}

		if (piece == "rook") {
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).removeClass("moveable");
			}
			var moveableId1 = new Array(selectedId+1,selectedId+2,selectedId+3,selectedId+4,selectedId+5,selectedId+6,selectedId+7);
			var moveableId2 = new Array(selectedId-1,selectedId-2,selectedId-3,selectedId-4,selectedId-5,selectedId-6,selectedId-7);
			var moveableId3 = new Array(selectedId+100,selectedId+200,selectedId+300,selectedId+400,selectedId+500,selectedId+600,selectedId+700);
			var moveableId4 = new Array(selectedId-100,selectedId-200,selectedId-300,selectedId-400,selectedId-500,selectedId-600,selectedId-700);

			for (var i =  0 ; i < moveableId1.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId1[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId1.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//相手の駒のとき
							moveableId1.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId2.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId2[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId2.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId2.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId3.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId3[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId3.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId3.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId4.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId4[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId4.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId4.splice(i+1,7);
						}
					}
				}
			}

			moveableId = moveableId1.concat(moveableId2,moveableId3,moveableId4);
			
			
			console.log("moveableId="+moveableId);
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).addClass("moveable");
			}
		}

		if (piece == "knight") {
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).removeClass("moveable");
			}
			var moveableId1 = new Array(selectedId+200+1,0,0);
			var moveableId2 = new Array(selectedId+200-1,0,0);
			var moveableId3 = new Array(selectedId+100+2,0,0);
			var moveableId4 = new Array(selectedId+100-2,0,0);
			var moveableId5 = new Array(selectedId-100+2,0,0);
			var moveableId6 = new Array(selectedId-100-2,0,0);
			var moveableId7 = new Array(selectedId-200+1,0,0);
			var moveableId8 = new Array(selectedId-200-1,0,0);
			
			for (var i =  0 ; i < moveableId1.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId1[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId1.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId2.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId2[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId2.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId3.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId3[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId3.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId4.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId4[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId4.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId5.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId5[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId5.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId6.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId6[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId6.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId7.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId7[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId7.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId8.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId8[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId8.splice(i,1);
						}
					}
				}
			}
			moveableId = moveableId1.concat(moveableId2,moveableId3,moveableId4,moveableId5,moveableId6,moveableId7,moveableId8);
			console.log("moveableId="+moveableId);
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).addClass("moveable");
			}
		}

		if (piece == "bishop") {
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).removeClass("moveable");
			}
			var moveableId1 = new Array(selectedId-100-1,selectedId-200-2,selectedId-300-3,selectedId-400-4,selectedId-500-5,selectedId-600-6,selectedId-700-7);
			var moveableId2 = new Array(selectedId-100+1,selectedId-200+2,selectedId-300+3,selectedId-400+4,selectedId-500+5,selectedId-600+6,selectedId-700+7);
			var moveableId3 = new Array(selectedId+100-1,selectedId+200-2,selectedId+300-3,selectedId+400-4,selectedId+500-5,selectedId+600-6,selectedId+700-7);
			var moveableId4 = new Array(selectedId+100+1,selectedId+200+2,selectedId+300+3,selectedId+400+4,selectedId+500+5,selectedId+600+6,selectedId+700+7);
			
			for (var i =  0 ; i < moveableId1.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId1[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId1.splice(i,7);

						}
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//相手の駒のとき
							moveableId1.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId2.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId2[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId2.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId2.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId3.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId3[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId3.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId3.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId4.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId4[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId4.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId4.splice(i+1,7);
						}
					}
				}
			}

			moveableId = moveableId1.concat(moveableId2,moveableId3,moveableId4);
			console.log("moveableId="+moveableId);
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).addClass("moveable");
			}
		}

		if (piece == "queen") {
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).removeClass("moveable");
			}
			var moveableId1 = new Array(selectedId+100+1,selectedId+200+2,selectedId+300+3,selectedId+400+4,selectedId+500+5,selectedId+600+6,selectedId+700+7);
			var moveableId2 = new Array(selectedId+100-1,selectedId+200-2,selectedId+300-3,selectedId+400-4,selectedId+500-5,selectedId+600-6,selectedId+700-7);
			var moveableId3 = new Array(selectedId-100+1,selectedId-200+2,selectedId-300+3,selectedId-400+4,selectedId-500+5,selectedId-600+6,selectedId-700+7);
			var moveableId4 = new Array(selectedId-100-1,selectedId-200-2,selectedId-300-3,selectedId-400-4,selectedId-500-5,selectedId-600-6,selectedId-700-7);
			var moveableId5 = new Array(selectedId+1,selectedId+2,selectedId+3,selectedId+4,selectedId+5,selectedId+6,selectedId+7);
			var moveableId6 = new Array(selectedId-1,selectedId-2,selectedId-3,selectedId-4,selectedId-5,selectedId-6,selectedId-7);
			var moveableId7 = new Array(selectedId+100,selectedId+200,selectedId+300,selectedId+400,selectedId+500,selectedId+600,selectedId+700);
			var moveableId8 = new Array(selectedId-100,selectedId-200,selectedId-300,selectedId-400,selectedId-500,selectedId-600,selectedId-700);

			for (var i =  0 ; i < moveableId1.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId1[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId1.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//相手の駒のとき
							moveableId1.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId2.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId2[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId2.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId2.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId3.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId3[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId3.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId3.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId4.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId4[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId4.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId4.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId5.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId5[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId5.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("black")){//相手の駒のとき
							moveableId5.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId6.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId6[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId6.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId6.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId7.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId7[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId7.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId7.splice(i+1,7);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId8.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId8[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){
							moveableId8.splice(i,7);
						}
						if($("#td"+piecePosition[k]+" a").hasClass("black")){
							moveableId8.splice(i+1,7);
						}
					}
				}
			}
			moveableId = moveableId1.concat(moveableId2,moveableId3,moveableId4,moveableId5,moveableId6,moveableId7,moveableId8);
			console.log("moveableId="+moveableId);
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).addClass("moveable");
			}
		}

		if (piece == "king") {
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).removeClass("moveable");
			}
			var moveableId1 = new Array(selectedId-100-1,0,0);
			var moveableId2 = new Array(selectedId-100,0,0);
			var moveableId3 = new Array(selectedId-100+1,0,0);
			var moveableId4 = new Array(selectedId-1,0,0);
			var moveableId5 = new Array(selectedId+1,0,0);
			var moveableId6 = new Array(selectedId+100-1,0,0);
			var moveableId7 = new Array(selectedId+100,0,0);
			var moveableId8 = new Array(selectedId+100+1,0,0);

			for (var i =  0 ; i < moveableId1.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId1[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId1.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId2.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId2[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId2.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId3.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId3[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId3.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId4.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId4[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId4.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId5.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId5[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId5.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId6.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId6[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId6.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId7.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId7[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId7.splice(i,1);
						}
					}
				}
			}
			for (var i =  0 ; i < moveableId8.length ; i++){
				for(var k = 0 ; k <piecePosition.length ; k++){
					if(moveableId8[i]==piecePosition[k]){
						if($("#td"+piecePosition[k]+" a").hasClass("white")){//自分の駒のとき
							moveableId8.splice(i,1);
						}
					}
				}
			}

			moveableId = moveableId1.concat(moveableId2,moveableId3,moveableId4,moveableId5,moveableId6,moveableId7,moveableId8);
			
			//相手の駒が効いている場所に動けないようにする
			for (var i =  0 ; i < moveableId.length ; i++){
				for(var k = 0 ; k <allMovingBlack.length ; k++){
					if(moveableId[i]==allMovingBlack[k]){
							moveableId[i]=0;
					}
				}
			}
			//相手の駒が効いている場所に動けないようにする--end--

			//moveableIdから0をカット
			moveableId = $.grep(moveableId, function (value) {  
        	return value != 0;  
   			});

			console.log("moveableId="+moveableId);
			for (var i = 0;i<moveableId.length;i++) {
				$("#td"+moveableId[i]).addClass("moveable");
			}
		}
	} 

	if (pieceColor =="") {
		for (var i = 0;i<=8;i++) {
			for (var k = 0;k<=8;k++) {
				$("#td"+i*10+k).removeClass("moveable");
			}
		}
		moveableId = [];
	}

 preSelectedId= selectedId;
}


	