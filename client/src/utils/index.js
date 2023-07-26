import {surpriseMePrompts} from '../constants';

import FileSaver from 'file-saver';

//Funcion para obtener prompts aleatorios de ejemplo al usuario
export function getRandomPrompt(prompt){
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if(randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}

//Funcion para poder descargar una imagen
export async function downloadImage(_id, photo){
  FileSaver.saveAs(photo, `download-${_id}.jpg`);
}