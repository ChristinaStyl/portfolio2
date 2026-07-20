const analytics = document.createElement("script");
analytics.async = true;
analytics.src = "https://www.googletagmanager.com/gtag/js?id=G-HT8G1W6HE6";

document.head.appendChild(analytics);


window.dataLayer = window.dataLayer || [];

function gtag(){
    dataLayer.push(arguments);
}

gtag('js', new Date());

gtag('config', 'G-HT8G1W6HE6');
