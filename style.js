function popUp(){
    // hide home Screen
    const homeScreen = document.getElementById('home-screen');
    homeScreen.classList.add('hidden');
    // Show PopUp
    const openPopup = document.getElementById('open-popup');
    openPopup.classList.remove('hidden');
}