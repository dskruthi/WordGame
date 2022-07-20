function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  function onSignIn(googleUser) {
    var id_token = googleUser.getAuthResponse(true).id_token;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://summer22-sps-45.appspot.com/');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
    console.log('Signed in as: ' + xhr.responseText);
    };
    xhr.send('idtoken=' + id_token);

  }



let onSuccess = (googleUser) => {
    async function fetchData(url = "", data = null) {
        const response = await fetch(url, {
            method: "POST",
            credentials: 'same-origin',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json"
            },
            body: data
        });
        if (!response.ok) { throw new error(response); }
        return response.json();
    }
    let body= "id_token=" + googleUser.getAuthResponse().id_token;
    let data = fetchData(<!---Your url--backend.php------> , body);
    console.log(data);
}

  