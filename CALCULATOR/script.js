function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculateResult() {
    try {
      const display = document.getElementById('display');
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }
document.addEventListener('keydown', function(event) {
    if ((event.key >= 0 && event.key <= 9) || ['+', '-', '*', '/'].includes(event.key)) {
      appendToDisplay(event.key);
    } else if (event.key === 'Enter' || event.key === '=') {
      calculateResult();
      event.preventDefault(); 
    } else if (event.key === 'Backspace') {
      backspace();
    } else if (event.key.toLowerCase() === 'c') {
      clearDisplay();
    }
  });
  
  function backspace() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
    
