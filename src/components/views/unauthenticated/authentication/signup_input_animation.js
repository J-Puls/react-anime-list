const signupInputAnimation = () => {
    const signupUsername =  document.querySelector('#signup-username');
    const usernameUnderline = document.querySelector('#signup-username-underline');
    const signupEmail =  document.querySelector('#signup-email');
    const emailUnderline = document.querySelector('#signup-email-underline');
    const signupPassword = document.querySelector('#signup-password');
    const passwordUnderline = document.querySelector('#signup-password-underline');
    const signupConfirmPassword = document.querySelector('#signup-confirm-password');
    const confirmPasswordUnderline = document.querySelector('#signup-confirm-password-underline');
    signupUsername.addEventListener("input", () => {
        if (signupUsername.value.length > 0){
          signupUsername.style.width = ((signupUsername.value.length*1.15) + "rem");
          usernameUnderline.style.width = ((signupUsername.value.length*1.15) + "rem");
        } else {
          signupUsername.style.width = "14rem";
          usernameUnderline.style.width = 0;
        }
      })
    signupEmail.addEventListener("input", () => {
      if (signupEmail.value.length > 0){
        signupEmail.style.width = ((signupEmail.value.length*1.15) + "rem");
        emailUnderline.style.width = ((signupEmail.value.length*1.15) + "rem");
      } else {
        signupEmail.style.width = "9rem";
        emailUnderline.style.width = 0;
      }
    })
    signupPassword.addEventListener("input", () => {
      if (signupPassword.value.length > 0){
        signupPassword.style.width = ((signupPassword.value.length * .85) + "rem");
        passwordUnderline.style.width = ((signupPassword.value.length * .85) + "rem");
      } else {
        signupPassword.style.width = "9rem";
        passwordUnderline.style.width = 0;
      }
    })
    signupConfirmPassword.addEventListener("input", () => {
        if (signupConfirmPassword.value.length > 0){
          signupConfirmPassword.style.width = ((signupConfirmPassword.value.length * .85) + "rem");
          confirmPasswordUnderline.style.width = ((signupConfirmPassword.value.length * .85) + "rem");
        } else {
          signupConfirmPassword.style.width = "17rem";
          confirmPasswordUnderline.style.width = 0;
        }
      })
}
export default signupInputAnimation;