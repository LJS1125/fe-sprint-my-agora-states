let elinputusername = document.querySelector('#username')
let password1 = document.querySelector('#password')

let password2 = document.querySelector('#password-retype')

let fail = document.querySelector('.failure-messege')
let success = document.querySelector('.success-messege')
let mismatch = document.querySelector('.mismatch-messege')


elinputusername.onkeyup = function () {
    console.log(elinputusername.value)
    if (ismorethan4lenghth(elinputusername.value)) {
        //성공메세지 띄우기 삭제메세지 가리기
        success.classList.remove('hide')

        fail.classList.add('hide')

    }
    else{
        //성공메세지 가리기 삭제메세지 띄우기
        success.classList.add('hide')
        fail.classList.remove('hide')
   
    }
}

password2.onkeyup = function () {
  if (isMatch(password1.value,password2.value)) {
    mismatch.classList.remove('hide')// 비밀번호 일치  
}
else{
  mismatch.classList.add('hide') // 비밀번호 불일치
}
}

function ismorethan4lenghth(value) {
    return value.length >= 4;
}

function isMatch (password1, password2) {
 return password1 === password2;
}


