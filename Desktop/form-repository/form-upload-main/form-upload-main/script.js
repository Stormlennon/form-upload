const img = document.getElementById("file");
const champ = document.getElementById("champ");

img.addEventListener('change', () => {
    const file = img.files[0]
    //if (file) return

    const image = document.createElement('img')
    image.src = URL.createObjectURL(file)
    image.alt = 'image upload'
    image.style.maxWidth = '100%'

   // champ.innerHTML = ""
    champ.appendChild(image)
})