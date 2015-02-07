function rookPromote(){
		if ($("#td"+selectedId+" a").hasClass("black")){
			$("#td"+selectedId).html("<a href='#' class='rook black'><span class='chess_pieces'>e</span></a>");
		} else{
			$("#td"+selectedId).html("<a href='#' class='rook white'><span class='chess_pieces'>E</span>/a>");
		}
	}

function knightPromote(){
		if ($("#td"+selectedId+" a").hasClass("black")){
			$("#td"+selectedId).html("<a href='#' class='knight black'><span class='chess_pieces'>d</span></a>")
		} else{
			$("#td"+selectedId).html("<a href='#' class='knight white'><span class='chess_pieces'>D</span></a>")
		}
	}

function bishopPromote(){
		if ($("#td"+selectedId+" a").hasClass("black")){
			$("#td"+selectedId).html("<a href='#' class='bishop black'><span class='chess_pieces'>c</span></a>")
		} else{
			$("#td"+selectedId).html("<a href='#' class='bishop white'><span class='chess_pieces'>C</span></a>")
		}
	}

function queenPromote(){
		if ($("#td"+selectedId+" a").hasClass("black")){
			$("#td"+selectedId).html("<a href='#' class='queen black'><span class='chess_pieces'>b</span></a>")
		} else{
			$("#td"+selectedId).html("<a href='#' class='queen white'><span class='chess_pieces'>B</span></a>")
		}
	}

