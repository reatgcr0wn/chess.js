function rookPromote(){
		if ($("#td"+selectedId+" a").hasClass("black")){
			$("#td"+selectedId).html("<a href='#' class='rook black'>&#9820;</a>");
		} else{
			$("#td"+selectedId).html("<a href='#' class='rook white'>&#9814;</a>");
		}
	}

function knightPromote(){
		if ($("#td"+selectedId+" a").hasClass("black")){
			$("#td"+selectedId).html("<a href='#' class='knight black'>&#9822;</a>")
		} else{
			$("#td"+selectedId).html("<a href='#' class='knight white'>&#9816;</a>")
		}
	}

function bishopPromote(){
		if ($("#td"+selectedId+" a").hasClass("black")){
			$("#td"+selectedId).html("<a href='#' class='bishop black'>&#9821;</a>")
		} else{
			$("#td"+selectedId).html("<a href='#' class='bishop white'>&#9815;</a>")
		}
	}

function queenPromote(){
		if ($("#td"+selectedId+" a").hasClass("black")){
			$("#td"+selectedId).html("<a href='#' class='queen black'>&#9819;</a>")
		} else{
			$("#td"+selectedId).html("<a href='#' class='queen white'>&#9813;</a>")
		}
	}

