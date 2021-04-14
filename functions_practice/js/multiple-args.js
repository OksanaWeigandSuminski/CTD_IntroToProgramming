function getArea(width, length, unit){
  const area = width * length;
  //return area;
  return `${area} ${unit}`;

}
getArea(10,20, 'sq ft');
getArea(5,17.5, 'sq m');
