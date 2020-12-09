var click = 1;

document.querySelector('.Bonjour').addEventListener("click",
  function updateClick() {
    switch (click) {
      case 0:
      document.querySelector('.Bonjour').innerHTML = "Hello";
      break;
      case 1:
      document.querySelector('.Bonjour').innerHTML = "Bonjour";
      break;
      case 2:
      document.querySelector('.Bonjour').innerHTML = "Hola";
      break;
      case 3:
      document.querySelector('.Bonjour').innerHTML = "你好";
      break;
      case 4:
      document.querySelector('.Bonjour').innerHTML = "今日は";
      break;
      case 5:
      document.querySelector('.Bonjour').innerHTML = "Buongiorno";
      break;
      case 6:
      document.querySelector('.Bonjour').innerHTML = "안녕하세요";
      break;
      case 7:
      document.querySelector('.Bonjour').innerHTML = "Hallo";
      break;
      case 8:
      document.querySelector('.Bonjour').innerHTML = "नमस्ते";
      break;
      case 9:
      document.querySelector('.Bonjour').innerHTML = "γεια σας"; //Γειά σας
      break;
      case 10:
      document.querySelector('.Bonjour').innerHTML = "ᐊᐃᓐᖓᐃ";
      break;
      case 11:
      document.querySelector('.Bonjour').innerHTML = "مرحبًا";
      break;
      case 12:
      document.querySelector('.Bonjour').innerHTML = "שלום";
      break;
      case 13:
      document.querySelector('.Bonjour').innerHTML = "สวัสดีครับ";
      break;
      case 14:
      document.querySelector('.Bonjour').innerHTML = ".... . .-.. .-.. ---";
      break;
      case 15:
      document.querySelector('.Bonjour').innerHTML = "01001000 01101001";
      break;

    };

    console.log(click);
    click += 1;
    if (click == 16) {
      click = 0;
    };

    }
  );
