function threeMult(){
    var arr = [];
    for(var i = -300; i < 0; i++) {
      if (i === -3) {
        continue;
      }
      if (i === -6) {
        continue;
      }
      if(i % 3 === 0){
        arr.push(i);
      }
    }
    console.log(arr);
}
