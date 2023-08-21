const imgInput = document.querySelector('#file-input')
const imgEl = document.querySelector('#img')

imgInput.addEventListener('change', () => {
  if (imgInput.files && imgInput.files[0]) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imgEl.src = e.target.result;
    }
    reader.readAsDataURL(imgInput.files[0]);
  }
})