document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menuToggle');
    const menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('show');
        overlay.classList.toggle('show');
        menuToggle.classList.toggle('hide'); // メニュー表示時にメニュートグルボタンを非表示にする
    });

    overlay.addEventListener('click', function () {
        menu.classList.remove('show');
        overlay.classList.remove('show');
        menuToggle.classList.remove('hide'); // メニュー非表示時にメニュートグルボタンを表示にする
    });

    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            menu.classList.remove('show');
            overlay.classList.remove('show');
            menuToggle.classList.remove('hide'); // メニュー非表示時にメニュートグルボタンを表示にする
        });
    });
});
