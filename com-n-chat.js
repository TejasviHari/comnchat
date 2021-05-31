var firebaseConfig = {
    apiKey: "AIzaSyDEn3eBIQga2365KznAL44a7qPz2qje0gM",
    authDomain: "comnchat-619f2.firebaseapp.com",
    databaseURL: "https://comnchat-619f2-default-rtdb.firebaseio.com",
    projectId: "comnchat-619f2",
    storageBucket: "comnchat-619f2.appspot.com",
    messagingSenderId: "637572272763",
    appId: "1:637572272763:web:5425cb4788392f6767c8de"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("user_name");
document.getElementById("welcome").innerHTML="Welcome "+username+"!";

function addRoom(){
    room_name=document.getElementById("room").value;
    firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name" 
        });
     localStorage.setItem("room_name", room_name);
      window.location = "chat-page.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot)
 { document.getElementById("available_rooms").innerHTML = "";
 snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
     Room_names = childKey;
      console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("available_rooms").innerHTML += row; });
 });
 }

 getData();
  function redirectToRoomName(name) { console.log(name);
     localStorage.setItem("room_name", name);
      window.location = "chat-page.html";
     }

     function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location.replace("kwitter.html");
        }