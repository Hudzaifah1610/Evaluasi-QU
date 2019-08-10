// nomor 1
for (n = 16; n >= 0; n-=2) {
    for (h = 16; h >= 0; h-=2) {
      if ( 16- h >= n) {
        document.write (n)
      } else {
        document.write('-' + '')
      }
    } document.write('<br>')
  }

//nomor 2 
for (h = 0; h <= 17; h+=2) {
    for (i = 0; i<= 17; i+=2) {
      if (i < h && h > 16 - i) {
        document.write('B')
      } else if(i > h && i <16 -h) {
    } document.write('<br>')
  }

//nomor 3
let fibonacci = (num) => {
    if (num <= 2) return 1;
    return fibonacci(num-1) +fibonacci(num-2) + fibonacci(num-3);
  }
  
  for (x=0; x<=8; x++) {
    document.write(fibonacci(x) + ' ')
  }