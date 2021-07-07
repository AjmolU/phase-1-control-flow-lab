const onMe = 'This one is on me!';
const thirtyBucks = 'I will gladly take your thirty bucks.';
const noCanDo = 'No can do.';
const nyc = 'NYC';
const soundsGood = 'Ok, sounds good.';
const noGo = 'No go.';
const thankYouSoMuch = 'Thank you so much.';
const thankYou = 'Thank you.';
const bye = 'Bye.';
const notGenerous = 'not as generous';
const generous = 'generous';

function scuberGreetingForFeet(ft){
  if (ft <= 400) {
    return onMe;
  } else if (ft >= 2000 && ft <= 2500) {
    return thirtyBucks;
  } else {
    return noCanDo;
  }
}

function ternaryCheckCity(city){
  return city.toUpperCase() === nyc ? soundsGood : noGo;
}

function switchOnCharmFromTip(tip){
  let res;
  switch(tip) {
    case generous:
      res = thankYouSoMuch;
      break;
    case notGenerous:
      res = thankYou;
      break;
    default:
      res = bye;
  }
  return res;
}