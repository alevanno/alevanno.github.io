var menuAnimation = anime({
    targets: '.menu',
    scale: [1, 30],
    duration: 400,
    autoplay: false,
    easing: 'easeInSine'
})

var menuOptions = anime({
    targets: 'label a',
    translateY: [-50, 0],
    translateX: [30, 0],
    opacity: [0, 1],
    easing: "easeOutExpo",
    autoplay: false,
    duration: 1000,
    delay: anime.stagger(34, { start: 200 })
})

var menuPush = anime({
    targets: '.container',
    translateX: -180,
    translateY: [0, 80],
    duration: 400,
    autoplay: false,
    easing: 'easeInCubic'
})

function openMenu(menuCheckbox) {
    if (menuCheckbox.checked) {
        menuAnimation.play();
        if (menuPush.reversed) {
            menuPush.reverse()
        }
        menuPush.play()
        $('label ul').css("visibility", "visible");
        menuOptions.restart()
    } else {
        anime({
            targets: 'label a',
            opacity: [1, 0],
            autoplay: false,
            duration: 800,
            complete: function () {
                $('label ul').css("visibility", "hidden");
                //anime.remove('label a');
            }
        }).play()
        anime({
            targets: '.menu',
            scale: [30, 1],
            duration: 400,
            autoplay: false,
            easing: 'easeOutSine'
        }).play()
        if (!menuPush.reversed) {
            menuPush.reverse()
        }
        menuPush.play();
    }
}

function animateButton(scale, duration, elasticity, opacity) {
    anime.remove(event.target);
    anime({
        targets: event.target,
        scale: scale,
        duration: duration,
        elasticity: elasticity,
        opacity: opacity
    });
}

function enterButton() { animateButton(1.1, 600, 400, 1) };
function leaveButton() { animateButton(1.0, 500, 300, 0.74) };

$('.ico').mouseenter(enterButton).mouseleave(leaveButton);

$(document).ready(function () {
    $('input:checkbox').prop('checked', false);
});