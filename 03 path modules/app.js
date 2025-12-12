import path from 'path';

// path.basename() menghasilkan bagian terakhir dari sebuah path dengan lebih spesifik
let result = path.basename('/public/home/index.html')
console.log(result);
// ext parameter menyaring extensi dari file yang dihasilkan
let result2 = path.basename('/public/home/index.html', '.html')
console.log(result2);

// path.dirname(path) method untuk mengembalikan nama direktori dari path yang ditentukan
let result3 = path.dirname('/public/home/index.html');
console.log(result3);

// path.extname() method yang mengembalikan extensi dari path file
console.log(path.extname('index.html'))
console.log(path.extname('app.js'))
console.log(path.extname('node.js.md'))

// path.format() method yang mengembalikan path berbentuk string dari sebuah object
let pathToFile = path.format({
  dir: 'public/home/js/',
  base: 'app.js'
});

console.log(pathToFile);

// path.isAbsolute() mengembalikan true jika penulisan direktori path benar
let result4 = path.isAbsolute('c:\\node.js\\');
console.log(result4);

result4 = path.isAbsolute('C:/node.js/');
console.log(result4);

result4 = path.isAbsolute('/node.js');
console.log(result4);

result4 = path.isAbsolute('home/');
console.log(result4);

result4 = path.isAbsolute('.');
console.log(result4);

// path.join() method menghubungkan path segment secara terurut dengan menggunakan pembatas dan menormalisasikan hasil path
let pathToDir = path.join('/home', 'js', 'dist', 'app.js')
console.log(pathToDir);

// path.parse(path) mengembalikan objek dari properti yang merepresentasikan path element terdiri dari root, dir, base, name, dan extention
let pathObj = path.parse('d:/web development/nodejs/app.js');
console.log(pathObj);

// path.normalize() method menormalisasikan path yang ditentukan. 
let pathToDir2 = path.normalize('C:\\node.js/module/js//dist');
console.log(pathToDir2);

// path.relative(from, to) menerima dua argumen dan mengembalikan path relative antara kedua path tersebut
let relativepath = path.relative('/home/user/config/', '/home/user/js/');
console.log(relativepath);