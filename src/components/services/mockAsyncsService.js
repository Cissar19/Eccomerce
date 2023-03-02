const databaseItems = [
    {
        id:1,
        title: "Batman: La Broma Asesina - Edición Deluxe En Blanco Y Negro",
        category:"Marvel",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_873213-MLC49233612771_022022-F.webp",
        price:"12.934",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
    {
        id:2,
        title: "Civil War Marvel Must-have",
        category:"Marvel",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_994778-MLC44299215903_122020-F.webp",
        price:"37.136",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
    {
        id:3,
        title: "Marvel El Asombroso Spiderman Vol. 2 - Hasta Que Las Estrellas Se Congelen - Panini",
        category:"Marvel",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_761277-MLC48956739709_012022-F.webp",
        price:"5.923",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
    {
        id:4,
        title: "Marvel Vs Dc (libro Ensayo) - Planeta",
        category:"Marvel",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_727937-MLC48959093648_012022-F.webp",
        price:"2.999",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
    {
        id:5,
        title: "X-men Comic Super Heroes Collection / Marvel",
        category:"Marvel",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_939880-MLC50060957059_052022-F.webp",
        price:"22.999",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
    {
        id:6,
        title: "Civil War Marvel De Luxe",
        category:"Marvel",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_702815-MLA49411115388_032022-F.webp",
        price:"45.999",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
    {
        id:7,
        title: "Marvel Marvel Deluxe: Los Vengadores V/s X-men 1",
        category:"Marvel",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_790726-MLC48329139872_112021-F.webp",
        price:"7.999",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
    {
        id:8,
        title: "Comic Iron Man Tony Stark 1 Un Hombre Hecho A Si Mismo Marvel",
        category:"Marvel",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_935575-MLC46219607021_052021-F.webp",
        price:"22.999",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
    {
        id:9,
        title: "Marvel Thanos - Primer Nueva Trilogía (tapa Dura)",
        category:"Marvel",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_707044-MLC44527026672_012021-F.webp",
        price:"19.999",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
    {
        id:10,
        title: "Marvel Marvel Saga - El Asombroso Spiderman N°16: La Primera Cacería De Kraven (tapa Dura)",
        category:"Marvel",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_979616-MLC44494921291_012021-F.webp",
        price:"11.999",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
    {
        id:11,
        title: "Marvel Veneno - Origen Oscuro (tapa Dura)",
        category:"Marvel",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_796752-MLC44527338270_012021-F.webp",
        price:"14.999",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
    {
        id:12,
        title: "Dk El Libro De Marvel",
        category:"Marvel",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_650725-MLC49786878723_042022-F.webp",
        price:"26.999",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
    {
        id:13,
        title: "Marvel Hombre Araña upgraded suit Spider-Man: No Way Home 57634",
        category:"Funko",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_817324-MLA52223355370_102022-F.webp",
        price:"16.999",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
    {
        id:14,
        title: "Star Wars The Mandalorian 42062 de Funko Pop",
        category:"Funko",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_957567-MLA52224405460_102022-F.webp",
        price:"12.991",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
    {
        id:15,
        title: "Demon Slayer: Kimetsu no Yaiba Muzan Kibutsuji 49014 de Funko Pop",
        category:"Funko",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_758019-MLA50486069725_062022-F.webp",
        price:"44.999",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
    {
        id:16,
        title: "Funko Pop Movies The Batman - The Batman #1187",
        category:"Funko",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_913638-MLC49928303633_052022-F.webp",
        price:"18.995",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
    {
        id:17,
        title: "Funko Pop - Movies - E T - Elliot Y Et (1252)",
        category:"Funko",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_614641-MLC51632356295_092022-F.webp",
        price:"13.996",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
    {
        id:18,
        title: "Funko Pop - Star Wars - Emperor Palpatine (289)",
        category:"Funko",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_666658-MLC41929267883_052020-F.webp",
        price:"25.996",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
    {
        id:19,
        title: "Funko Pop Homero In Hedges 1252 Especial Edition",
        category:"Funko",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_699737-MLC51260143437_082022-F.webp",
        price:"12.999",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
    {
        id:20,
        title: "Star Wars The Mandalorian Mando Con Baby Yoda #461",
        category:"Funko",
        stock:1,
        imgurl:"https://http2.mlstatic.com/D_NQ_NP_2X_978018-MLC48484431255_122021-F.webp",
        price:"8.997",
        detail:"Según el Joker, es lo único que separa cordura y locura. Tras quedar libre una vez más del Psiquiátrico de Arkham, está dispuesto a demostrarlo. Y va a utilizar al mejor policía de Gotham, el comisario Jim Gordon, y a su hija, Barbara"
    },
]

function getItems() {
    return new Promise((resolve, reject) => {
       setTimeout(() =>{
            resolve(databaseItems)
        }, 1)
    })
}

export function getSingleItem(itemid) {
        let intemReq = databaseItems.find((item)=> {
            return item.id === Number(itemid)
        })
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(intemReq)
        }, 1)
    })
}
export function getItemsByCategory(categoryid) {
    let itemsCat = databaseItems.filter((item)=>item.category === categoryid)
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(itemsCat)
        }, 1)
    })
    }

export default getItems