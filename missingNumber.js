function findMissingNumbers(arr) {
  let n=Math.max(...arr);
  let newArr=[];
for(let num=1;num<n;num++){
  if(!arr.includes(num)){
    newArr.push(num);
  }
}
  return newArr;
}
  
