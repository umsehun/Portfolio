window.addEventListener('load', () => {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.classList.add('fade-out');
    
    // 'fade-out' 애니메이션이 완료되면 로딩 화면을 숨깁니다.
    loadingScreen.addEventListener('transitionend', () => {
        loadingScreen.style.display = 'none';
    });

    // 페이지의 나머지 내용을 표시합니다.
    document.getElementById('content').style.display = 'block';
});
