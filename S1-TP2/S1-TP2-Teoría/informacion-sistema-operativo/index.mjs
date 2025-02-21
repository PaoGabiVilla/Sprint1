// os proporciona información sobre el sistema donde se ejecuta Node.js
import os from 'os' ;

//s.platform() devuelve el identificador del sistema operativo:
//'win32' → Windows
//'linux' → Linux
//'darwin' → macOS
console.log('Sistema Operative:', os.platform()); 

//os.freemem() devuelve la memoria RAM libre en bytes.
console.log('Memoria Libre:', os.freemem());

