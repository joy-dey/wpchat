const previewElem = document.querySelector('.arg--button--preview'),
    buttonText = document.querySelector('#buttonText'),
    phoneNumber = document.querySelector('#phone'),
    chatMessage = document.querySelector('#message'),
    position = document.querySelector('#posSelect'),
    widgetType = document.getElementsByName('button'),
    colorPicker = document.querySelector('#colorPicker'),
    formElem = document.querySelector('#generateButton'),
    argButton = document.querySelector('[data-arg]'),
    copyCode = document.querySelector('#copy-code'),
    root = document.documentElement,
    whatsAppIconButton = `<svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 5px">
    <path d="M12.04 2.25C6.58005 2.25 2.13005 6.7 2.13005 12.16C2.13005 13.91 2.59005 15.61 3.45005 17.11L2.05005 22.25L7.30005 20.87C8.75005 21.66 10.38 22.08 12.04 22.08C17.5 22.08 21.9501 17.63 21.9501 12.17C21.9501 9.52 20.92 7.03 19.05 5.16C17.18 3.28 14.69 2.25 12.04 2.25ZM12.05 3.92C14.25 3.92 16.31 4.78 17.87 6.34C19.42 7.9 20.2801 9.97 20.2801 12.17C20.2801 16.71 16.58 20.4 12.04 20.4C10.56 20.4 9.11005 20.01 7.85005 19.25L7.55005 19.08L4.43005 19.9L5.26005 16.86L5.06005 16.54C4.24005 15.25 3.80005 13.72 3.80005 12.16C3.81005 7.62 7.50005 3.92 12.05 3.92ZM8.53005 7.58C8.37005 7.58 8.10005 7.64 7.87005 7.89C7.65005 8.14 7.00005 8.75 7.00005 9.96C7.00005 11.18 7.89005 12.35 8.00005 12.52C8.14005 12.69 9.76005 15.19 12.25 16.25C12.84 16.52 13.3 16.67 13.66 16.78C14.25 16.97 14.79 16.94 15.22 16.88C15.7 16.81 16.68 16.28 16.89 15.7C17.1 15.12 17.1 14.63 17.04 14.52C16.97 14.42 16.81 14.36 16.56 14.25C16.31 14.11 15.09 13.51 14.87 13.43C14.64 13.35 14.5 13.31 14.31 13.55C14.15 13.8 13.67 14.36 13.53 14.52C13.38 14.69 13.24 14.71 13 14.59C12.74 14.46 11.94 14.2 11 13.36C10.26 12.7 9.77005 11.89 9.62005 11.64C9.50005 11.4 9.61005 11.25 9.73005 11.14C9.84005 11.03 10 10.85 10.1 10.7C10.23 10.56 10.27 10.45 10.35 10.29C10.43 10.12 10.39 9.98 10.33 9.86C10.27 9.75 9.77005 8.51 9.56005 8.02C9.36005 7.54 9.16005 7.6 9.00005 7.59C8.86005 7.59 8.70005 7.58 8.53005 7.58Z" fill="white"/>
    </svg>`,
    whatsAppIconFAB = `<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.04 2.25C6.58005 2.25 2.13005 6.7 2.13005 12.16C2.13005 13.91 2.59005 15.61 3.45005 17.11L2.05005 22.25L7.30005 20.87C8.75005 21.66 10.38 22.08 12.04 22.08C17.5 22.08 21.9501 17.63 21.9501 12.17C21.9501 9.52 20.92 7.03 19.05 5.16C17.18 3.28 14.69 2.25 12.04 2.25ZM12.05 3.92C14.25 3.92 16.31 4.78 17.87 6.34C19.42 7.9 20.2801 9.97 20.2801 12.17C20.2801 16.71 16.58 20.4 12.04 20.4C10.56 20.4 9.11005 20.01 7.85005 19.25L7.55005 19.08L4.43005 19.9L5.26005 16.86L5.06005 16.54C4.24005 15.25 3.80005 13.72 3.80005 12.16C3.81005 7.62 7.50005 3.92 12.05 3.92ZM8.53005 7.58C8.37005 7.58 8.10005 7.64 7.87005 7.89C7.65005 8.14 7.00005 8.75 7.00005 9.96C7.00005 11.18 7.89005 12.35 8.00005 12.52C8.14005 12.69 9.76005 15.19 12.25 16.25C12.84 16.52 13.3 16.67 13.66 16.78C14.25 16.97 14.79 16.94 15.22 16.88C15.7 16.81 16.68 16.28 16.89 15.7C17.1 15.12 17.1 14.63 17.04 14.52C16.97 14.42 16.81 14.36 16.56 14.25C16.31 14.11 15.09 13.51 14.87 13.43C14.64 13.35 14.5 13.31 14.31 13.55C14.15 13.8 13.67 14.36 13.53 14.52C13.38 14.69 13.24 14.71 13 14.59C12.74 14.46 11.94 14.2 11 13.36C10.26 12.7 9.77005 11.89 9.62005 11.64C9.50005 11.4 9.61005 11.25 9.73005 11.14C9.84005 11.03 10 10.85 10.1 10.7C10.23 10.56 10.27 10.45 10.35 10.29C10.43 10.12 10.39 9.98 10.33 9.86C10.27 9.75 9.77005 8.51 9.56005 8.02C9.36005 7.54 9.16005 7.6 9.00005 7.59C8.86005 7.59 8.70005 7.58 8.53005 7.58Z" fill="white"/>
    </svg>`;
let widgetValue;
navigator.clipboard;

formElem.addEventListener('submit', (event) => {
    event.preventDefault();
    let encodedMessage = chatMessage.value.replace(/ /g, '%20'),
        vendorUrl = `https://api.whatsapp.com/send?phone=91${phoneNumber.value}&text=${encodedMessage}`;
    console.log(vendorUrl);
    widgetType.forEach(widget => {
        if (widget.checked) {
            widgetValue = widget.value;
            if (widget.value === 'button') {
                console.log(`${widget.value} is selected`);
                if (position.value === 'top') {
                    previewElem.innerHTML = `<button data-arg class="arg-button is-top">${whatsAppIconButton}${buttonText.value}</button>`;
                }
                if (position.value === 'bottom') {
                    previewElem.innerHTML = `<button data-arg class="arg-button is-bottom">${whatsAppIconButton}${buttonText.value}</button>`;
                }
                if (position.value === 'left') {
                    previewElem.innerHTML = `<button data-arg class="arg-button is-left">${whatsAppIconButton}${buttonText.value}</button>`;
                }
                if (position.value === 'static') {
                    previewElem.innerHTML = `<button data-arg class="arg-button is-centered">${whatsAppIconButton}${buttonText.value}</button>`;
                }
            }
            if (widget.value === 'fab') {
                console.log(`${widget.value} is selected`);
                if (position.value === 'top') {
                    previewElem.innerHTML = `<button data-arg class="arg-fab is-top">${whatsAppIconFAB}</button>`;
                }
                if (position.value === 'bottom') {
                    previewElem.innerHTML = `<button data-arg class="arg-fab is-bottom">${whatsAppIconFAB}</button>`;
                }
                if (position.value === 'left') {
                    previewElem.innerHTML = `<button data-arg class="arg-fab is-left">${whatsAppIconFAB}</button>`;
                }
                if (position.value === 'static') {
                    previewElem.innerHTML = `<button data-arg class="arg-fab is-centered">${whatsAppIconFAB}</button>`;
                }
            }

        }
        return widgetValue;
    })
    root.style.setProperty('--background', colorPicker.value);

    copyCode.classList.remove('noview');
    // console.log(`<script data-type="${widgetValue}" data-text="${buttonText.value}" data-user="${phoneNumber.value}" data-message="${chatMessage.value}" data-pos="${position.value}" data-theme="${colorPicker.value}" src="https://cdn.jsdelivr.net/gh/joy-dey/wp-gen/arg-button.min.js"></script>`)

    scrollToTop();
})

function resetForm() {
    buttonText.value = "";
    phoneNumber.value = "";
    chatMessage.value = "";
    colorPicker.value = "#5f7fff";
}
checkType();

function checkType() {
    widgetType.forEach(widget => {
        widget.addEventListener('change', () => {
            switch (widget.value) {
                case 'fab':
                    buttonText.setAttribute('disabled', true);
                    buttonText.value = "";
                    break;
                case 'button':
                    buttonText.removeAttribute('disabled');
                    break;
            }
        })
    })
}

function scrollToTop() {
    window.scrollTo(0, 0);
}
copyCode.addEventListener('click', copySnippet);

async function copySnippet() {
    switch (widgetValue) {
        case 'fab':
            if (!navigator.clipboard) {
                alert('Clipboard not supported');
            } else {
                await navigator.clipboard.writeText(`<script data-wpchat data-type="${widgetValue}" data-user="${phoneNumber.value}" data-message="${chatMessage.value}" data-pos="${position.value}" data-theme="${colorPicker.value}" src="https://cdn.jsdelivr.net/gh/joy-dey/wpchat@latest/assets/js/arg-button-min.js"></script>`);

                copyCode.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7V21H18V23H4C2.9 23 2 22.1 2 21V7H4ZM12.8 15.35L9.5 12.05L10.9 10.65L12.8 12.55L17.1 8.25L18.5 9.65L12.8 15.35ZM20 3C21.1 3 22 3.9 22 5V17C22 18.1 21.1 19 20 19H8C6.9 19 6 18.1 6 17V5C6 3.9 6.9 3 8 3H11.18C11.6 1.84 12.7 1 14 1C15.3 1 16.4 1.84 16.82 3H20ZM14 3C13.45 3 13 3.45 13 4C13 4.55 13.45 5 14 5C14.55 5 15 4.55 15 4C15 3.45 14.55 3 14 3ZM10 7V5H8V17H20V5H18V7H10Z" fill="white"/>
                </svg>
                <span>Copy Successfull</span> 
                `
                setTimeout(() => {
                    copyCode.innerHTML = ` <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M19 21H8V7H19V21ZM19 5H8C7.46957 5 6.96086 5.21071 6.58579 5.58579C6.21071 5.96086 6 6.46957 6 7V21C6 21.5304 6.21071 22.0391 6.58579 22.4142C6.96086 22.7893 7.46957 23 8 23H19C19.5304 23 20.0391 22.7893 20.4142 22.4142C20.7893 22.0391 21 21.5304 21 21V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5V5ZM16 1H4C3.46957 1 2.96086 1.21071 2.58579 1.58579C2.21071 1.96086 2 2.46957 2 3V17H4V3H16V1Z" fill="white"/>
               </svg>
               <span>Copy Code</span>`
                    copyCode.classList.add('noview');
                }, 2000);
            }
            break;
        case 'button':
            if (!navigator.clipboard) {
                alert('Clipboard not supported');
            } else {
                await navigator.clipboard.writeText(`<script data-wpchat data-type="${widgetValue}" data-text="${buttonText.value}" data-user="${phoneNumber.value}" data-message="${chatMessage.value}" data-pos="${position.value}" data-theme="${colorPicker.value}" src="https://cdn.jsdelivr.net/gh/joy-dey/wpchat@latest/assets/js/arg-button-min.js"></script>`);

                copyCode.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7V21H18V23H4C2.9 23 2 22.1 2 21V7H4ZM12.8 15.35L9.5 12.05L10.9 10.65L12.8 12.55L17.1 8.25L18.5 9.65L12.8 15.35ZM20 3C21.1 3 22 3.9 22 5V17C22 18.1 21.1 19 20 19H8C6.9 19 6 18.1 6 17V5C6 3.9 6.9 3 8 3H11.18C11.6 1.84 12.7 1 14 1C15.3 1 16.4 1.84 16.82 3H20ZM14 3C13.45 3 13 3.45 13 4C13 4.55 13.45 5 14 5C14.55 5 15 4.55 15 4C15 3.45 14.55 3 14 3ZM10 7V5H8V17H20V5H18V7H10Z" fill="white"/>
                </svg>
                <span>Copy Successfull</span> 
                `
                setTimeout(() => {
                    copyCode.innerHTML = ` <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 21H8V7H19V21ZM19 5H8C7.46957 5 6.96086 5.21071 6.58579 5.58579C6.21071 5.96086 6 6.46957 6 7V21C6 21.5304 6.21071 22.0391 6.58579 22.4142C6.96086 22.7893 7.46957 23 8 23H19C19.5304 23 20.0391 22.7893 20.4142 22.4142C20.7893 22.0391 21 21.5304 21 21V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5V5ZM16 1H4C3.46957 1 2.96086 1.21071 2.58579 1.58579C2.21071 1.96086 2 2.46957 2 3V17H4V3H16V1Z" fill="white"/>
                </svg>
                <span>Copy Code</span>`
                    copyCode.classList.add('noview');
                }, 2000);
            }
            break;
        default:
            console.log('Error in generating widget');
            break;
    }

}