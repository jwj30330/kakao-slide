const $content = $('.slide-content a');
const $img = $('.slide-img');
let nowIdx = 0;

$content.on('click', function (evt) {
	evt.preventDefault();

	nowIdx = $content.index(this);

	$img.animate({ left: -478 * nowIdx });

	$content.eq(nowIdx).parent().addClass('on');
	$content.eq(nowIdx).parent().siblings().removeClass('on');
});

$('.slide-next').on('click', function (evt) {
	evt.preventDefault();
	if (nowIdx < $img.length + 4) {
		nowIdx++;
	} else {
		nowIdx = 0;
	}

	$img.animate({ left: -478 * nowIdx });

	$content.eq(nowIdx).parent().addClass('on');
	$content.eq(nowIdx).parent().siblings().removeClass('on');
});
$('.slide-prev').on('click', function (evt) {
	evt.preventDefault();
	if (nowIdx > 0) {
		nowIdx--;
	} else {
		nowIdx = 5;
	}
	$img.animate({ left: -478 * nowIdx });

	$content.eq(nowIdx).parent().addClass('on');
	$content.eq(nowIdx).parent().siblings().removeClass('on');
});
