function isTouching ( obj1, obj2 )  // setting definition 
{
    if(obj1.x - obj2.x === (obj1.width + obj2.width)/2 || obj2.x - obj1.x === (obj1.width + obj2.width)/2
    || obj1.y - obj2.y === (obj1.height + obj2.height)/2 || obj2.y - obj1.y === (obj1.height + obj2.height)/2)
    {
      return true; //yes - true ..... no - false
      //touching
    }
    else
    {
      return false; // not touching
    }
  }