function hitungKalori() {
    const berat = parseFloat(document.getElementById('berat').value);
    const tinggi = parseFloat(document.getElementById('tinggi').value);
    const usia = parseInt(document.getElementById('usia').value);
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const aktivitas = document.getElementById('aktivitas').value;

    let bmr;

    if (gender === "laki-laki") {
        bmr = 66.5 + (13.75 * berat) + (5.003 * tinggi) - (6.75 * usia);
    } else {
        bmr = 655.1 + (9.563 * berat) + (1.850 * tinggi) - (4.676 * usia);
    }

    let kebutuhanKalori;

    switch (aktivitas) {
        case "sedentary":
            kebutuhanKalori = bmr * 1.2;
            break;
        case "light":
            kebutuhanKalori = bmr * 1.375;
            break;
        case "moderate":
            kebutuhanKalori = bmr * 1.55;
            break;
        case "active":
            kebutuhanKalori = bmr * 1.725;
            break;
        case "extra":
            kebutuhanKalori = bmr * 1.9;
            break;
    }

    document.getElementById('bmrResult').innerText = `BMR: ${bmr.toFixed(2)} kalori/hari`;
    document.getElementById('kaloriResult').innerText = `Kebutuhan Kalori Harian: ${kebutuhanKalori.toFixed(2)} kalori/hari`;

    document.getElementById('hasil').style.display = 'block';
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('infoAktivitas').style.display = 'none';
}
