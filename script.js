const translations = {
    en: {
        landingTitle: "Hi, i'm Topamiliongames!",

        videoMain: "🟠 Counter-Strike 2",
        videoAmbient: "🌍 Minecraft",
        videoDynamic: "💲 Grand Theft Auto V",
    },
    ru: {
        landingTitle: "Привет, я Topamiliongames!",

        videoMain: "🟠 Контр-Страйк 2",
        videoAmbient: "🌍 Майнкрафт",
        videoDynamic: "💲 Grand Theft Auto V",
    }
};


function showIndevModal() {
    const modal = document.getElementById('indevModal');
    modal.style.display = 'block';
}

function closeIndevModal() {
    const modal = document.getElementById('indevModal');
    modal.style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('indevModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

  let titleText = " Topamiliongames";
  let delay = 300;

  function animateTitle() {
    document.title = titleText;
    titleText = titleText.slice(1) + titleText[0];
    setTimeout(animateTitle, delay);
  }

  animateTitle();
