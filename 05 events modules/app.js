import EventEmitter from 'events';

const emmiter = new EventEmitter();

emmiter.on('saved', (arg) => {
  console.log(`A saved event occurred: name: ${arg.name}, id:${arg.id}`);
});

emmiter.emit('saved', {
  id: 1,
  name: "John Doe"
});