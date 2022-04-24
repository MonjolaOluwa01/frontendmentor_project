const form = document.getElementById('form')
const firstname = document.getElementById('firstname');
const submitBtn = document.getElementById('submitBtn');
const lastname = document.getElementById("lastname");
const password = document.getElementById("password");
const email = document.getElementById("email");
const small = document.querySelector(".msg");


            form.addEventListener('submit' , (e) => {
                
                    e.preventDefault();
        

                checkInputs();
            });

            function checkInputs(){
                //get the values from the inputs
                const firstnameValue = firstname.value.trim();
                const lastnameValue = lastname.value.trim();
                const emailValue = email.value.trim();
                const passwordValue = password.value.trim();

                if (firstnameValue === ""){
                    //show error
                  setErrorFor(firstname, "firstname cannot be blank");

                }
                else{
                    setErrorFor(firstname, "");
                }
            }
            function setErrorFor(input, message){
                const formControl = input.parentElement;
                const small = formControl.querySelector('.msg');

                small.innerText = message;

                formControl.className = "formControl error";

            }
            firstname.oninput = function(){
                {
                    if(firstname.value.length > 0)
                        firstname.style.border = "4px solid  hsl(246, 25%, 77%)";
                    }

                }
                
                lastname.oninput = function(){
                    {
                        if(lastname.value.length > 0)
                            lastname.style.border = "4px solid  hsl(246, 25%, 77%)";
                        }
                    }
                    password.oninput = function(){
                        {
                            if(password.value.length > 0)
                                password.style.border = "4px solid  hsl(246, 25%, 77%)";
                            }
                        }
                        email.oninput = function(){
                            {
                                if(email.value.length > 0)
                                    email.style.border = "4px solid  hsl(246, 25%, 77%)";
                                }
                            }
                
                            submitBtn.onclick = function(){
                                if(firstname.value.length > 0 && lastname.value.length > 0 && password.value.length > 0 && email.value.length > 0)
                                {
                                  submitBtn.innerHTML = "Login successful";
                                }
                                else{
                                    msg.innerHTML = "Inputs cannot be empty";
                                }
                            }