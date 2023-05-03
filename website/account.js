// Get the currently logged-in user
const user = firebase.auth().currentUser;

// Get a reference to the user's data in the database
const userRef = firebase.database().ref('users/' + user.uid);

// Listen for changes in the user's data
userRef.on('value', (snapshot) => {
  // Get the user's data from the snapshot
  const userData = snapshot.val();

  // Update the HTML with the user's username and email
  const usernameElement = document.getElementById('username');
  const emailElement = document.getElementById('email');
  usernameElement.innerText = userData.username;
  emailElement.innerText = userData.email;
});
