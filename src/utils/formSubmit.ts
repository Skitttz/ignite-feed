import { InvalidEvent } from "react";

export function formatPostSubmit(text: string) {
  const linkRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/gi;
  const paragraphs = text.split('\n').filter(paragraph => paragraph.trim() !== '');
  
  return paragraphs.map(paragraph => {
    if (paragraph && linkRegex.test(paragraph)) {
      const linkContent = (paragraph.match(linkRegex))?.toString();
      if(linkContent){
        return {
          type: 'link',
          content:  linkContent 
        };
      }
    }
    
    return {
      type: 'paragraph',
      content: paragraph.trim()
    };
  });
}

export function isEmptyForm(text:string) : boolean{
  return text.length === 0;
}

export function handleSubmitInvalid (event: InvalidEvent<HTMLTextAreaElement>)  {
  event.target.setCustomValidity('Por favor, preencha este campo, ele é obrigatório.');
};


export function generateDateNowFormatted() {
    const currentDate = new Date();
  
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
    const day = String(currentDate.getDate()).padStart(2, '0');
  
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');
  
    // Format date "YYYY-MM-DDTHH:mm:ss"
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}