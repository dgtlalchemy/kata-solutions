// Order words by digit 0 - 9 within them. 
// Example input: "end4 T1his th3e i2s"
// Expected output: "T1his i2s th3e end4"

function order(words){
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}    
