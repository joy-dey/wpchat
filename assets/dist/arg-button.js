(() => {
    let targetScript = document.querySelector('[data-wpchat]'),
        allScripts = document.getElementsByTagName('script')[1],
        root = document.documentElement,
        buttonType = targetScript.getAttribute("data-type"),
        buttonText = targetScript.getAttribute("data-text"),
        phNo = targetScript.getAttribute("data-user"),
        preMessage = targetScript.getAttribute("data-message").replace(/ /g, '%20'),
        position = targetScript.getAttribute("data-pos"),
        theme = targetScript.getAttribute("data-theme"),
        whatsAppIconButton = `<svg width="20" height="20" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 5px">
        <path d="M12.04 2.25C6.58005 2.25 2.13005 6.7 2.13005 12.16C2.13005 13.91 2.59005 15.61 3.45005 17.11L2.05005 22.25L7.30005 20.87C8.75005 21.66 10.38 22.08 12.04 22.08C17.5 22.08 21.9501 17.63 21.9501 12.17C21.9501 9.52 20.92 7.03 19.05 5.16C17.18 3.28 14.69 2.25 12.04 2.25ZM12.05 3.92C14.25 3.92 16.31 4.78 17.87 6.34C19.42 7.9 20.2801 9.97 20.2801 12.17C20.2801 16.71 16.58 20.4 12.04 20.4C10.56 20.4 9.11005 20.01 7.85005 19.25L7.55005 19.08L4.43005 19.9L5.26005 16.86L5.06005 16.54C4.24005 15.25 3.80005 13.72 3.80005 12.16C3.81005 7.62 7.50005 3.92 12.05 3.92ZM8.53005 7.58C8.37005 7.58 8.10005 7.64 7.87005 7.89C7.65005 8.14 7.00005 8.75 7.00005 9.96C7.00005 11.18 7.89005 12.35 8.00005 12.52C8.14005 12.69 9.76005 15.19 12.25 16.25C12.84 16.52 13.3 16.67 13.66 16.78C14.25 16.97 14.79 16.94 15.22 16.88C15.7 16.81 16.68 16.28 16.89 15.7C17.1 15.12 17.1 14.63 17.04 14.52C16.97 14.42 16.81 14.36 16.56 14.25C16.31 14.11 15.09 13.51 14.87 13.43C14.64 13.35 14.5 13.31 14.31 13.55C14.15 13.8 13.67 14.36 13.53 14.52C13.38 14.69 13.24 14.71 13 14.59C12.74 14.46 11.94 14.2 11 13.36C10.26 12.7 9.77005 11.89 9.62005 11.64C9.50005 11.4 9.61005 11.25 9.73005 11.14C9.84005 11.03 10 10.85 10.1 10.7C10.23 10.56 10.27 10.45 10.35 10.29C10.43 10.12 10.39 9.98 10.33 9.86C10.27 9.75 9.77005 8.51 9.56005 8.02C9.36005 7.54 9.16005 7.6 9.00005 7.59C8.86005 7.59 8.70005 7.58 8.53005 7.58Z" fill="white"/>
        </svg>`,
        whatsAppIconFAB = `<svg width="24" height="24" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.04 2.25C6.58005 2.25 2.13005 6.7 2.13005 12.16C2.13005 13.91 2.59005 15.61 3.45005 17.11L2.05005 22.25L7.30005 20.87C8.75005 21.66 10.38 22.08 12.04 22.08C17.5 22.08 21.9501 17.63 21.9501 12.17C21.9501 9.52 20.92 7.03 19.05 5.16C17.18 3.28 14.69 2.25 12.04 2.25ZM12.05 3.92C14.25 3.92 16.31 4.78 17.87 6.34C19.42 7.9 20.2801 9.97 20.2801 12.17C20.2801 16.71 16.58 20.4 12.04 20.4C10.56 20.4 9.11005 20.01 7.85005 19.25L7.55005 19.08L4.43005 19.9L5.26005 16.86L5.06005 16.54C4.24005 15.25 3.80005 13.72 3.80005 12.16C3.81005 7.62 7.50005 3.92 12.05 3.92ZM8.53005 7.58C8.37005 7.58 8.10005 7.64 7.87005 7.89C7.65005 8.14 7.00005 8.75 7.00005 9.96C7.00005 11.18 7.89005 12.35 8.00005 12.52C8.14005 12.69 9.76005 15.19 12.25 16.25C12.84 16.52 13.3 16.67 13.66 16.78C14.25 16.97 14.79 16.94 15.22 16.88C15.7 16.81 16.68 16.28 16.89 15.7C17.1 15.12 17.1 14.63 17.04 14.52C16.97 14.42 16.81 14.36 16.56 14.25C16.31 14.11 15.09 13.51 14.87 13.43C14.64 13.35 14.5 13.31 14.31 13.55C14.15 13.8 13.67 14.36 13.53 14.52C13.38 14.69 13.24 14.71 13 14.59C12.74 14.46 11.94 14.2 11 13.36C10.26 12.7 9.77005 11.89 9.62005 11.64C9.50005 11.4 9.61005 11.25 9.73005 11.14C9.84005 11.03 10 10.85 10.1 10.7C10.23 10.56 10.27 10.45 10.35 10.29C10.43 10.12 10.39 9.98 10.33 9.86C10.27 9.75 9.77005 8.51 9.56005 8.02C9.36005 7.54 9.16005 7.6 9.00005 7.59C8.86005 7.59 8.70005 7.58 8.53005 7.58Z" fill="white"/>
        </svg>`,
        whatsappLink = `https://api.whatsapp.com/send?phone=91${phNo}&text=${preMessage}`;

    loadStylesheet();
    createButton();
    root.style.setProperty('--position', 'fixed');
    root.style.setProperty('--background', theme);
    root.style.setProperty('--shadow', `${theme}66`);

    function createButton() {
        let b = document.createElement('button');
        if (buttonType === 'button') {
            b.classList.add("arg-button");
            b.innerHTML = `${whatsAppIconButton}${buttonText}`;

        } else {
            b.classList.add("arg-fab");
            b.innerHTML = `${whatsAppIconFAB}`;
        }
        switch (position) {
            case 'top':
                b.classList.add("is-top");
                break;
            case 'bottom':
                b.classList.add("is-bottom");
                break;
            case 'left':
                b.classList.add("is-left");
                break;
            case 'static':
                b.classList.add("is-static");
                break;
        }
        allScripts.parentNode.insertBefore(b, allScripts);
        b.addEventListener('click', () => {
            location.href = whatsappLink;
        });
    }

    function loadStylesheet() {
        let url = 'https://cdn.jsdelivr.net/gh/joy-dey/wpchat/assets/dist/arg-button-min.css',
            stylesheetLink = document.createElement('link');
        stylesheetLink.rel = "stylesheet";
        stylesheetLink.href = url;
        document.head.insertBefore(stylesheetLink, document.head.lastElementChild);
    }
})();