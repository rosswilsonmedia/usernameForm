
function getUsers(){
    fetch('http://localhost:5000/users')
        .then(res =>  res.json())
        .then(data => {
            var users = document.getElementById('users');
            users.innerHTML="";
            for( let i = 0; i < data.length; i++){
                let row = document.createElement('tr');

                let name = document.createElement('td');
                name.innerHTML = data[i].user_name;
                row.appendChild(name);

                let email = document.createElement('td');
                email.innerHTML = data[i].email;
                row.appendChild(email);
                users.appendChild(row);
            }
        })

}
getUsers();

var userRegForm = document.getElementById('userRegForm');
userRegForm.onsubmit = function(e){
    console.log('function runs')
    e.preventDefault();
    var formData= new FormData(userRegForm);
    fetch("/create/user", { method:'POST', body: formData})
        .then( response => response.json() )
        .then( data => console.log(data) )
    document.getElementById('user_name').value="";
    document.getElementById('email').value="";
    getUsers();
}