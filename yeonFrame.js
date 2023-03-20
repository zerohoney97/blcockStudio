const id = document.getElementById('id')
const pw = document.getElementById('pw')
const login = document.getElementById('login')

login.addEventListener('click', () => {
    if (id.value =='qwer' || pw.value == '123456789a'){
        alert('로그인이 완료되었습니다!')
        
        
    }else{
        alert('다시한번 더 입력해주세요')

    }
})