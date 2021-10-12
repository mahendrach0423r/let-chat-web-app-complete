function login()
{
    username = document.getElementById("user_name").value;
    password = document.getElementById("password").value;

    localStorage.setItem("username" , username);
    localStorage.setItem("password" , password);

    window.location = "lets_chat_room_.html";

}