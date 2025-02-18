
//returnerar en shufflad array av fem filmer 
export function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    }

    let firstFive = array.slice(0, 5)    
    return firstFive;
  }