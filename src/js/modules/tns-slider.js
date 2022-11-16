





export const tnsSingle = () =>{
  let tnsSingleVar = document.getElementById('tnsSingle');
  if(tnsSingleVar!=null){


  let slider = tns({ 
    container           : '#tnsSingle',
    items               : 1, 
    slideBy             : 1,
    speed               : 1000,
    mode                : 'gallery',
    mouseDrag           : true,
    controlsText: [ 
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>'
    ]
  }); 
};  

}
	

