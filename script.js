function computerChoice(){
    var comp = Math.round(Math.random() * 3);
    if(comp === 1) return 'gunting';
    if(comp === 2) return 'batu';
    return'kertas';   
}

function getResult(computer, player){
    if(player === computer) return 'SERI!';
    if(player === 'gunting') return (computer === 'kertas') ? 'MENANG!' : 'KALAH:(';
    if(player === 'batu') return (computer === 'gunting') ? 'MENANG!' : 'KALAH:(';
    if(player === 'kertas') return (computer === 'batu') ? 'MENANG!' : 'KALAH:(';
}

const choiceGunting = document.querySelector('.gunting');
const choiceBatu = document.querySelector('.batu');
const choiceKertas = document.querySelector('.kertas');

choiceGunting.addEventListener('click', function(){
    const computer = computerChoice();
    const player = choiceGunting.className;
    const result = getResult(computer, player);

    const imgComp = document.querySelector('.img-computer');
    imgComp.setAttribute('src', `img-comp/${computer}.png`);

    const info = document.querySelector('.info');
    info.innerHTML = result;
})

choiceBatu.addEventListener('click', function(){
    const computer = computerChoice();
    const player = choiceBatu.className;
    const result = getResult(computer, player);

    const imgComp = document.querySelector('.img-computer');
    imgComp.setAttribute('src', `img-comp/${computer}.png`);

    const info = document.querySelector('.info');
    info.innerHTML = result;
})

choiceKertas.addEventListener('click', function(){
    const computer = computerChoice();
    const player = choiceKertas.className;
    const result = getResult(computer, player);

    const imgComp = document.querySelector('.img-computer');
    imgComp.setAttribute('src', `img-comp/${computer}.png`);

    const info = document.querySelector('.info');
    info.innerHTML = result;
})