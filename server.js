//don't worry about code below this line
var fake_names = ['Geoff', 'Holly', 'Savannah', 'Preston', 'Rheannan', 'Camden', 'Larsen', 'Breonnon', 'Lily', 'Theif', 'Sheesh shee', 'Diamond', 'Dakota', 'Pikachu', 'Piplup', 'Chimchar', 'Turtwig'];
function randName() {
     return fake_names[Math.round(Math.random()*(fake_names.length-1))];
}
function randTime() {
     return Math.round((Math.random()*5000)+100);
}
function tick() {
	var name = randName();
	console.log('[SERVER]: user joining: '+name);
    window.new_user_joined(name);
    setTimeout(tick, randTime());
}
tick();
setInterval(window.assign_to_chatroom, 5000);