var back1, back2, back3, track1, track2, track3
var player, playerCar, playerSprite, playerSpriteIdle
var zombieMove, zombieIdle;
var zombieGroup, zombieGroup2;
var zombieAngle;
var deltaX;
var deltaY;
var distance;
var wallsGroup, muzzleFlashGroup, bulletSprite, bulletsGroup;
var s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, s11, s12, s13, s14, s15, s16, s17, s18, s19, s20, s21, s22, s23, s24, s25, s26, s27, s28, s29, s30, s31, s32, s33, s34, s35, s36, s37, s38, s39, s40, s41, s42, s43, s44, s45, s46, s47, s48, s49, s50, s51, s52, s53, s54, s55, s56, s57, s58, s59, s60, s61, s62, s63, s64, s65, s66, s67, s68, s69, s70, s71, s72, s73, s74, s75, s76, s77, s78, s79, s80, s81, s82, s83, s84, s85, s86, s87, s88, s89, s90, s91, s92, s93, s94, s95, s96, s97, s98, s99, s100;
var score, coin, coinSprite;
var gameState="cutscene1";
var back;
var count=0;
var waveCount = 1;
var zombieMoan;
var levelComplete, levelFailed, levelSprite;
function preload()
{
  track1 = loadImage("Images/desertroadOFFICIAL.png");
  track2 = loadImage("Images/map1OFFICIAL.png");
  //track3 = loadImage("Images/track.jpg");
  playerCar = loadAnimation("Images/carOFFICIAL1.png", "Images/carOFFICIAL2.png");
  cutscene_1 = loadImage("Cutscenes/cutscene_1.jpeg");
  tutorial_1 = loadImage("Cutscenes/tutorial_1.jpeg");
  cutscene_2 = loadImage("Cutscenes/cutscene_2.jpeg");
  tutorial_2 = loadImage("Cutscenes/tutorial_2.jpeg");
  cutscene_3 = loadImage("Cutscenes/cutscene_3.jpeg");


  zombieMove = loadAnimation("Images/zombieOFFICIAL/Move/skeleton-move_0.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_1.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_2.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_3.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_4.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_5.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_6.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_7.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_8.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_9.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_10.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_11.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_12.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_13.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_14.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_15.png",
  "Images/zombieOFFICIAL/Move/skeleton-move_16.png")

  zombieIdle = loadAnimation("Images/zombieOFFICIAL/Idle/skeleton-idle_0.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_1.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_2.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_3.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_4.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_5.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_6.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_7.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_8.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_9.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_10.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_11.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_12.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_13.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_14.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_15.png",
  "Images/zombieOFFICIAL/Idle/skeleton-idle_16.png")

  coin = loadImage("Images/ScoreOFFICIAL/Coin1.png")

  levelComplete = loadImage("Images/levelCompleteScreenOFFICIAL.png");
  levelFailed = loadImage("Images/levelFailed.png");

  playerSprite=loadAnimation("Images/playerOFFICIAL/rifle/move/survivor-move_rifle_0.png",
  "Images/playerOFFICIAL/rifle/move/survivor-move_rifle_1.png",
  "Images/playerOFFICIAL/rifle/move/survivor-move_rifle_2.png",
  "Images/playerOFFICIAL/rifle/move/survivor-move_rifle_3.png",
  "Images/playerOFFICIAL/rifle/move/survivor-move_rifle_4.png",
  "Images/playerOFFICIAL/rifle/move/survivor-move_rifle_5.png",
  "Images/playerOFFICIAL/rifle/move/survivor-move_rifle_6.png",
  "Images/playerOFFICIAL/rifle/move/survivor-move_rifle_7.png",
  "Images/playerOFFICIAL/rifle/move/survivor-move_rifle_8.png",
  "Images/playerOFFICIAL/rifle/move/survivor-move_rifle_9.png",
  "Images/playerOFFICIAL/rifle/move/survivor-move_rifle_10.png",
  "Images/playerOFFICIAL/rifle/move/survivor-move_rifle_11.png",
  "Images/playerOFFICIAL/rifle/move/survivor-move_rifle_12.png",
  "Images/playerOFFICIAL/rifle/move/survivor-move_rifle_13.png",
  "Images/playerOFFICIAL/rifle/move/survivor-move_rifle_14.png",
  "Images/playerOFFICIAL/rifle/move/survivor-move_rifle_15.png",
  "Images/playerOFFICIAL/rifle/move/survivor-move_rifle_16.png",
  "Images/playerOFFICIAL/rifle/move/survivor-move_rifle_17.png",
  "Images/playerOFFICIAL/rifle/move/survivor-move_rifle_18.png",
  "Images/playerOFFICIAL/rifle/move/survivor-move_rifle_19.png");

  playerSpriteIdle = loadAnimation("Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_0.png",
  "Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_1.png",
  "Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_2.png",
  "Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_3.png",
  "Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_4.png",
  "Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_5.png",
  "Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_6.png",
  "Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_7.png",
  "Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_8.png",
  "Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_9.png",
  "Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_10.png",
  "Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_11.png",
  "Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_12.png",
  "Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_13.png",
  "Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_14.png",
  "Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_15.png",
  "Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_16.png",
  "Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_17.png",
  "Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_18.png",
  "Images/playerOFFICIAL/rifle/idle/survivor-idle_rifle_19.png");

  muzzleFlashImage = loadImage("Images/Weapon Effects/Pistol/PistolMuzzleFlash.png");
  bulletSprite = loadImage("Images/Weapon Effects/Rifle/RifleAmmo.png");

  //zombieMoan = loadSound("Sounds/zombieMoan.wav");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  score = 0
 
  back1 = createSprite(windowWidth/2, windowHeight, 1000,500);
  back1.addImage("Level Failed", levelFailed);
  back1.addImage("Cutscene 1", cutscene_1);
  back1.addImage("Tutorial 1", tutorial_1);
  back1.addImage("track1",track1);
  back1.addImage("Cutscene 2", cutscene_2);
  back1.addImage("Tutorial 2", tutorial_2);
  back1.addImage("track2",track2);
  back1.addImage("Cutscene 3", cutscene_3);
  back1.scale = 0.9;

  player = createSprite(windowWidth/2, windowHeight/2+4200,20,50);
  player.addAnimation("player_driving", playerCar);
  player.addAnimation("player_level2", playerSprite);
  player.addAnimation("player_idle", playerSpriteIdle);
  player.scale = 0.17;

  zombieGroup= new Group();
  zombieGroup2 = new Group();
  wallsGroup = new Group();
  muzzleFlashGroup = new Group();
  bulletsGroup = new Group();

  

  spawnZombies();
  spawnZombies2();
  level2Sprites();


  //player.y = -3263
  
}

function draw() {
  rectMode(CENTER);
  background("white");


  if(gameState  === "cutscene1")
  {
  camera.position.x=back1.x
  camera.position.y=back1.y;

    for(var i=0;i<zombieGroup2.length;i++)
    {
        zombieGroup2.get(i).visible=false
    }
    for(var i=0;i<zombieGroup.length;i++)
    {
        zombieGroup.get(i).visible=false
    }
    back1.changeImage("Cutscene 1", cutscene_1)
    back1.scale = 0.45;

    if(keyDown("space"))
    {
      gameState = "tutorial1"
    }
  }

  if(gameState  === "tutorial1")
  {
  camera.position.x=back1.x
  camera.position.y=back1.y;

    for(var i=0;i<zombieGroup2.length;i++)
    {
        zombieGroup2.get(i).visible=false
    }
    for(var i=0;i<zombieGroup.length;i++)
    {
        zombieGroup.get(i).visible=false
    }
    back1.changeImage("Tutorial 1", tutorial_1)
    back1.scale = 0.45;

    if(keyDown("x"))
    {
      gameState = "level1"
    }
  }
  
  //LEVEL1 Starts Here
  if(gameState === "level1")
  {
    camera.position.x=windowWidth/2;
  camera.position.y=player.y;

    back1.changeImage("track1",track1);
    back1.scale = 0.9;
    player.changeImage("player_driving", playerCar);
    
    //dealing with visibility of zombie level2
    for(var i=0;i<zombieGroup2.length;i++)
    {
        zombieGroup2.get(i).visible=false
    }

    for(var i=0;i<zombieGroup.length;i++)
    {
        zombieGroup.get(i).visible=true
    }

    //Control the player
    if(keyDown(UP_ARROW))
    {
      player.y = player.y - 10;
      
    }
  
    if(keyDown(LEFT_ARROW))
    {
      player.x = player.x - 5;
    }
  
    if(keyDown(RIGHT_ARROW))
    {
      player.x = player.x + 5;
    }


   
    for(var i=0;i<zombieGroup.length;i++)
    {
      if(zombieGroup.get(i).isTouching(player))
      {
        zombieGroup.get(i).destroy();
        score = score + 10
  
      }   
      }
      for(var i=0;i<zombieGroup.length;i++)
      {
        if(zombieGroup.length >0 )
        {
          if(player.y-zombieGroup.get(i).y < 300)
          {
          
            zombieGroup.get(i).changeAnimation("moving", zombieMove);
            zombieGroup.get(i).velocityY = 3; 
            //zombieMoan.play();
          }
      }
    }
    
    if(player.y < -2750)
    {
      zombieGroup.destroyEach();

      camera.position.x=windowWidth/2;
      camera.position.y=-2750;

      levelSprite = createSprite(windowWidth/2, -2750);
      levelSprite.addImage("Level Passed", levelComplete);
      levelSprite.scale = 0.5
  
    }

    if(player.y < -3264)
    {
      gameState = "cutscene2"

      camera.position.x=player.x;
      camera.position.y=player.y;
      player.changeAnimation("player_idle", playerSpriteIdle);
      player.x = windowWidth/2 + 60
      player.y = 2220
      

    }
  }

  if(gameState  === "cutscene2")
  {
  camera.position.x=back1.x
  camera.position.y=back1.y;

    for(var i=0;i<zombieGroup2.length;i++)
    {
        zombieGroup2.get(i).visible=false
    }
    for(var i=0;i<zombieGroup.length;i++)
    {
        zombieGroup.get(i).visible=false
    }
    back1.changeImage("Cutscene 2", cutscene_2)
    back1.scale = 0.45;

    if(keyDown("space"))
    {
      gameState = "tutorial2"
    }
  }

  if(gameState  === "tutorial2")
  {
  camera.position.x=back1.x
  camera.position.y=back1.y;

    for(var i=0;i<zombieGroup2.length;i++)
    {
        zombieGroup2.get(i).visible=false
    }
    for(var i=0;i<zombieGroup.length;i++)
    {
        zombieGroup.get(i).visible=false
    }
    back1.changeImage("Tutorial 2", tutorial_2)
    back1.scale = 0.45;

    if(keyDown("x"))
    {
      gameState = "level2"
    }
  }

  else if(gameState === "level2")
  {
    //console.log(windowWidth/2-player.x);
    //console.log(windowHeight/2-player.y);

    player.scale = 0.28;
    camera.position.x=player.x;
    camera.position.y=player.y;
    player.changeAnimation("player_idle", playerSpriteIdle);

    //player.scale = 0.05
    back1.changeImage("track2", track2);
    
    back1.scale = 1.1;

    level2SpritesProp();
    s84.displace(player);
    s84.displace(zombieGroup2);

    for(var i=0;i<zombieGroup.length;i++)
    {
      if(zombieGroup.length >0 )
      {
        zombieGroup.destroy();
      }
    }

    for(var i=0;i<zombieGroup2.length;i++)
    {
      zombieGroup2.get(i).visible=true

      if(zombieGroup2.length > 0)
      {
        //deltaX = player.x - zombieGroup2.get(i).x;
        //deltaY = player.y - zombieGroup2.get(i).y;
        distance = Math. sqrt(((player.x - zombieGroup2.get(i).x) * (player.x - zombieGroup2.get(i).x)) + ((player.y - zombieGroup2.get(i).y) * (player.y - zombieGroup2.get(i).y)));

        if(distance < 500)
        {
          zombieGroup2.get(i).changeAnimation("moving", zombieMove);
          zombieAngle = Math.atan((player.y - zombieGroup2.get(i).y) / (player.x - zombieGroup2.get(i).x)); 
          if (player.x - zombieGroup2.get(i).x < 0)
          {
            zombieAngle = zombieAngle + PI;
          }
          zombieGroup2.get(i).velocityX = 3 * Math.cos(zombieAngle);  
          zombieGroup2.get(i).velocityY = 3 * Math.sin(zombieAngle);
          //zombieMoan.play();

           
        }

        if(zombieGroup2.get(i).isTouching(player))
        {
          player.x = windowWidth/2 + 60
          player.y = windowWidth/2 - (windowWidth/2 - 2220);

          gameState = "failed";
        }

        if(zombieGroup2.get(i).isTouching(bulletsGroup))
        {
          zombieGroup2.get(i).destroy();
          score = score + 10
        } 

         

        

        if(waveCount === 1)
        {
            if(zombieGroup2.length <= 10)
            {
              zombieGroup2.destroyEach();
              waveCount = waveCount + 1;
              spawnZombies2_2();
            }
          
        }
        if(waveCount === 2)
        {
            if(zombieGroup2.length <= 10)
            {
              zombieGroup2.destroyEach();
              waveCount = waveCount + 1;
              spawnZombies2_3();
            }
        }
        if(waveCount === 3)
        {
            if(zombieGroup2.length <= 10)
            {
              zombieGroup2.destroyEach();

              if(keyDown(UP_ARROW))
              {

              }

              if(keyDown(LEFT_ARROW))
              {

              }

              if(keyDown(RIGHT_ARROW))
              {

              }

              if(keyDown(DOWN_ARROW))
              {

              }

              if(keyDown("space"))
              {

              }

              gameState = "cutscene3"
            }
        }
      }

    }

    if(keyDown(UP_ARROW))
    {
      player.changeAnimation("player_level2", playerSprite);
      player.rotation = -90
      player.y = player.y - 5;
    }
  
    if(keyDown(LEFT_ARROW))
    {
      player.changeAnimation("player_level2", playerSprite);
      player.rotation = 180
      player.x = player.x - 5;
    }
  
    if(keyDown(RIGHT_ARROW))
    {
      player.changeAnimation("player_level2", playerSprite);
      player.rotation = 0
      player.x = player.x + 5;
    }

    if(keyDown(DOWN_ARROW))
    {
      player.changeAnimation("player_level2", playerSprite);
      player.rotation = 90
      player.y = player.y + 5;
    }

    if(keyDown("space"))
    {
      spawnBullets();
      fireEffects();
      

      for(var i=0;i<bulletsGroup.length;i++)
      {
        
      }

      if(frameCount%2.5 === 0)
      {
      muzzleFlashGroup.destroyEach();
      }
    }
    else
    {
      muzzleFlashGroup.destroyEach();
    }

    if(player.y > windowHeight/2 + 1730.5)
    {
      camera.position.y= windowHeight/2 + 1730.5;
      camera.position.x=player.x;
    }

    if(player.y < windowHeight/2 - 769.5)
    {
      camera.position.y= windowHeight/2 - 769.5;
    }

    if(player.x < windowWidth/2 - 1000)
    {
      camera.position.x = windowWidth/2 - 1000;
    }

    if(player.x > windowWidth/2 + 1005)
    {
      camera.position.x = windowWidth/2 + 1005;
    }


  }

  if(gameState  === "cutscene3")
  {
  camera.position.x=back1.x
  camera.position.y=back1.y;

    for(var i=0;i<zombieGroup2.length;i++)
    {
        zombieGroup2.get(i).visible=false
    }
    for(var i=0;i<zombieGroup.length;i++)
    {
        zombieGroup.get(i).visible=false
    }
    back1.changeImage("Cutscene 3", cutscene_3)
    back1.scale = 0.45;

  }

  if(gameState === "failed")
  {
    camera.position.x=back1.x
    camera.position.y=back1.y;


    for(var i=0;i<zombieGroup2.length;i++)
    {
      zombieGroup2.get(i).visible=false
    }

    back1.changeImage("Level Failed", levelFailed)
    back1.scale = 1;
        
    if(keyDown("r"))
    {
      gameState = "level2"
    }
  }
  

  drawSprites();
  fill("white");
  textSize(20);
  text("Score: " + score, camera.position.x - 495, camera.position.y - windowHeight/4);

  text("Level: " + gameState, camera.position.x - 495, camera.position.y - windowHeight/4 + 25);

  if(gameState === "cutscene1")
  {
    fill("white");
    textSize(20);
    text("Press Space to continue", camera.position.x, camera.position.y + 250);
  }

  if(gameState === "tutorial1")
  {
    fill("white");
    textSize(20);
    text("Press X to continue", camera.position.x, camera.position.y + 250);
  }

  if(gameState === "cutscene2")
  {
    fill("white");
    textSize(20);
    text("Press Space to continue", camera.position.x, camera.position.y + 250);
  }

  if(gameState === "tutorial2")
  {
    fill("white");
    textSize(20);
    text("Press X to continue", camera.position.x, camera.position.y + 250);
  }

  if(gameState === "level2")
  {
    fill("white");
    textSize(20);
    text("Wave: " + waveCount, camera.position.x - 495, camera.position.y - windowHeight/4);
    text("Zombies Remaining: " + (zombieGroup2.length - 10), camera.position.x - 495, camera.position.y - windowHeight/4 - 25)
  }

  if(gameState === "cutscene3")
  {
    fill("white");
    textSize(20);
    text("Your Score is: " + score, camera.position.x, camera.position.y + 250);
  }



}
//LEVEL 1 
function spawnZombies() 
{
  for (var i=0; i<50; i++) 
  {
    
	  var zombie = createSprite(Math.round(random(windowWidth/2-100,windowWidth/2+100)),Math.round(random(windowHeight/2 - 2984.5, windowHeight/2 + 3515.5)));
	
    zombie.addAnimation("idle",zombieIdle);
    zombie.addAnimation("moving", zombieMove);
    zombie.rotation=90;
	  zombie.scale = 0.3;
	
	  //add each zombie to the group
    zombieGroup.add(zombie);

  }
}
//LEVEL 2
function spawnZombies2() 
{
  for (var i=0; i<30; i++) 
  {
    
	  var zombie = createSprite(Math.round(random(windowWidth/2 - 1420, windowWidth/2 + 1420)),Math.round(random(windowHeight/2 - 1420, windowHeight/2 + 1420)));
	
    zombie.addAnimation("idle",zombieIdle);
    zombie.addAnimation("moving", zombieMove);
    zombie.rotation=90;
    zombie.scale = 0.3;
    zombie.rotateToDirection = true;
    

	
	  //add each zombie to the group
	  zombieGroup2.add(zombie);
  }
}

function spawnZombies2_2() 
{
  for (var i=0; i<40; i++) 
  {
    
	  var zombie = createSprite(Math.round(random(windowWidth/2 - 1420, windowWidth/2 + 1420)),Math.round(random(windowHeight/2 - 1420, windowHeight/2 + 1420)));
	
    zombie.addAnimation("idle",zombieIdle);
    zombie.addAnimation("moving", zombieMove);
    zombie.rotation=90;
    zombie.scale = 0.3;
    zombie.rotateToDirection = true;
	
	  //add each zombie to the group
	  zombieGroup2.add(zombie);
  }
}

function spawnZombies2_3() 
{
  for (var i=0; i<50; i++) 
  {
    
	  var zombie = createSprite(Math.round(random(windowWidth/2 - 1420, windowWidth/2 + 1420)),Math.round(random(windowHeight/2 - 1420, windowHeight/2 + 1420)));
	
    zombie.addAnimation("idle",zombieIdle);
    zombie.addAnimation("moving", zombieMove);
    zombie.rotation=90;
    zombie.scale = 0.3;
    zombie.rotateToDirection = true;
	
	  //add each zombie to the group
	  zombieGroup2.add(zombie);
  }
}

function fireEffects()
{
  if(frameCount%2 === 0)
  {
    var muzzleFlash = createSprite(player.x + 13, player.y - 45)
    muzzleFlash.rotation = -90;
    muzzleFlash.scale = 0.02;
    muzzleFlash.addImage("rifle_fire_effect", muzzleFlashImage);
    muzzleFlash.changeImage("rifle_fire_effect", muzzleFlashImage);

    if(player.rotation === -90)
    {
      muzzleFlash.x = player.x + 13;
      muzzleFlash.y = player.y - 45;
      muzzleFlash.rotation = -90;
    }

    if(player.rotation === 0)
    {
      muzzleFlash.x = player.x + 45;
      muzzleFlash.y = player.y + 13;
      muzzleFlash.rotation = 0;
    }

    if(player.rotation === 180)
    {
      muzzleFlash.x = player.x - 45;
      muzzleFlash.y = player.y - 13;
      muzzleFlash.rotation = 180;
    }

    if(player.rotation === 90)
    {
      muzzleFlash.x = player.x - 13;
      muzzleFlash.y = player.y + 45;
      muzzleFlash.rotation = 90;
    }

    muzzleFlashGroup.add(muzzleFlash);

  }
}

function spawnBullets()
{
  if(frameCount%2 === 0)
  {


  if(player.rotation === -90)
    {
      var bullets = createSprite(player.x + 13, player.y - 45);
      bullets.scale = 0.008;
      bullets.rotation = -90;
      bullets.addImage("bullet_sprite", bulletSprite);
      bullets.changeImage("bullet_sprite", bulletSprite);
      bullets.lifetime = 100;

      bullets.x = player.x + 13;
      bullets.y = player.y - 45;
      bullets.rotation = -90;
      bullets.velocityY = -20;
    }

    if(player.rotation === 0)
    {
      var bullets = createSprite(player.x + 13, player.y - 45);
      bullets.scale = 0.008;
      bullets.rotation = -90;
      bullets.addImage("bullet_sprite", bulletSprite);
      bullets.changeImage("bullet_sprite", bulletSprite);
      bullets.lifetime = 100;

      bullets.x = player.x + 45;
      bullets.y = player.y + 13;
      bullets.rotation = 0;
      bullets.velocityX = 20;
    }

    if(player.rotation === 180)
    {
      var bullets = createSprite(player.x + 13, player.y - 45);
      bullets.scale = 0.008;
      bullets.rotation = -90;
      bullets.addImage("bullet_sprite", bulletSprite);
      bullets.changeImage("bullet_sprite", bulletSprite);
      bullets.lifetime = 100;

      bullets.x = player.x - 45;
      bullets.y = player.y - 13;
      bullets.rotation = 180;
      bullets.velocityX = -20;
    }

    if(player.rotation === 90)
      {
        var bullets = createSprite(player.x + 13, player.y - 45);
        bullets.scale = 0.008;
        bullets.rotation = -90;
        bullets.addImage("bullet_sprite", bulletSprite);
        bullets.changeImage("bullet_sprite", bulletSprite);
        bullets.lifetime = 100;

        bullets.x = player.x - 13;
        bullets.y = player.y + 45;
        bullets.rotation = 90;
        bullets.velocityY = 20;
      }

  bulletsGroup.add(bullets);
  }
}

function level2Sprites()
{
  //office
  s1 = createSprite(windowWidth/2-880, windowHeight/2+825.5, 650, 540);

  //lab closest to road
  s2 = createSprite(windowWidth/2 - 653.94, windowHeight/2+100.5, 300, 350);
  s3 = createSprite(s2.x + 340, s2.y - 100, 300, 150);
  s4 = createSprite(s3.x + 100, s2.y + 30, 20, 100);
  s4.rotation = 45;
  s5 = createSprite(s4.x - 180, s4.y + 80, 300, 100);
  s6 = createSprite(s5.x - 60, s5.y + 70, 20, 100);
  s6.rotation = 45;
  s7 = createSprite(s2.x + 70, s2.y + 210, 200, 80);
  s8 = createSprite(s6.x - 220, s6.y + 40, 20, 100);
  s8.rotation = -45;
  s9 = createSprite(windowWidth/2-335, windowHeight/2 + 125.5, 200, 100);
  s10 = createSprite(windowWidth/2-485, windowHeight/2 - 94.5, 400, 50);
  s11 = createSprite(s10.x + 200, s10.y - 25,20,100);
  s11.rotation = -45;
  s12 = createSprite(s10.x - 200, s10.y - 25,20,100);
  s12.rotation = 45;
  s13 = createSprite(s10.x, s10.y - 50, 300, 25);

  //lab furthest left
  s14=createSprite(s2.x-795,s2.y+85,300, 350);
  s15=createSprite(s3.x-795,s3.y+85,300, 150);
  s16=createSprite(s4.x-795,s4.y+85,20, 100);
  s16.rotation = 45;
  s17=createSprite(s5.x-795,s5.y+85,300, 100);
  s18=createSprite(s6.x-795,s6.y+85,20, 100);
  s18.rotation = 45;
  s19=createSprite(s7.x-795,s7.y+85,200, 80);
  s20=createSprite(s8.x-795,s8.y+85,20, 100);
  s20.rotation = -45;
  s21=createSprite(s9.x-795,s9.y+85,200, 100);
  s22=createSprite(s10.x-795,s10.y+85,400, 50);
  s23=createSprite(s11.x-795,s11.y+85,20, 100);
  s23.rotation = -45;
  s24=createSprite(s12.x-795,s12.y+85,20, 100);
  s24.rotation = 45;
  s25=createSprite(s13.x-795,s13.y+85,300, 25);

  //lab furthest up
  s26=createSprite(s2.x-500,s2.y-710,300, 350);
  s27=createSprite(s3.x-500,s3.y-710, 300, 150);
  s28=createSprite(s4.x-500,s4.y-710, 20, 100);
  s28.rotation = 45;
  s29=createSprite(s5.x-500,s5.y-710, 300, 100);
  s30=createSprite(s6.x-500,s6.y-710, 20, 100);
  s30.rotation = 45;
  s31=createSprite(s7.x-500,s7.y-710, 200, 80);
  s32=createSprite(s8.x-500,s8.y-710, 20, 100);
  s32.rotation = -45;
  s33=createSprite(s9.x-500,s9.y-710, 200, 100);
  s34=createSprite(s10.x-500,s10.y-710, 400, 50);
  s35=createSprite(s11.x-500,s11.y-710, 20, 100);
  s35.rotation = -45;
  s36=createSprite(s12.x-500,s12.y-710, 20, 100);
  s36.rotation = 45;
  s37=createSprite(s13.x-500,s13.y-710, 300, 25);

  //gas station
  s38 = createSprite(windowWidth/2 + 800, windowHeight/2 + 1450.5, 470, 300);
  s39 = createSprite(windowWidth/2 + 800, windowHeight/2 + 1275.5, 340, 80);

  //lowest oil rig
  s40 = createSprite(windowWidth/2 + 1190, windowHeight/2 + 775, 950, 130);
  s41 = createSprite(windowWidth/2 + 590, windowHeight/2 + 775, 300, 80);
  s42 = createSprite(windowWidth/2 + 948, windowHeight/2 + 1065, 40, 40);
  s43 = createSprite(s42.x + 575, s42.y, 40, 40);
  s44 = createSprite(s42.x, s42.y - 575, 40, 40);
  s45 = createSprite(s42.x + 575, s42.y - 575, 40, 40);
  s46 = createSprite(windowWidth/2 + 1555, windowWidth/2 + 635, 180, 120);
  s47 = createSprite(s46.x, s46.y - 250, 180, 120);
  s48 = createSprite(windowWidth/2 + 1078, windowHeight/2 + 625, 410, 30);
  s48.rotation = 45;
  s49 = createSprite(s48.x, s48.y + 300, 410, 30);
  s49.rotation = -45;
  s50 = createSprite(s48.x + 350, s48.y, 360, 30);
  s50.rotation = -60;
  s51 = createSprite(s50.x, s49.y, 360, 30);
  s51.rotation = 60;

  //middle rig
  s52 = createSprite(s40.x, s40.y - 745, 950, 130);
  s53 = createSprite(s41.x, s41.y - 745, 300, 80);
  s54 = createSprite(s42.x, s42.y - 745, 40, 40);
  s55 = createSprite(s43.x, s43.y - 745, 40, 40);
  s56 = createSprite(s44.x, s44.y - 745, 40, 40);
  s57 = createSprite(s45.x, s45.y - 745, 40, 40);
  s58 = createSprite(s46.x, s46.y - 745, 180, 120);
  s59 = createSprite(s47.x, s47.y - 745, 180, 120);
  s60 = createSprite(s48.x, s48.y - 745, 410, 30);
  s60.rotation = 45;
  s61 = createSprite(s49.x, s49.y - 745, 410, 30);
  s61.rotation = -45;
  s62 = createSprite(s50.x, s50.y - 745, 360, 30);
  s62.rotation = -60;
  s63 = createSprite(s51.x, s51.y - 745, 360, 30);
  s63.rotation = 60;

  //top rig
  s64 = createSprite(s40.x, s40.y - 1535, 950, 130);
  s65 = createSprite(s41.x, s41.y - 1535, 300, 80);
  s66 = createSprite(s42.x, s42.y - 1535, 40, 40);
  s67 = createSprite(s43.x, s43.y - 1535, 40, 40);
  s68 = createSprite(s44.x, s44.y - 1535, 40, 40);
  s69 = createSprite(s45.x, s45.y - 1535, 40, 40);
  s70 = createSprite(s46.x, s46.y - 1535, 180, 120);
  s71 = createSprite(s47.x, s47.y - 1535, 180, 120);
  s72 = createSprite(s48.x, s48.y - 1535, 410, 30);
  s72.rotation = 45;
  s73 = createSprite(s49.x, s49.y - 1535, 410, 30);
  s73.rotation = -45;
  s74 = createSprite(s50.x, s50.y - 1535, 360, 30);
  s74.rotation = -60;
  s75 = createSprite(s51.x, s51.y - 1535, 360, 30);
  s75.rotation = 60;

  //bottom walls
  s76 = createSprite(windowWidth/2 - 430, windowHeight/2 + 1680, 30, 845);
  s77 = createSprite(windowWidth/2 - 1150, windowHeight/2 + 1305, 1160, 30);
  s78 = createSprite(s77.x + 75, s77.y + 800, 1800, 30);
  s79 = createSprite(windowWidth/2 - 1715, windowHeight/2 - windowHeight/2, 30, 6000);
  s86 = createSprite(s78.x + 2250, s78.y, 1800, 30);

  //generators
  s80 = createSprite(windowWidth/2 - 797, windowHeight/2 + 1570, 435, 220);
  s81 = createSprite(windowWidth/2 - 1180, windowHeight/2 + 1830, 800, 190);
  s82 = createSprite(s81.x - 250, s81.y - 120, 140, 560);
  s83 = createSprite(s81.x, s81.y - 250, 300, 300);

  //top wall
  s84 = createSprite(windowWidth/2 + 60, windowHeight/2 - 1204, 4000, 100);

  //right wall
  s85 = createSprite(windowHeight/2 + 1965, 0, 30, 6000);

  s1.visible=false;
  s2.visible=false;
  s3.visible=false;
  s4.visible=false;
  s5.visible=false;
  s6.visible=false;
  s7.visible=false;
  s8.visible=false;
  s9.visible=false;
  s10.visible=false;
  s11.visible=false;
  s12.visible=false;
  s13.visible=false;
  s14.visible=false;
  s15.visible=false;
  s16.visible=false;
  s17.visible=false;
  s18.visible=false;
  s19.visible=false;
  s20.visible=false;
  s21.visible=false;
  s22.visible=false;
  s23.visible=false;
  s24.visible=false;
  s25.visible=false;
  s26.visible=false;
  s27.visible=false;
  s28.visible=false;
  s29.visible=false;
  s30.visible=false;
  s31.visible=false;
  s32.visible=false;
  s33.visible=false;
  s34.visible=false;
  s35.visible=false;
  s36.visible=false;
  s37.visible=false;
  s38.visible=false;
  s39.visible=false;
  s40.visible=false;
  s41.visible=false;
  s42.visible=false;
  s43.visible=false;
  s44.visible=false;
  s45.visible=false;
  s46.visible=false;
  s47.visible=false;
  s48.visible=false;
  s49.visible=false;
  s50.visible=false;
  s51.visible=false;
  s52.visible=false;
  s53.visible=false;
  s54.visible=false;
  s55.visible=false;
  s56.visible=false;
  s57.visible=false;
  s58.visible=false;
  s59.visible=false;
  s60.visible=false;
  s61.visible=false;
  s62.visible=false;
  s63.visible=false;
  s64.visible=false;
  s65.visible=false;
  s66.visible=false;
  s67.visible=false;
  s68.visible=false;
  s69.visible=false;
  s70.visible=false;
  s71.visible=false;
  s72.visible=false;
  s73.visible=false;
  s74.visible=false;
  s75.visible=false;
  s76.visible=false;
  s77.visible=false;
  s78.visible=false;
  s79.visible=false;
  s80.visible = false;
  s81.visible = false;
  s82.visible = false;
  s83.visible = false;
  s84.visible = false;
  s85.visible = false;
  s86.visible = false;

}

function level2SpritesProp()
{
  //if(frameCount%1 === 0)
  //{
  s1.displace(player);
  s2.displace(player);
  s3.displace(player);
  s4.displace(player);
  s5.displace(player);
  s6.displace(player);
  s7.displace(player);
  s8.displace(player);
  s9.displace(player);
  s10.displace(player);
  s11.displace(player);
  s12.displace(player);
  s13.displace(player);
  s14.displace(player);
  s15.displace(player);
  s16.displace(player);
  s17.displace(player);
  s18.displace(player);
  s19.displace(player);
  s20.displace(player);
  s21.displace(player);
  s22.displace(player);
  s23.displace(player);
  s24.displace(player);
  s25.displace(player);
  s26.displace(player);
  s27.displace(player);
  s28.displace(player);
  s29.displace(player);
  s30.displace(player);
  s31.displace(player);
  s32.displace(player);
  s33.displace(player);
  s34.displace(player);
  s35.displace(player);
  s36.displace(player);
  s37.displace(player);
  s38.displace(player);
  s39.displace(player);
  s40.displace(player);
  s41.displace(player);
  s42.displace(player);
  s43.displace(player);
  s44.displace(player);
  s45.displace(player);
  s46.displace(player);
  s47.displace(player);
  s48.displace(player);
  s49.displace(player);
  s50.displace(player);
  s51.displace(player);
  s52.displace(player);
  s53.displace(player);
  s54.displace(player);
  s55.displace(player);
  s56.displace(player);
  s57.displace(player);
  s58.displace(player);
  s59.displace(player);
  s60.displace(player);
  s61.displace(player);
  s62.displace(player);
  s63.displace(player);
  s64.displace(player);
  s65.displace(player);
  s66.displace(player);
  s67.displace(player);
  s68.displace(player);
  s69.displace(player);
  s70.displace(player);
  s71.displace(player);
  s72.displace(player);
  s73.displace(player);
  s74.displace(player);
  s75.displace(player);
  s76.displace(player);
  s77.displace(player);
  s78.displace(player);
  s79.displace(player);
  s80.displace(player);
  s81.displace(player);
  s82.displace(player);
  s83.displace(player);
  
  s85.displace(player);
  s86.displace(player);


  s1.displace(zombieGroup2);
  s2.displace(zombieGroup2);
  s3.displace(zombieGroup2);
  s4.displace(zombieGroup2);
  s5.displace(zombieGroup2);
  s6.displace(zombieGroup2);
  s7.displace(zombieGroup2);
  s8.displace(zombieGroup2);
  s9.displace(zombieGroup2);
  s10.displace(zombieGroup2);
  s11.displace(zombieGroup2);
  s12.displace(zombieGroup2);
  s13.displace(zombieGroup2);
  s14.displace(zombieGroup2);
  s15.displace(zombieGroup2);
  s16.displace(zombieGroup2);
  s17.displace(zombieGroup2);
  s18.displace(zombieGroup2);
  s19.displace(zombieGroup2);
  s20.displace(zombieGroup2);
  s21.displace(zombieGroup2);
  s22.displace(zombieGroup2);
  s23.displace(zombieGroup2);
  s24.displace(zombieGroup2);
  s25.displace(zombieGroup2);
  s26.displace(zombieGroup2);
  s27.displace(zombieGroup2);
  s28.displace(zombieGroup2);
  s29.displace(zombieGroup2);
  s30.displace(zombieGroup2);
  s31.displace(zombieGroup2);
  s32.displace(zombieGroup2);
  s33.displace(zombieGroup2);
  s34.displace(zombieGroup2);
  s35.displace(zombieGroup2);
  s36.displace(zombieGroup2);
  s37.displace(zombieGroup2);
  s38.displace(zombieGroup2);
  s39.displace(zombieGroup2);
  s40.displace(zombieGroup2);
  s41.displace(zombieGroup2);
  s42.displace(zombieGroup2);
  s43.displace(zombieGroup2);
  s44.displace(zombieGroup2);
  s45.displace(zombieGroup2);
  s46.displace(zombieGroup2);
  s47.displace(zombieGroup2);
  s48.displace(zombieGroup2);
  s49.displace(zombieGroup2);
  s50.displace(zombieGroup2);
  s51.displace(zombieGroup2);
  s52.displace(zombieGroup2);
  s53.displace(zombieGroup2);
  s54.displace(zombieGroup2);
  s55.displace(zombieGroup2);
  s56.displace(zombieGroup2);
  s57.displace(zombieGroup2);
  s58.displace(zombieGroup2);
  s59.displace(zombieGroup2);
  s60.displace(zombieGroup2);
  s61.displace(zombieGroup2);
  s62.displace(zombieGroup2);
  s63.displace(zombieGroup2);
  s64.displace(zombieGroup2);
  s65.displace(zombieGroup2);
  s66.displace(zombieGroup2);
  s67.displace(zombieGroup2);
  s68.displace(zombieGroup2);
  s69.displace(zombieGroup2);
  s70.displace(zombieGroup2);
  s71.displace(zombieGroup2);
  s72.displace(zombieGroup2);
  s73.displace(zombieGroup2);
  s74.displace(zombieGroup2);
  s75.displace(zombieGroup2);
  s76.displace(zombieGroup2);
  s77.displace(zombieGroup2);
  s78.displace(zombieGroup2);
  s79.displace(zombieGroup2);
  s80.displace(zombieGroup2);
  s81.displace(zombieGroup2);
  s82.displace(zombieGroup2);
  s83.displace(zombieGroup2);

  s85.displace(zombieGroup2);
  s86.displace(zombieGroup2);
  //}

}
