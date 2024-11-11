if (window.jQuery) {
	let result = $(".calculate .result");

	$(".nums li").on("click", function () {

		let clickedText = $(this).text();

		switch (clickedText){
			case '+':
			case '-':
			case '*':
			case '/':
				$('.calculate .request .first').text( result.text() );
				$('.calculate .request .symbol').text(clickedText);
				result.text('');
				break;

			case '=':
				let first = $('.calculate .request .first').text(),
					symbol = $('.calculate .request .symbol').text();
				if(
					first.length !== 0
					&& symbol.length !== 0
					&& result.text().length !== 0
				){
					$('.calculate .request .second').text(result.text());
					result.text( eval( first + symbol + result.text() ) );
				}
				break;

			default:
				if (result.text().indexOf('.') !== -1 && clickedText === '.') {
					return false;
				}

				if (result.text().length === 0 && clickedText === '.') {
					clickedText = "0" + clickedText;
				}

				let number = Number(clickedText);
				if (
					!isNaN(number)
					|| clickedText === '.'
				) {
					$(result).text( $(result).text() + clickedText );
				}
				break;
		}
	});
}
