var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var boundrie1 = createSprite(200, 110,400,10);
var boundrie2 = createSprite(200, 300,400,10);
var start = createSprite(40, 205,70,180);
var end = createSprite(365, 205,70,180);
var sam = createSprite(20, 230,20,20);
var car1 = createSprite(100, 150,20,20);
var car2 = createSprite(166, 260,20,20);
var car3 = createSprite(216, 150,20,20);
var car4 = createSprite(280, 260,20,20);

car1.setVelocity(0,9)
car2.setVelocity(0,-9)
car3.setVelocity(0,9)
car4.setVelocity(0,-9)
sam.shapeColor='blue'
start.shapeColor='yellow'
end.shapeColor='red'
var lives=0


playSpeech("welcome to this game", "male", "English (UK)");

function draw() {
background("white");
createEdgeSprites()
car1.bounceOff(boundrie1)
car2.bounceOff(boundrie1)
car3.bounceOff(boundrie1)
car4.bounceOff(boundrie1)
car1.bounceOff(boundrie2)
car2.bounceOff(boundrie2)
car3.bounceOff(boundrie2)
car4.bounceOff(boundrie2)
if (keyDown(RIGHT_ARROW)) {
sam.x+=5
}
if (keyDown(LEFT_ARROW)) {
sam.x-=5
}
if (sam.isTouching(car1) || sam.isTouching(car2) || sam.isTouching(car3) || sam.isTouching(car4)) {
sam.x=20 
sam.y=230 
 lives+=1
}
textSize(25)
text('lives '+lives,200,70)









drawSprites();
    
}




















// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
