const input = document.querySelector('input')
const btn = document.querySelector('button')
const pp = document.querySelector('p')
 
function romann(){
    const thousand = ['','m','mm','mmm']
    const hundred = ['','c','cc','ccc','cd','d','dc','dcc','dccc','cm']
    const tenth = ['','x','xx','xxx','xl','l','lx','lxx','lxxx','xc']
    const unith = ['','i','ii','iii','iv','v','vi','vii','viii','ix']

    const data = input.value

    let rf
     
    data.length === 1 ?  rf = unith[data] : data.length === 2 ? rf = tenth[data[0]] + unith[data[1]] : data.length === 3 ? rf = hundred[data[0]] + tenth[data[1]] + unith[data[2]] :data.length ===4 ? rf = thousand[data[0]] + hundred[data[1]] + tenth[data[2]] + unith[data[3]] : rf = 'exceeding'

    
    pp.textContent = rf

}

btn.addEventListener('click', romann)