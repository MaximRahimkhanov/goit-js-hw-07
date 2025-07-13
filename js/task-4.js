const formElem = document.querySelector(".login-form")
console.log(formElem);

formElem.addEventListener('submit', (evt) => {
    evt.preventDefault()
    const UserData = {
        email: formElem.email.value.trim(),
        password: formElem.password.value.trim(),
    }
    console.log(UserData);
    
   if (UserData.email === "" || UserData.password === "") {
  alert('All form fields must be filled in');
  return;
}
    formElem.reset()
})



// formElem.addEventListener('submit', e => {
//     e.preventDefault();
//     const formData = new FormData(formElem);
  
//     if (formElem.email.value === "" || formElem.password.value === "") {
//         alert('All form fields must be filled in');
//     }
  
//     const userInfo = {
//         email: formData.get('email'),
//         password: formData.get('password'),
//     }
//     console.log(userInfo);
  
//     formElem.reset()
// })   


