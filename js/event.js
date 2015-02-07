
function reset () {
	var reset = confirm("リセットしますか？");
	if (reset == true) {
		location.reload();
	};
	  
}

function resign () {
	var resign = confirm("投了しますか？");
	if (resign == true) {
		if (turnCounter%2==1) {
			$("#turn").html("<span class='whiteWin'>Winner: <span class='chess_pieces'>A</span>White</span>");
			alert("白の勝ちです");
			endFlag = 1;
		}else{
			$("#turn").html("<span class='blackWin'>Winner: <span class='chess_pieces'>a</span>Black</span>");
			alert("黒の勝ちです");
			endFlag = 1;
		}
	};
}

var castlingBlack = 0,castlingWhite = 0;

$(function(){
	$('#dialogtext').dialog({
		
        autoOpen: false,    
        modal: true,
        title: 'Castling',
        buttons: {              // ボタン設定
            '← Queen\'s Side': function(){
                queenSideCastling();
                $(this).dialog('close');
            },
            'King\'s Side →': function(){
                kingSideCastling();
                $(this).dialog('close');
            }
        }
    });
    $('#hiddenButton2').click(function(){
        $('#dialogtext').dialog('open');
    });
})


function launchCastling () {
	if(castlingWhite == 0 && turnCounter%2 == 0 && castlingFlagWhite== 0){
		$("#hiddenButton2").click();
	} else if(castlingBlack == 0 && turnCounter%2 == 1 && castlingFlagBlack == 0){
		$("#hiddenButton2").click();
	} else{
		alert("キャスリングできません");
	}
}

cannotCastlingBlackQueen = 0;
cannotCastlingWhiteQueen = 0;
cannotCastlingBlackKing = 0;
cannotCastlingWhiteKing = 0;


function queenSideCastling (){
	var cannnotCastling = 0
	if(turnCounter%2==1){//黒ターン
		for(var i =0;i<allMovingWhite.length;i++){
			if(allMovingWhite[i]==102||allMovingWhite[i]==103||allMovingWhite[i]==104){
				var cannnotCastling = 1
			}
		}
		if($("#td102 a").hasClass("black") || $("#td102 a").hasClass("white") ||$("#td103 a").hasClass("black")||$("#td103 a").hasClass("white") ||$("#td104 a").hasClass("black") ||$("#td104 a").hasClass("white")||checkWhite == 1||cannnotCastling == 1||cannotCastlingBlackQueen ==1){
			alert("キャスリングできません");
		}else{
			$("#td101").empty();
			$("#td105").empty();
			$("#td103").html("<a href='#' class='king black'><span class='chess_pieces'>a</span></a>");
			$("#td104").html("<a href='#' class='rook black'><span class='chess_pieces'>e</span></a>");
			castlingBlack = 1;
			turnChange ();
		}
	} else{//白ターン	
		for(var i =0;i<allMovingBlack.length;i++){
			if(allMovingBlack[i]==802||allMovingBlack[i]==803||allMovingBlack[i]==804){
				var cannnotCastling = 1
			}
		}
		if($("#td802 a").hasClass("black") || $("#td802 a").hasClass("white") ||$("#td803 a").hasClass("black")||$("#td803 a").hasClass("white") ||$("#td804 a").hasClass("black") ||$("#td804 a").hasClass("white")||checkBlack == 1||cannnotCastling == 1||cannotCastlingWhiteQueen == 1){
			alert("キャスリングできません");
		}else{
			$("#td801").empty();
			$("#td805").empty();
			$("#td803").html("<a href='#' class='king white'><span class='chess_pieces'>A</span></a>");
			$("#td804").html("<a href='#' class='rook white'><span class='chess_pieces'>e</span></a>");
			castlingWhite = 1;
			turnChange ();
		}
	}
}

function kingSideCastling () {
	var cannnotCastling = 0
	if(turnCounter%2==1){//黒ターン
		for(var i =0;i<allMovingWhite.length;i++){
			if(allMovingWhite[i]==102||allMovingWhite[i]==103||allMovingWhite[i]==104){
				var cannnotCastling = 1;
			}
		}
		if($("#td106 a").hasClass("black") || $("#td106 a").hasClass("white") ||$("#td107 a").hasClass("black")||$("#td107 a").hasClass("white") ||checkWhite == 1||cannnotCastling == 1||cannotCastlingBlackKing == 1){
			alert("キャスリングできません");
		}else{
			$("#td105").empty();
			$("#td108").empty();
			$("#td107").html("<a href='#' class='king black'><span class='chess_pieces'>a</span></a>");
			$("#td106").html("<a href='#' class='rook black'><span class='chess_pieces'>e</span></a>");
			castlingBlack = 1;
			turnChange ();
		}
	} else{//白ターン	
		for(var i =0;i<allMovingBlack.length;i++){
			if(allMovingBlack[i]==802||allMovingBlack[i]==803||allMovingBlack[i]==804){
				var cannnotCastling = 1
			}
		}
		if($("#td806 a").hasClass("black") || $("#td806 a").hasClass("white") ||$("#td807 a").hasClass("black")||$("#td807 a").hasClass("white") ||checkBlack == 1||cannnotCastling == 1||cannotCastlingWhiteKing == 1){
			alert("キャスリングできません");
		}else{
			$("#td805").empty();
			$("#td808").empty();
			$("#td807").html("<a href='#' class='king white'><span class='chess_pieces'>A</span></a>");
			$("#td806").html("<a href='#' class='rook white'><span class='chess_pieces'>E</span></a>");
			castlingWhite = 1;
			turnChange ();
		}
	}
}

function turnChange () {//キャスリングの後にターン変更
	moveableId = [];
	turnCounter++;
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
				checkWhite = 1 ;
				break;
			}
		}
	}else{//次白
		allMovingBlackF();
		for(var i =0;i<allMovingBlack.length;i++){
			if((allMovingBlack[i]==kingPosition[0]||allMovingBlack[i]==kingPosition[1])&&$("#td"+allMovingBlack[i]+" a").hasClass("white")){
				alert("チェックです");
				checkBlack = 1;
				break;
			}
		}
	}
	for (var i = 0;i<=8;i++) {
		for (var k = 0;k<=8;k++) {
			$("#td"+i*10+k).removeClass("moveable");
		}
	}
	selectFlag =0;
}


