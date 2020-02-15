const loginInputAnimation = () => {
    const loginEmail =  document.querySelector('#login-email');
    const emailUnderline = document.querySelector('#login-email-underline');
    const loginPassword = document.querySelector('#login-password');
    const passwordUnderline = document.querySelector('#login-password-underline');
    loginEmail.addEventListener("input", () => {
      if (loginEmail.value.length > 0){
        loginEmail.style.width = ((loginEmail.value.length*1.82) + "rem");
        emailUnderline.style.width = ((loginEmail.value.length*1.82) + "rem");
      } else {
        loginEmail.style.width = "9rem";
        emailUnderline.style.width = 0;
      }
    })
    loginPassword.addEventListener("input", () => {
      if (loginPassword.value.length > 0){
        loginPassword.style.width = ((loginPassword.value.length * 1.4) + "rem");
        passwordUnderline.style.width = ((loginPassword.value.length * 1.4) + "rem");
      } else {
        loginPassword.style.width = "15rem";
        passwordUnderline.style.width = 0;
      }
    })
}
export default loginInputAnimation;