export const sources = [
 {id:"ard",name:"ARD Mediathek",baseUrl:"https://www.ardmediathek.de/",authorized:false,reason:"official API/permission review required"},
 {id:"zdf",name:"ZDF",baseUrl:"https://www.zdf.de/",authorized:false,reason:"official API/permission review required"},
 {id:"dw",name:"Deutsche Welle",baseUrl:"https://www.dw.com/de/",authorized:false,reason:"official API/permission review required"},
 {id:"srf",name:"SRF",baseUrl:"https://www.srf.ch/",authorized:false,reason:"official API/permission review required"}
];
export const getSource=id=>sources.find(x=>x.id===id)||null;
