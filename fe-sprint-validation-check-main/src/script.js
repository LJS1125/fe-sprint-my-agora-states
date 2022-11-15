// 동영상 강의에 나온 코드를 그대로 실습하세요
console.log('잘 불려왔니?')
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
let elInputUsername = document.querySelector('#username')

let elFailureMessage = document.querySelector('.failure-message')
let elSuccessMessage = document.querySelector('.success-message')

elInputUsername.onkeyup = function () {
  console.log(elInputUsername.value)
  if (isMoreThan4Length(elInputUsername.value)) {
    // 성공메시지 보여야 함
    elSuccessMessage.classList.remove('hide')
    // 실패메시지 가려야 함
    elFailureMessage.classList.add('hide')
  }
  else {
    // 성공메시지 가려야 함
    elSuccessMessage.classList.add('hide')
    // 실패메시지 보여야 함
    elFailureMessage.classList.remove('hide')

  }
}

function isMoreThan4Length(value) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return value.length >= 4
}

// 요기까지 아이디였읍니당!


let password1 = document.querySelector('#password')
let password2 = document.querySelector('#password-retype')

let mismatchMessage = document.querySelector('.mismatch-message')

password1.onkeyup = function () {
  // 비밀번호가 일치하지 않습니다 보여야 함
  mismatchMessage.classList.remove('hide')
  console.log(password1.value)
}
  password2.onkeyup = function () {
    if (isMatch(password1.value, password2.value)){
      console.log(password2.value)
      // 비밀번호가 일치하지 않습니다 안보여야 함
      mismatchMessage.classList.add('hide')
    } else {
      console.log(password2.value)
      mismatchMessage.classList.remove('hide')
    }
  }


function isMatch (password1, password2) {
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
  return password1 === password2
}