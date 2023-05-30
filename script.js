const form = document.getElementById('upload-form');
const input = document.getElementById('pdf-file');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  result.innerHTML = 'Converting...';
  result.style.display = 'block';
  
  const formData = new FormData();
  formData.append('pdf-file', input.files[0]);

  fetch('https://api.example.com/convert-pdf-to-word', {
    method: 'POST',
    body: formData
  })
  .then(response => response.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    result.innerHTML = `<a href="${url}" download="converted.docx">Download Word Document</a>`;
  })
  .catch(error => {
    console.error('Error:', error);
    result.innerHTML = 'Conversion failed';
  });
});