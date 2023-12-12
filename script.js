const gameArea = document.querySelector('#gamearea')

//#region --------------------------------------------------------- feltöltünk egy 12 elemű tömböt számokkal 1-től 12-ig
let t = []
for (let i = 0; i < 12; i++) {
  t.push(i + 1)
}
//#endregion -----------------------------------------------------
//#region --------------------------------------------------------- keverés
for (let i = 0; i < 100; i++) {
  let pos1 = Math.floor(Math.random() * 12)
  let pos2 = Math.floor(Math.random() * 12)
  let temp = t[pos1]
  t[pos1] = t[pos2]
  t[pos2] = temp
}
//#endregion -----------------------------------------------------
//#region ----------------------------------------------------------- 12db számdoboz létrehozása
let nextNumber = 1
for (let i = 0; i < 12; i++) {
  let szamDoboz = document.createElement('div')
  szamDoboz.innerText = t[i]
  gameArea.appendChild(szamDoboz)

  szamDoboz.addEventListener('click', function () {
    if (szamDoboz.innerText == nextNumber) {
      szamDoboz.classList.add('rejtett')
      nextNumber++
    }
  })
}
//#endregion ---------------------------------------------------------

//szóval kellene egy számláló

const szamlalo = document.querySelector('#szamlalo')

//A setInterval függvény az első paraméterben megadott függvényt hívja meg,
//A második paraméterben megadott számú (oké nem tudtam, hogy van magyarul :-) Szóval
//A megadott számú milliszekundumonként.
//tehát az alábbi példa másodpercenként futtatja a megadott anonimusz függvényt.
let ido = 0
setInterval(function () {
  szamlalo.innerText = ido
  ido++
}, 1000)

//A következő lépés lesz a számláló elindítása és megállítása, egyelőre írjátok meg ezt a részt.
