const verse = Math.floor(Math.random() * 6236) + 1;
let prevVerse = verse;

var searchNumber;

document.getElementById("next").addEventListener("click", () => {
  nextSearchBtn('next');
});

document.getElementById("searchBtn").addEventListener("click", () => {
  document.getElementById("next").style.display = "none";
  document.getElementById("nextSearchBtn").style.display = "block";
  const sura = parseInt(document.getElementById("sura").value);
  const verse = parseInt(document.getElementById("verseNo").value);
  searchAyat(sura, verse);
});

document.getElementById("nextSearchBtn").addEventListener("click", () => {
  searchNumber++;
  searchNextVerse(searchNumber);
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
  });

  //fetch arabic ayat
  fetch(`https://api.alquran.cloud/v1/ayah/${verse}`)
  .then((response) => response.json())
  .then((ayatData) => {
    const ayatText = ayatData.data.text;
    const numberInSurah = ayatData.data.numberInSurah;
    document.getElementById("arabicAyat").innerHTML = ayatText + " (" + numberInSurah + ")";
  });
  
  fetch(`http://api.alquran.cloud/v1/ayah/${verse}/ar.alafasy`)
.then((response) => response.json())
.then((ayatData) => {
  const audioFile = ayatData.data.audio;
  document.getElementById("play").src = audioFile;
});
}

function searchAyat(sura, verse){
  fetch(`https://api.alquran.cloud/v1/ayah/${sura}:${verse}/bn.hoque`)
  .then((response) => response.json())
  .then((ayatData) => {
    searchNumber = ayatData.data.number;
    const ayatText = ayatData.data.text;
    const num = ayatData.data.number;
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
  });

  //fetch arabic ayat
  fetch(`https://api.alquran.cloud/v1/ayah/${sura}:${verse}`)
  .then((response) => response.json())
  .then((ayatData) => {
    const ayatText = ayatData.data.text;
    document.getElementById("arabicAyat").innerHTML = ayatText;
  });
}

function searchNextVerse(verse){
  fetch(`https://api.alquran.cloud/v1/ayah/${verse}/bn.hoque`)
  .then((response) => response.json())
  .then((ayatData) => {
    searchNumber = ayatData.data.number;
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
  });
  //fetch arabic ayat
  fetch(`https://api.alquran.cloud/v1/ayah/${verse}`)
  .then((response) => response.json())
  .then((ayatData) => {
    const ayatText = ayatData.data.text;
    document.getElementById("arabicAyat").innerHTML = ayatText;
  });

}
nextVerse(verse);

// change tab
document.getElementById("arabic").addEventListener("click", () => {
  document.getElementById("ayat").style.display = "none";
  document.getElementById("arabicAyat").style.display = "block";
  document.getElementById("arabic").style.backgroundColor = "#ccc";
  document.getElementById("bangla").style.backgroundColor = "#fff";
});

document.getElementById("bangla").addEventListener("click", () => {
  document.getElementById("ayat").style.display = "block";
  document.getElementById("arabicAyat").style.display = "none";
  document.getElementById("bangla").style.backgroundColor = "#ccc";
  document.getElementById("arabic").style.backgroundColor = "#fff";
});

document.getElementById("takeScreenshot").addEventListener("click", () => {
  const ayatContainer = document.querySelector('.ayat-container');

  html2canvas(ayatContainer).then(canvas => {
    // Convert canvas to image and set it as the href for a downloadable link
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'ayat_screenshot.png';
    link.click();
  });
});
