const getCine = async() =>{
    const id = new URLSearchParams(window.location.search).get('id')
    const web1 = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/${id}`)//cine
    if(web1.status == 200){
        const cine = await (web1.json())
        let html = 
        `
        <h2>${cine.RazonSocial}</h2>
		<p>${cine.Direccion} - "${cine.Detalle}</p>
		<p>Teléfono: ${cine.Telefono} anexo </p>
        `;
        document.getElementById('contenido-interno').innerHTML = html;
    }
	const web2 = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/${id}/tarifas`)//semana
    if(web2.status == 200){
		const cine1 = await (web2.json())
		let html1 = `<div class="cine-info peliculas">`
		cine1.forEach( cines =>{
			html1 +=
			`
			<div class="tabla">
				<div class="fila">
					<div class="celda-titulo">${cines.DiasSemana}</div>
					<div class="celda">${cines.Precio}</div>
				</div>
			</div>
			`
		});
		html1 +=
		`
		<div class="aviso">
			<p>A partir del 1ro de julio de 2016, Cinestar Multicines realizará el cobro de la comisión de S/. 1.00 adicional al tarifario vigente, a los usuarios que compren sus entradas por el aplicativo de Cine Papaya para Cine Star Comas, Excelsior, Las Américas, Benavides, Breña, San Juan, UNI, Aviación, Sur, Porteño, Tumbes y Tacna.</p>
		</div>
		`
		document.getElementById('contenido-interno').innerHTML = html1;
	}
	const web3 = await fetch(`https://oaemdl.es/cinestar_sweb_php/cines/${id}/peliculas`)//hora
    if(web3.status == 200){
        const cine2 = await (web3.json())
		let html2 =
		`
		<div class="fila">
			<div class="celda-cabecera">Películas</div>
			<div class="celda-cabecera">Horarios</div>
		
		`
		cine2.forEach( peli =>{
			html2 +=
			`
			<div class="fila impar">
				<div class="celda-titulo">${peli.Titulo}</div>
				<div class="celda">${peli.Horarios}</div>
			</div>
			`
		});
		html2 +=
			`</div>`
		document.getElementById('contenido-interno').innerHTML = html2;
	}
}
getCine();
