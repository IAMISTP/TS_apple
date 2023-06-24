"use strict";
{
    let title = document.querySelector('.title');
    let link = document.querySelector('.link');
    let button = document.querySelector('#button');
    function titleChange() {
        if (title !== null) {
            title.innerHTML = '잘가세요';
        }
    }
    function linkChange() {
        if (link instanceof HTMLAnchorElement) {
            link.href = 'http://www.kakao.com';
        }
    }
    button === null || button === void 0 ? void 0 : button.addEventListener('click', () => {
        console.log('클릭');
    });
    titleChange();
    linkChange();
}
