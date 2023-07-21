import {surpriseMePrompts} from '../constants';

//Funcion para obtener prompts aleatorios de ejemplo al usuario
export function getRandomPrompt(prompt){
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if(randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}