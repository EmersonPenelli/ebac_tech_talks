AOS.init();

const dataDoEvento = new Date("Dec 12,2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaasHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 *24;
    const horaEmMS = 1000 * 60 * 60;
    const minutoEmMS = 1000 * 60

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMS);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMS) / minutoEmMS); 
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMS) / 1000);

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;

    if(distanciaAteOEvento < 0) {
        clearInterval(contaasHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);