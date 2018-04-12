var div = document.getElementById('output');
var button = document.getElementById('add-element');

function CreateField() {
    this.field = [];
}

  CreateField.prototype.fill = function(element, amount) {
    for (var i = 0; i < amount; i++) {
      this.field.push(element);
    }
    div.innerHTML = this.field.join(' ');
  }

function Action(actor, currentPosition) {
    this.actor = actor;
    this.currentPosition = currentPosition;
    this.rightDirection = false;
}
  

  Action.prototype.move = function(field) {
  	var self = this; // save context here than pass in setInrerval
    field[this.currentPosition] = this.actor;
    div.innerHTML = field.join(' ');

    setInterval(function(){

    		if((self.currentPosition == field.length - 1) || 
    			(self.currentPosition == 0)){
    				self.rightDirection = !self.rightDirection;
    		}

    	if(field[self.currentPosition + 1] == self.actor && self.rightDirection){
    		self.rightDirection = !self.rightDirection;
    		return;
    	}


    	if(field[self.currentPosition - 1] == self.actor && !self.rightDirection){
    		self.rightDirection = !self.rightDirection;
    		return;
    	}


	      if (self.rightDirection) {
	        field[self.currentPosition + 1] = self.actor;
	        field[self.currentPosition] = 0;

	        self.currentPosition++;
	      } else {
	        field[self.currentPosition - 1] = self.actor;
	        field[self.currentPosition] = 0;

	        self.currentPosition--;
	      }
      div.innerHTML = field.join(' ');
    }, 500);
  }


var createElements = new CreateField();
createElements.fill("0", 100);

button.onclick = function(){
  var action = new Action('1', 0);
  	  action.move(createElements.field);
};