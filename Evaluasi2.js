var n = 9;

(1.)for (y = 0; y < n; y++) {
    for (x = 0; x < n; x++) {
      if (x === 4 || y === 4 || y === x || x === n - y - 1) {
        document.write('+');
      } else {
        document.write('-')
      }
    }
    document.write('<br>');
  }

  document.write('<br>');



(2.) for (y = 0; y < n; y++) {
    for (x = 0; x < n; x++) {
      if (y === x || x === y - 2 || x === y - 4 || x === y - 6 || x === y - 8) {
        document.write('+');
      } else if (x === y + 2 || x === y + 4 || x === y + 6 || x === y + 8){
        document.write('+')
      } else {
        document.write('-')
      }
    }
      document.write('<br>');
    }
    

(3.)var a = [{id:1, name:'John'},
       {id:2 , name:'ali'}];
    
    var capitalize = a.map(function(string){
      return string.name.toUpperCase()
    })
    
    document.write(capitalize)
    
    document.write('<br>');


(4.)    var jualMobil = {
        iklan:function(){
            document.write(`BU , saya ${this.nama}, jual mobil ${this.merek} , tahun ${this.tahun} ,bekas`)
        }
     }

     var jual = Object.create(jualMobil);
     
     jual.nama = 'Tompel';
     jual.merek = 'Avanza';
     jual.tahun = 2017;
     jual.iklan();
