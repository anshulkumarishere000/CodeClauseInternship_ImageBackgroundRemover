let imageURL;

function submitHandler() {
    console.log("click");
    const fileInput = document.getElementById('fileInput');
    console.log(fileInput.files);
    const image = fileInput.files[0];


    const formData = new FormData();
    formData.append('image_file', image);
    formData.append('size', 'auto');

    const apiKey = "DpNw7M1a3PqusvQNc2gV11qo";

    fetch('https://api.remove.bg/v1.0/removebg', {
        method: 'POST',
        headers: {
            'X-Api-Key': apiKey
        },
        body: formData
    })
        .then(function (reponse) {
            return reponse.blob()
        })
        .then(function (blob) {
            console.log(blob);
            const url = URL.createObjectURL(blob);
            imageURL = url;
            const img = document.createElement('img');
            img.src = url;
            document.querySelector("#div1").appendChild(img);
        })
        .catch();
}

function downloadFile() {
    var a = document.createElement('a');
    a.href = imageURL;
    a.download = '';
    document.body.appendChild(a);
    a.click();

    document.body.removeChild(a);
}

function reset() {
    location.reload();
}
