
pieceColor="";
piece="";
var selectedId=0, selectFlag =0,preSelectedId=0,turnCounter=0,endFlag=0,enpassantFlag=0,enpassantMoveable=0,enpassantObjectsId1=0,enpassantObjectsId2=0,preEnpassantMoveable=0,preEnpassantObjectsId1 = 0,preEnpassantObjectsId2 = 0,checkWhite =0,checkBlack = 0,castlingFlagBlack = 0,castlingFlagWhite = 0;

piecePosition=[];
kingPosition=[];



$(function(){

	var selected;
	$('#hiddenButton').avgrund({
		height: 200,
		holderClass: 'custom',
		showClose: true,
		showCloseText: 'Close',
		enableStackAnimation: true,
		onBlurContainer: '.container',
		template: $('.content'),
	})


    //テーブルがクリックされた時
	$('#chess_board td').on('click',function(){
		if (endFlag!=1) {
			kingPosition=[];
			piecePosition=[];
			//コマの場所を判定しIDをpiecePositionに追加
			for (var i = 1;i<=8;i++) {
				for (var k = 1;k<=8;k++) {
					if($("#td"+i*10+k+" a").hasClass("black")||$("#td"+i*10+k+" a").hasClass("white")){
						piecePosition.push(i*100+k);

					}
					if ($("#td"+i*10+k+" a").hasClass("king")) {
						kingPosition.push(i*100+k);
					}
				}
			}

			pieceColor="";
			piece="";
			//選択したテーブルのハイライト
			if (selected) {
				$(selected).removeClass("selected");//クラスの初期化
			}
			console.log(this);
			selected = this;
			$(this).toggleClass("selected");//クラスを付与
			var $cur_td = $(this)[0]; // 列
			var $cur_tr = $(this).closest('tr')[0]; // 行
			selectedId = Number($cur_td.id.slice(2));//IDの数値を代入
			console.log("selectedId="+selectedId);

			for (var i = 0; i < moveableId.length; i++) {//クリックされた場所が可動範囲の場合
				if (selectedId==moveableId[i] && (($("#td"+preSelectedId+" a").hasClass("black")&&turnCounter%2==1)||($("#td"+preSelectedId+" a").hasClass("white")&&turnCounter%2==0))) {
					console.log("selectedId:"+selectedId+","+"moveableId:"+moveableId);
						$("#td"+preSelectedId).empty(); //選択中のコマを削除
						//キングを取る
						if (selectedId==kingPosition[0]||selectedId==kingPosition[1]) {
							var loseFlag = 1;
						}

						if (this.firstChild) {//移動先に駒がある場合はそれをクリア
							$(this).empty();
						}
						$("#td"+selectedId).append(pieceTag);//コマを移動
						
						//キャスリング不可能
						if ($("#td"+selectedId).hasClass("king")){
							if($("#td"+selectedId).hasClass("black")){
								castlingFlagBlack = 1;
							}
							if($("#td"+selectedId).hasClass("white")){
								castlingFlagWhite = 1;
							}
						}
						if (preSelectedId == 101){
							cannotCastlingBlackQueen = 1;
							console.log("cannotCastlingBlackQueen ="+cannotCastlingBlackQueen);
						}
						if (preSelectedId == 108){
							cannotCastlingBlackKing = 1;
							console.log("cannotCastlingBlackKing ="+cannotCastlingBlackKing);
						}
						if (preSelectedId == 801){
							cannotCastlingWhiteQueen = 1;
							console.log("cannotCastlingWhiteQueen ="+cannotCastlingWhiteQueen);
						}
						if (preSelectedId == 808){
							cannotCastlingWhiteKing = 1;
							console.log("cannotCastlingWhiteKing ="+cannotCastlingWhiteKing);
						}//キャスリング不可能--end--


						//アンパッサン判定
						enpassant();

						//勝ち負け判定
						if (loseFlag) {
							if (turnCounter%2==0) {
								$("#turn").html("<span class='whiteWin'>Winner: <span class='chess_pieces'>A</span>White</span>");
								alert("白の勝ちです");
								endFlag = 1;
							}else{
								$("#turn").html("<span class='blackWin'>Winner: <span class='chess_pieces'>a</span>Black</span>");
								alert("黒の勝ちです");
								endFlag = 1;
							}
						}
						//プロモーション判定
						else if($("#td"+selectedId+" a").hasClass("pawn")&&(selectedId<200||selectedId>800)){
							$("#hiddenButton").click();
						}

						moveableId = [];//可動範囲リセット
						selectFlag = 1;
						turnCounter++;
						
						if(loseFlag!=1){
							//ターン表示
							if (turnCounter%2==0) {
								$("#turn").html("<span class='whiteTurn'><span class='chess_pieces'>A</span> White Moves</span>");
							}else{
								$("#turn").html("<span class='blackTurn'><span class='chess_pieces'>a</span> Black Moves</span>");
							}
							//チェック判定
							checkWhite = 0;
							checkBlack = 0;
							if (turnCounter%2!=0) {//次黒
								allMovingWhiteF();
								for(var i =0;i<allMovingWhite.length;i++){
									if((allMovingWhite[i]==kingPosition[0]||allMovingWhite[i]==kingPosition[1])&&$("#td"+allMovingWhite[i]+" a").hasClass("black")){
										alert("チェックです");
										break;
									}
								}
							}else{//次白
								allMovingBlackF();
								for(var i =0;i<allMovingBlack.length;i++){
									if((allMovingBlack[i]==kingPosition[0]||allMovingBlack[i]==kingPosition[1])&&$("#td"+allMovingBlack[i]+" a").hasClass("white")){
										checkBlack = 1;
										alert("チェックです");
										break;
									}
								}
							}


						}
				}
			}//クリックされた場所が可動範囲の場合--end--

			//選択箇所のコマ判定
			if (this.firstChild) {
			pieceColor = this.firstChild.classList[1]; //コマの色
			piece = this.firstChild.classList[0];//コマの種類
			pieceTag = this.firstChild;//コマを表示するタグ
		}

		if (selectFlag==0) {//"クリックされた場所が可動範囲の場合"を実行した場合、以下は実行されない
			if (turnCounter%2==0) {
					moveableWhite(); //可動範囲のハイライト白
				}else{
					moveableBlack();//可動範囲のハイライト黒
				}

			}else { //selectFlag=1の場合
				for (var i = 0;i<=8;i++) {
					for (var k = 0;k<=8;k++) {
						$("#td"+i*10+k).removeClass("moveable");
					}
				}
				selectFlag =0;
			}
		}
	});
});

