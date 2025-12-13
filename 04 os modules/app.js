// cara import os modules
import os, { platform } from 'os';
//  os module menyediakan banyak method yang berguna untuk mengetahui sistem operasi dari server
let currentOS = {
  name: os.type(),
  architecture: os.arch(),
  platform: os.platform(),
  release: os.release(),
  version: os.version(),
};

console.log(currentOS);

// mengambil informasi user komputer yang sedang dipakai sekarang os.userInfo()
console.log(os.userInfo());

// os.totalmem() mengembalikan total memory dalam byte dari server
console.log(os.totalmem());

// os.freemem() untuk menghitung memori tersisa dalam byte
console.log(os.freemem());

// os.cpus() untuk mengetahui informasi tentang CPU
console.log(os.cpus());