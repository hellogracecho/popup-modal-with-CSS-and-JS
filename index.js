const popupDiv = document.createElement('div');
popupDiv.classList.add('popup-container');

popupDiv.innerHTML = `
<div id="popup_modal">
    <span id="popup_modal_close">&times;</span>
    <h2>
    Oak & Onyx is SOLD OUT!
    </h2>
    <p>Congratulations to all the homebuyers.</p>
    <p>For those that missed out, ML Emporio is excited to continue our legacy in Surrey with some amazing projects in the works! Be the first to receive exclusive updates by registering below.</p>
    <a href="https://mlemporio.ca/connect/" target="_blank" rel="noopener">Click here to register</a>
</div>`;

// insert popup element
document.body.appendChild(popupDiv);

// close popup and set sessionStorage
const closeBtn = document.querySelector('#popup_modal_close');
// open popup and clear sessionStorage
const openBtn = document.querySelector('#popup_modal_open');

closeBtn.addEventListener('click', (e) => {
    popupDiv.classList.add('inactive');
    sessionStorage.setItem('popup_session', 'hide');
});

if (openBtn) {
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (popupDiv.classList.contains('inactive')) {
            popupDiv.classList.remove('inactive');
        }
        if (sessionStorage.getItem('popup_session') === 'hide') {
            sessionStorage.removeItem('popup_session');
        } 
    });
}

// check if sessionStorage is set
if (sessionStorage.getItem('popup_session') === 'hide') {
    popupDiv.classList.add('inactive');
} 