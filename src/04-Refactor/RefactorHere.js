const PI = 3.141592;
function CalculatePaintNeeded(paintPerUnit, radius) {
  // rename symbol
  // extract constant
  // extract function


  var area;
  area = CalcArea(radius);

  return area / paintPerUnit;

}

function CalcArea(radius) {
  return PI * radius * radius;
}

function ReDrawChangedElements() {
  // similar code here
  var radius = 50;
  var area;
  area = PI * radius * radius;

}
