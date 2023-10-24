const verse = Math.floor(Math.random() * 6236) + 1;
let prevVerse = verse;

var searchNumber;

document.getElementById("next").addEventListener("click", () => {
  nextVerse('next');
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
  console.log(searchNumber +"  "+"next click");
  searchNextVerse(searchNumber);
});

function nextVerse(verse){
  verse = verse == 'next' ? prevVerse + 1 : verse;
  prevVerse = verse;
  fetch(`https://api.alquran.cloud/v1/ayah/${verse}/bn.hoque`)
  .then((response) => response.json())
  .then((ayatData) => {
    // searchNumber = ayatData.data.number;
    console.log(searchNumber + " first generate");
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
    
    console.log(surahEnglishName +"default");
    console.log(ayatText);
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
    console.log(searchNumber + "  "+"search button generate");
    const ayatText = ayatData.data.text;
    const num = ayatData.data.number;
    console.log(num);
    const surahNumber = ayatData.data.surah.number;
    console.log(surahNumber+" generate on search ");
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
}

function searchNextVerse(verse){
  fetch(`https://api.alquran.cloud/v1/ayah/${verse}/bn.hoque`)
  .then((response) => response.json())
  .then((ayatData) => {
    searchNumber = ayatData.data.number;
    console.log(searchNumber + "  "+"next button click generate");
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
    
    console.log(surahEnglishName +"default");
    console.log(ayatText);
  });
}
nextVerse(verse);