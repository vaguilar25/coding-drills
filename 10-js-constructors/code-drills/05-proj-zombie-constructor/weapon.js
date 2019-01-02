// ========================= STEP 1 ============================
var Weapon = function (name, reach, attack, risk, reliability, uses) {
    this.name = name;
    this.reach = reach;
    this.attack = attack;
    this.risk = risk;
    this.reliability = reliability;
    this.uses = uses;
    this.didDam = false;
    this.receiveDam = false;
    this.roundDamage = 0;
    this.used = function () {
        this.uses -= 1;
    }
    this.damageBool = function (perc) {
        var comp = Math.floor(Math.random() * 100) + 1

        if (perc - comp > 0) {
            return false
        } else {
            return true
        }

    }
    this.calcDamage = function(min,max) {
        this.roundDamage= Math.floor(Math.random() * (max - min) + min);
    }

}

module.exports=Weapon;








//===========================================================