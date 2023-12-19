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
      //itt miután rákattintunk egy számra és az eltűnik, és az volt az utolsó, akkor
      //kell megállítani a számlálót.
      //A setInterval -lal létrehozott időzítő, az időzítő azonosítójának birtokában,
      //A clearInterval paranccsal állítható le.
      if (nextNumber == 13) {
        clearInterval(idozito)
      }
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

//A setintervalnak van egy azonosítója, amit elmentünk az 'idozito' nevű változóba.
//mivel a programunk legkülső buborékában vagyunk az itt létrehozott változókat mindenhonnan
//elérjük: az idozito globális változó
const idozito = setInterval(function () {
  szamlalo.innerText = ido / 10
  ido++
}, 100)
