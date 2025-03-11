// Função para confirmar exclusão (se necessário no futuro)
function confirmAction(message) {
    return confirm(message);
  }
  
  // Exemplo de validação básica para formulários
  document.addEventListener('DOMContentLoaded', () => {
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
      form.addEventListener('submit', (e) => {
        const inputs = form.querySelectorAll('input, textarea, select');
        let isValid = true;
  
        inputs.forEach(input => {
          if (!input.value.trim()) {
            isValid = false;
            input.classList.add('is-invalid');
          } else {
            input.classList.remove('is-invalid');
          }
        });
  
        if (!isValid) {
          e.preventDefault();
          alert('Por favor, preencha todos os campos obrigatórios.');
        }
      });
    });
  });