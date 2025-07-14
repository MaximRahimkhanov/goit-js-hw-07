const formElem = document.querySelector(".login-form");

formElem.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const email = formElem.email.value.trim();
  const password = formElem.password.value.trim();

  if (email === "" || password === "") {
    alert('All form fields must be filled in');
    return;
  }

  const UserData = { email, password };
  console.log(UserData);

  formElem.reset();
});


//  formElem.addEventListener('submit', e => {
//     e.preventDefault();
//     const formData = new FormData(formElem);
  
//     if (formElem.email.value === "" || formElem.password.value === "") {
//         alert('All form fields must be filled in');
//         return
//     }
  
//     const userInfo = {
//         email: formData.get('email'),
//         password: formData.get('password'),
//     }
//     console.log(userInfo);
  
//     formElem.reset();
// } )  ;

