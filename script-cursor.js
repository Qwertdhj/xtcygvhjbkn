var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 20,
                top: posY - 20
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(document).on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$(".text-one span").on("mouseenter", function () {
    cursor.addClass("activeTwo");
    follower.addClass("activeTwo");
});

$(".text-one span").on("mouseleave", function () {
    cursor.removeClass("activeTwo");
    follower.removeClass("activeTwo");
});

$(".text-two span").on("mouseenter", function () {
    cursor.addClass("active");
    follower.addClass("active");
});

$(".text-two span").on("mouseleave", function () {
    cursor.removeClass("active");
    follower.removeClass("active");
});

$(".text-one-slider-general span").on("mouseenter", function () {
    cursor.addClass("activeTwo");
    follower.addClass("activeTwo");
});

$(".text-one-slider-general span").on("mouseleave", function () {
    cursor.removeClass("activeTwo");
    follower.removeClass("activeTwo");
});

$(".text-two-slider-general span").on("mouseenter", function () {
    cursor.addClass("active");
    follower.addClass("active");
});

$(".text-two-slider-general span").on("mouseleave", function () {
    cursor.removeClass("active");
    follower.removeClass("active");
});

$(".button-slider-one a").on("mouseenter", function () {
    cursor.addClass("activeButton");
    follower.addClass("activeButton");
});

$(".button-slider-one a").on("mouseleave", function () {
    cursor.removeClass("activeButton");
    follower.removeClass("activeButton");
});
$(".prevTwo img").on("mouseenter", function () {
    cursor.addClass("activePrev");
    follower.addClass("activePrev");
});

$(".prevTwo img").on("mouseleave", function () {
    cursor.removeClass("activePrev");
    follower.removeClass("activePrev");
});

$(".nextTwo img").on("mouseenter", function () {
    cursor.addClass("activeNext");
    follower.addClass("activeNext");
});

$(".nextTwo img").on("mouseleave", function () {
    cursor.removeClass("activeNext");
    follower.removeClass("activeNext");
});


(function () {

    const link = document.querySelectorAll('nav > .hover-this');

    const animateit = function (e) {
        const span = this.querySelector('span');
        const { offsetX: x, offsetY: y } = e,
            { offsetWidth: width, offsetHeight: height } = this,

            move = 15,
            xMove = x / width * (move * 2) - move,
            yMove = y / height * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') span.style.transform = '';
    };

    link.forEach(b => b.addEventListener('mousemove', animateit));
    link.forEach(b => b.addEventListener('mouseleave', animateit));
    window.addEventListener('mousemove', editCursor);

})();