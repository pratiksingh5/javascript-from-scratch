let player = {
    name: "Kohli",
    match: 125,
    century: 50
}

// console.log(player.name)

let {name: cricketer, match, century: hundreds} = player;
console.log(hundreds)
