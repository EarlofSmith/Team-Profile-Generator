
let generateTeam = teamInfo => {
    console.log(teamInfo)

    let card = ''

    for(let i=0; i < teamInfo.length; i++) {
        let lastChoice = teamInfo[i].office || teamInfo[i].gitHub || teamInfo[i].school;
        let set = Object.keys(teamInfo[i]);
        let job = set[4];
        let choice = job + ': ' + lastChoice

        if(job === undefined) {
            choice = "";
        } else if (job === 'gitHub') {
            choice = (`GitHub: <a href = 'https://www.github.com/${teamInfo[i].gitHub}'> ${teamInfo[i].gitHub}</a>`)
            emoji = '&#128083;'
        } else if (job === 'office') {
            emoji = '&#127861;'
        } else if (job === 'school') {
            emoji = '&#127891;'
        }

        let {name, id, email, position} = teamInfo[i]

        card +=`
        <div class="card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <h6 class="card-subtitle mb-2">${position}${emoji}</h6>
                </div>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Employee ID: ${id}</li>
                  <li class="list-group-item">Email: <a href=mailto: ${email}>${email}</a></li>
                  <li class="list-group-item">${choice}</li>
                </ul>
            </div>`
    }

    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Porfile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.6.2.min.js" 
    integrity="sha256-2krYZKh//PcchRtd+H+VyyQoZ/e3EcrkxhM8ycwASPA=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style.css">


</head>

<body>
    <nav class="navbar">
        <div class="navbar-header">
            <span class="navbar-brand">My Team</span>
        </div>
    </nav>

    <main class = "container">
        <div class="row">

        ${card}    


        </div>
    </main>

</body>
</html>`

}

module.exports = generateTeam;