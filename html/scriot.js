document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === '' || password === '') {
        alert('사용자 이름과 비밀번호를 입력해주세요.');
    } else {
        // 로그인 검증 로직 추가
        alert('로그인 성공!');
    }
});
