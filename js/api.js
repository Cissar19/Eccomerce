const dolar = document.querySelector('#dolar');

dolar.addEventListener('click',function(){
    let url = "https://mindicador.cl/api/dolar";
    const api = new XMLHttpRequest(); 
    api.open('GET', url, true)
    api.send();
    api.onreadystatechange = function (){
      if(this.status == 200 && this.readyState == 4)
      {
        let datos = JSON.parse (this.responseText)
        console.log(datos.serie)
        let resultado = document.querySelector('#resultado');
        resultado.innerHTML = '';
        for(let item of datos.serie ){
          resultado.innerHTML +=  `
            <td>${item.fecha.substr(0,10)}</td>
            <td>${item.valor}</td>
            `
        }
  
      }
    }
      console.log("diste click")
    })