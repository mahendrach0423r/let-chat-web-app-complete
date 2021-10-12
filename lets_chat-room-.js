
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyBKU3D69Oe55V39ORLetagV7Iw0VRjHDOk",
      authDomain: "lets-chat-web-643b9.firebaseapp.com",
      databaseURL: "https://lets-chat-web-643b9-default-rtdb.firebaseio.com",
      projectId: "lets-chat-web-643b9",
      storageBucket: "lets-chat-web-643b9.appspot.com",
      messagingSenderId: "907171476482",
      appId: "1:907171476482:web:782cd925b68d3d83e4231b",
      measurementId: "G-90C2SD305F"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);


user_name = localStorage.getItem("username");
    document.getElementById("welcome").innerHTML = "WELCOME" + user_name + "!";


    function addroom()
    {
          roomname = document.getElementById("room_name").value;
          
          firebase.database().ref("/").child(roomname).update({
                purpose : "Adding Room Name"
          });

          localStorage.setItem("roomname" , roomname);

       window.location = "kwitter.html";
}

       function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; 
      Room_names = childKey;

    console.log("Room-name" + Room_names);
    row = "<div class='room_name'  id="+Room_names + "oncilck='redirectToRoomName(this.id)' >#"+ Room_names +"</div></hr>";
    document.getElementById("output").innerHTML += row;


}); });
    
}

   getData();

   function redirectToRoomName(name)
   {
         console.log(name);
         localStorage.setItem("room_name" , name);
         window.location = "kwitter_page.html";

   }

   function logout()
   {
         localStorage.removeItem("user_name");
         localStorage.removeItem("room_name");
         window.location="index.html";
   }
