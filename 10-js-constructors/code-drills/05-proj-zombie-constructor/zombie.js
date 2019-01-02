// ========================= STEP 2 ============================

var Zombie = function (name, health, attack, agility) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.agility = agility;
    this.receivedDam = false;
    this.roundDamage = 0;
    this.damageBool = function (num) {
        var comp = Math.floor(Math.random() * 100) + 1

        if (num - comp > 0) {
            return false
        } else {
            return true
        }

    }
    this.calcDamage = function (min, max) {
        this.roundDamage = Math.floor(Math.random() * (max - min) + min);
    }
}


module.exports=Zombie;





//===========================================================