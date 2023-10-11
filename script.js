const verse = Math.floor(Math.random() * 6236) + 1;
let prevVerse = verse;
nextVerse(verse);

document.getElementById("next").addEventListener("click", () => {
  nextVerse('next');
});

function nextVerse(verse){
  verse = verse == 'next' ? prevVerse + 1 : verse;
  prevVerse = verse;
  fetch(`https://api.alquran.cloud/v1/ayah/${verse}/bn.hoque`)
  .then((response) => response.json())
  .then((ayatData) => {
    const ayatText = ayatData.data.text;
    const surahNumber = ayatData.data.surah.number;
    const surahName = ayatData.data.surah.name;
    const surahEnglishName = ayatData.data.surah.englishName;
    const numberOfAyat = ayatData.data.surah.numberOfAyahs;
    const numberInSurah = ayatData.data.numberInSurah;
    const page = ayatData.data.page;
    let sajda = ayatData.data.sajda;
    sajda === true ? (sajda = "Yes") : (sajda = "No");
    const juz = ayatData.data.juz;
    const manzil = ayatData.data.manzil;
    const ruku = ayatData.data.ruku;
    const hizbQuarter = ayatData.data.hizbQuarter;

    document.getElementById("ayat").innerHTML = ayatText;
    document.getElementById("suraName").innerHTML = surahEnglishName;
    document.getElementById("ayatNo").innerHTML = numberInSurah;
    document.getElementById("pageNo").innerHTML = page;
    document.getElementById("sijda").innerHTML = sajda;
    document.getElementById("suraNo").innerHTML = surahNumber;
    document.getElementById("totalAyat").innerHTML = numberOfAyat;
    document.getElementById("juz").innerHTML = juz;

    console.log(surahEnglishName);
    console.log(ayatText);
  });

fetch(`http://api.alquran.cloud/v1/ayah/${verse}/ar.alafasy`)
.then((response) => response.json())
.then((ayatData) => {
    const audioFile = ayatData.data.audio;
    document.getElementById("play").src = audioFile;
});
}