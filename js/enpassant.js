						
function enpassant(){

		//アンパッサン後コマを消す
		if(enpassantFlag==1&&selectedId<400&&(preSelectedId==preEnpassantObjectsId1||preSelectedId==preEnpassantObjectsId2) &&selectedId== preEnpassantMoveable&& $("#td"+selectedId+" a").hasClass("pawn")){
			var enpassantDelete = preEnpassantMoveable+100;
			console.log(enpassantDelete);
			$("#td"+enpassantDelete).empty();
			preEnpassantMoveable = 0;
			preEnpassantObjectsId1 = 0;
			preEnpassantObjectsId2 = 0;
		}else if(enpassantFlag==1&&selectedId>600&&(preSelectedId==preEnpassantObjectsId1||preSelectedId==preEnpassantObjectsId2) &&selectedId== preEnpassantMoveable&& $("#td"+selectedId+" a").hasClass("pawn")){
			var enpassantDelete = preEnpassantMoveable-100;
			console.log(enpassantDelete);
			$("#td"+enpassantDelete).empty();
			preEnpassantMoveable = 0;
			preEnpassantObjectsId1 = 0;
			preEnpassantObjectsId2 = 0;
		}

		enpassantFlag=0;
		enpassantMoveable=0;
		enpassantObjectsId1=0;
		enpassantObjectsId2=0;
		//白アンパッサン条件判定
		if (selectedId>400 && selectedId<500 && $("#td"+selectedId+" a").hasClass("black")&& $("#td"+selectedId+" a").hasClass("pawn")&&preSelectedId<300 ) {	
			enpassantFlag=1;
			enpassantMoveable=selectedId-100;//アンパッサンで動けるID
			preEnpassantMoveable=enpassantMoveable;
			enpassantObjectsId1=selectedId-1;//アンパッサン実行可能ID左	
			preEnpassantObjectsId1= enpassantObjectsId1
			enpassantObjectsId2=selectedId+1;//アンパッサン実行可能ID右
			preEnpassantObjectsId2 = enpassantObjectsId2;
		//黒
		}else if(selectedId>500 && selectedId<600 && $("#td"+selectedId+" a").hasClass("white")&&$("#td"+selectedId+" a").hasClass("pawn")&&preSelectedId>700 ){
			enpassantFlag=1;
			enpassantMoveable=selectedId+100;//アンパッサンで動けるID
			preEnpassantMoveable=enpassantMoveable;
			enpassantObjectsId1=selectedId-1;//アンパッサン実行可能ID左	
			preEnpassantObjectsId1= enpassantObjectsId1
			enpassantObjectsId2=selectedId+1;//アンパッサン実行可能ID右
			preEnpassantObjectsId2 = enpassantObjectsId2;
		}
		console.log("enpassantFlag="+enpassantFlag);

}

