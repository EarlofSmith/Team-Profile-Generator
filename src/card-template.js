
let generateTeam = teamInfo => {
    console.log(teamInfo)

    let card = ''

    for(let i=0; i < teamInfo.length; i++) {
        let lastChoice = teamInfo[i].office || teamInfo[i].gitHub || teamInfo[i].school;
        let set = Object.keys(teamInfo[i]);
        let job = set[4];
        let choice = job + ':' + lastChoice

        if(job === undefined) {
            choice = "";
        } else if (job === 'gitHub') {
            choice = (`GitHub: <a herf ='https://www.github.com/${teamInfo[i].gitHub}'> ${teamInfo[i].gitHub}</a>`)
        } else {
            console.log(choice)
        }

        let {name, id, email, position} = teamInfo[i]

        card +=`
        `
    }
}