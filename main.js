const getSleepHours = day => {
  //day.toLowerCase();
   switch (day){
     case 'monday':
        return 8;
        break;
     case 'tuesday':
        return 7;
        break;
     case 'wednesday':
        return 4;
        break;  
      case 'thursday':
        return 8;
        break;
      case 'friday':
        return 5;
        break;
      case 'saturday':
        return 3;
        break;
      case 'sunday':
        return 9;
        break;           
   }
 
};
//console.log(getSleepHours('Tuesday')); 
const getActualSleepHours = () => 
  getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'); 

const getIdealSleepHours =() => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours ){
    console.log('You got the perfect amount of sleep.')
  }
else if (actualSleepHours > idealSleepHours) {
  console.log('You got more sleep than needed' +'Your extra sleep hours was:' + (actualSleepHours - idealSleepHours ) );
}
else {
  console.log('You should get some rest' +' Your extra sleep hours needed is: ' + (idealSleepHours - actualSleepHours))
}
};
calculateSleepDebt();


























