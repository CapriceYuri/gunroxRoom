let playerLevel = document.querySelector('.player-level-value');
let playerLevelMinus = document.querySelector('.player-level-minus')
let playerLevelPlus = document.querySelector('.player-level-plus');
let reloadbtn = document.querySelector('#reload');
let maxbtn = document.querySelector("#max");

let skillpoints = document.querySelector('.skill-point-value')
let perkpoints = document.querySelector('.perk-point-value')

let selectPerk = document.querySelectorAll('img');
let selectContainer = document.querySelector('.center-top')

let meleepoints = document.querySelector('.melee-value');
let pistolpoints = document.querySelector('.pistol-value');
let shotgunpoints = document.querySelector('.shotgun-value');
let submachinepoints = document.querySelector('.submachine-value');
let assaultpoints = document.querySelector('.assault-value');
let sniperpoints = document.querySelector('.sniper-value');
let rocketpoints = document.querySelector('.rocket-value');
let heavypoints = document.querySelector('.heavy-value');
let grenadepoints = document.querySelector('.grenade-value');
let trappoints = document.querySelector('.trap-value');
let medicpoints = document.querySelector('.medic-value');

let meleeMinus = document.querySelector('.melee-minus')
let meleePlus = document.querySelector('.melee-plus');
let pistolMinus = document.querySelector('.pistol-minus')
let pistolPlus = document.querySelector('.pistol-plus');
let shotgunMinus = document.querySelector('.shotgun-minus')
let shotgunPlus = document.querySelector('.shotgun-plus');
let submachineMinus = document.querySelector('.submachine-minus')
let submachinePlus = document.querySelector('.submachine-plus');
let assaultMinus = document.querySelector('.assault-minus')
let assaultPlus = document.querySelector('.assault-plus');
let sniperMinus = document.querySelector('.sniper-minus')
let sniperPlus = document.querySelector('.sniper-plus');
let rocketMinus = document.querySelector('.rocket-minus')
let rocketPlus = document.querySelector('.rocket-plus');
let heavyMinus = document.querySelector('.heavy-minus')
let heavyPlus = document.querySelector('.heavy-plus');
let grenadeMinus = document.querySelector('.grenade-minus')
let grenadePlus = document.querySelector('.grenade-plus');
let trapMinus = document.querySelector('.trap-minus')
let trapPlus = document.querySelector('.trap-plus');
let medicMinus = document.querySelector('.medic-minus')
let medicPlus = document.querySelector('.medic-plus');



let weightpoints = document.querySelector('.weight-value');
let inventorypoints = document.querySelector('.inventory-value')
let hitpointpoints = document.querySelector('.hitpoint-value')
let hpregenpoints = document.querySelector('.hpregen-value')
let appoints = document.querySelector('.ap-value');
let mppoints = document.querySelector('.mp-value');
let sightpoints = document.querySelector('.sight-value');
let critcalchance = document.querySelector('.criticalc-value');
let critcalpower = document.querySelector('.criticalp-value');
let splashpoints = document.querySelector('.splashr-value');
let poisonpoints = document.querySelector('.poisonr-value');
let stunpoints = document.querySelector('.stunr-value');
let blindpoints = document.querySelector('.blindr-value');
let damagepoints = document.querySelector('.dmgr-value');
let criticalresist = document.querySelector('.criticalr-value');

let level = 1;
let maxSkill = parseInt(0)
let skill = parseInt(0);
let perk = parseInt(0);
let weight = 50;
let hitpoint = 100;
let inventory = 12;
let ap = 12;
let mp = parseInt(0);
let sight = 9;
let regen = parseInt(0);
let critcalc = parseInt(0)
let critcalp = parseInt(0)
let splash = parseInt(0);
let poison = parseInt(0);
let stun = parseInt(0);
let blind = parseInt(0);
let damage = parseInt(0);
let criticalr = parseInt(0);

let melee = parseInt(0);
let pistol = parseInt(0);
let shotgun = parseInt(0);
let submachine = parseInt(0);
let assault = parseInt(0);
let sniper = parseInt(0);
let rocket = parseInt(0);
let heavy = parseInt(0);
let grenade = parseInt(0);
let trap = parseInt(0);
let medic = parseInt(0);

reloadbtn.addEventListener('click', () => {
    location.reload();
})
maxbtn.addEventListener('click', () => {
    level = 50;
    playerLevel.textContent = level
    skill = 250;
    skillpoints.textContent = skill;
    perk = 55;
    perkpoints.textContent = perk
    weight = 66;
    weightpoints.textContent = weight;
    hitpoint = 292;
    hitpointpoints.textContent = hitpoint;
    selectPerk.forEach( (e) => {
        e.classList.remove('hidden')
    })
    maxSkill = 100;
})

playerLevelMinus.addEventListener('click', () => {
    if (level == 1) {
        skill = 0;
        skillpoints.textContent = skill
        perk = 0;
        perkpoints.textContent = perk
        hitpoint = 100;
        hitpointpoints.textContent = hitpoint;
        maxSkill = 0;
    } else {
        melee = parseInt(0);
        pistol = parseInt(0);
        shotgun = parseInt(0);
        submachine = parseInt(0);
        assault = parseInt(0);
        sniper = parseInt(0);
        rocket = parseInt(0);
        heavy = parseInt(0);
        grenade = parseInt(0);
        trap = parseInt(0);
        medic = parseInt(0);
        meleepoints.textContent = melee;
        pistolpoints.textContent = pistol;
        shotgunpoints.textContent = shotgun;
        submachinepoints.textContent = submachine;
        assaultpoints.textContent = assault;
        sniperpoints.textContent = sniper;
        rocketpoints.textContent = rocket;
        heavypoints.textContent = heavy;
        grenadepoints.textContent = grenade;
        trappoints.textContent = trap;
        medicpoints.textContent = medic;
        level--;
        playerLevel.textContent = level;
        skill = (level - 1) * 5;
        skillpoints.textContent = skill
        maxSkill = parseInt(maxSkill) - 2;
        // HITPOINTS
        if (level == 4 || level == 14 || level == 24 || level == 34 || level == 44) {
            hitpoint -= 5;
            hitpointpoints.textContent = hitpoint;
        } else if (level == 9 || level == 19 || level == 29 || level == 39 || level == 49) {
            hitpoint -= 10;
            hitpointpoints.textContent = hitpoint;
        } else {
            hitpoint -= 3;
            hitpointpoints.textContent = hitpoint;
        }
        // WEGIHTS
        if (level == 2 || level == 5 || level == 8 || level == 11 || level == 14 || level == 17 || level == 20 || level == 23 || level == 26 || level == 29 || level == 32 || level == 35 || level == 38 || level == 41 || level == 44 || level == 47) {
            weightpoints.textContent = --weight;
        }
        // PERKS
        if (level == 9 || level == 19 || level == 29 || level == 39) {
            perk -= 2;
            perkpoints.textContent = perk
        } else if (level == 49) {
            perk -= 3;
            perkpoints.textContent = perk;
        } else {
            perk -= 1;
            perkpoints.textContent = perk;
        }
    }

})
playerLevelPlus.addEventListener('click', () => {
    if (level < 2) {
        level++;
        playerLevel.textContent = level;
        skill += 5;
        skillpoints.textContent = skill
        perk += 1;
        perkpoints.textContent = perk
        hitpoint += 3;
        hitpointpoints.textContent = hitpoint;
        maxSkill = parseInt(maxSkill) + 4;
        console.log(maxSkill)
        let tempPerk = document.querySelector('#a1');
        tempPerk.classList.remove('hidden')
        let tempPerk2 = document.querySelector('#b41');
        tempPerk2.classList.remove('hidden')
        let tempPerk3 = document.querySelector('#n146');
        tempPerk3.classList.remove('hidden')
        let tempPerk4 = document.querySelector('#w212');
        tempPerk4.classList.remove('hidden')
        let tempPerk7 = document.querySelector('#x222');
        tempPerk7.classList.remove('hidden')
    } else if (level >= 2 && level < 49) {
        // PERKS
        if (level == 9 || level == 19 || level == 29 || level == 39) {
            perk += 2;
            perkpoints.textContent = perk
        } else {
            perk += 1;
            perkpoints.textContent = perk;
        }
        // WEIGHTS
        if (level == 2 || level == 5 || level == 8 || level == 11 || level == 14 || level == 17 || level == 20 || level == 23 || level == 26 || level == 29 || level == 32 || level == 35 || level == 38 || level == 41 || level == 44 || level == 47) {
            weightpoints.textContent = ++weight;
        }
        // HITPOINTS
        if (level == 4 || level == 14 || level == 24 || level == 34 || level == 44) {
            hitpoint += 5;
            hitpointpoints.textContent = hitpoint;
        } else if (level == 9 || level == 19 || level == 29 || level == 39 || level == 49) {
            hitpoint += 10;
            hitpointpoints.textContent = hitpoint;
        } else {
            hitpoint += 3;
            hitpointpoints.textContent = hitpoint;
        }
        // PERK UNLOCKED
        if (level == 2) {
            let tempPerk = document.querySelector('#a2');
            tempPerk.classList.remove('hidden')
            let tempPerk2 = document.querySelector('#b42');
            tempPerk2.classList.remove('hidden')
            let tempPerk3 = document.querySelector('#n147');
            tempPerk3.classList.remove('hidden')
            let tempPerk4 = document.querySelector('#w213');
            tempPerk4.classList.remove('hidden')
            let tempPerk7 = document.querySelector('#x223');
            tempPerk7.classList.remove('hidden')
        }
        if (level == 3) {
            let tempPerk = document.querySelector('#a3');
            tempPerk.classList.remove('hidden')
            let tempPerk2 = document.querySelector('#b43');
            tempPerk2.classList.remove('hidden')
            let tempPerk3 = document.querySelector('#n148');
            tempPerk3.classList.remove('hidden')
            let tempPerk4 = document.querySelector('#w214');
            tempPerk4.classList.remove('hidden')
            let tempPerk7 = document.querySelector('#x224');
            tempPerk7.classList.remove('hidden')
            let tempPerk20 = document.querySelector('#o156');
            tempPerk20.classList.remove('hidden')
            let tempPerk21 = document.querySelector('#o157');
            tempPerk21.classList.remove('hidden')
            let tempPerk22 = document.querySelector('#o158');
            tempPerk22.classList.remove('hidden')
            let tempPerk23 = document.querySelector('#q176');
            tempPerk23.classList.remove('hidden')
            let tempPerk24 = document.querySelector('#q177');
            tempPerk24.classList.remove('hidden')
            let tempPerk25 = document.querySelector('#q178');
            tempPerk25.classList.remove('hidden')
            let tempPerk30 = document.querySelector('#c46');
            tempPerk30.classList.remove('hidden')
            let tempPerk111 = document.querySelector('#perk-drexp');
            tempPerk111.classList.remove('hidden')
        }
        if (level == 4) {
            let tempPerk = document.querySelector('#a4');
            tempPerk.classList.remove('hidden')
            let tempPerk2 = document.querySelector('#b44');
            tempPerk2.classList.remove('hidden')
            let tempPerk3 = document.querySelector('#n149');
            tempPerk3.classList.remove('hidden')
            let tempPerk4 = document.querySelector('#w215');
            tempPerk4.classList.remove('hidden')
            let tempPerk7 = document.querySelector('#x225');
            tempPerk7.classList.remove('hidden')
            let tempPerk20 = document.querySelector('#o159');
            tempPerk20.classList.remove('hidden')
            let tempPerk23 = document.querySelector('#q179');
            tempPerk23.classList.remove('hidden')
            let tempPerk30 = document.querySelector('#c47');
            tempPerk30.classList.remove('hidden')

            let tempPerk40 = document.querySelector('#d56');
            tempPerk40.classList.remove('hidden')
            let tempPerk50 = document.querySelector('#e232');
            tempPerk50.classList.remove('hidden')
            let tempPerk60 = document.querySelector('#f66');
            tempPerk60.classList.remove('hidden')
        }
        if (level == 5) {
            let tempPerk = document.querySelector('#a5');
            tempPerk.classList.remove('hidden')
            let tempPerk2 = document.querySelector('#b45');
            tempPerk2.classList.remove('hidden')
            let tempPerk3 = document.querySelector('#n150');
            tempPerk3.classList.remove('hidden')
            let tempPerk4 = document.querySelector('#perk-packer');
            tempPerk4.classList.remove('hidden')
            let tempPerk5 = document.querySelector('#w216');
            tempPerk5.classList.remove('hidden')
            let tempPerk6 = document.querySelector('#perk-turtle');
            tempPerk6.classList.remove('hidden')
            let tempPerk20 = document.querySelector('#o160');
            tempPerk20.classList.remove('hidden')
            let tempPerk23 = document.querySelector('#q180');
            tempPerk23.classList.remove('hidden')
            let tempPerk29 = document.querySelector('#perk-minigun');
            tempPerk29.classList.remove('hidden')
            let tempPerk30 = document.querySelector('#c48');
            tempPerk30.classList.remove('hidden')
            let tempPerk40 = document.querySelector('#d57');
            tempPerk40.classList.remove('hidden')
            let tempPerk50 = document.querySelector('#e233');
            tempPerk50.classList.remove('hidden')
            let tempPerk60 = document.querySelector('#f67');
            tempPerk60.classList.remove('hidden')
            let tempPerk70 = document.querySelector('#g76');
            tempPerk70.classList.remove('hidden')

            let tempPerk90 = document.querySelector('#i96');
            tempPerk90.classList.remove('hidden')
            let tempPerk91 = document.querySelector('#j106');
            tempPerk91.classList.remove('hidden')
        }
        if (level == 6) {
            let tempPerk = document.querySelector('#a6');
            tempPerk.classList.remove('hidden')
            let tempPerk2 = document.querySelector('#b226');
            tempPerk2.classList.remove('hidden')
            let tempPerk3 = document.querySelector('#n151');
            tempPerk3.classList.remove('hidden')
            let tempPerk4 = document.querySelector('#w217');
            tempPerk4.classList.remove('hidden')
            let tempPerk20 = document.querySelector('#o161');
            tempPerk20.classList.remove('hidden')
            let tempPerk23 = document.querySelector('#q181');
            tempPerk23.classList.remove('hidden')
            let tempPerk30 = document.querySelector('#c49');
            tempPerk30.classList.remove('hidden')
            let tempPerk40 = document.querySelector('#d58');
            tempPerk40.classList.remove('hidden')
            let tempPerk50 = document.querySelector('#e234');
            tempPerk50.classList.remove('hidden')
            let tempPerk60 = document.querySelector('#f68');
            tempPerk60.classList.remove('hidden')
            let tempPerk70 = document.querySelector('#g77');
            tempPerk70.classList.remove('hidden')
            let tempPerk80 = document.querySelector('#h86');
            tempPerk80.classList.remove('hidden')
            let tempPerk90 = document.querySelector('#i97');
            tempPerk90.classList.remove('hidden')
            let tempPerk91 = document.querySelector('#j107');
            tempPerk91.classList.remove('hidden')
            let tempPerk111 = document.querySelector('#k116');
            tempPerk111.classList.remove('hidden')
        }
        if (level == 7) {
            let tempPerk = document.querySelector('#a7');
            tempPerk.classList.remove('hidden')
            let tempPerk2 = document.querySelector('#b227');
            tempPerk2.classList.remove('hidden')
            let tempPerk3 = document.querySelector('#n152');
            tempPerk3.classList.remove('hidden')
            let tempPerk4 = document.querySelector('#w218');
            tempPerk4.classList.remove('hidden')
            let tempPerk20 = document.querySelector('#o162');
            tempPerk20.classList.remove('hidden')
            let tempPerk23 = document.querySelector('#q182');
            tempPerk23.classList.remove('hidden')
            let tempPerk30 = document.querySelector('#c50');
            tempPerk30.classList.remove('hidden')
            let tempPerk40 = document.querySelector('#d59');
            tempPerk40.classList.remove('hidden')
            let tempPerk50 = document.querySelector('#e235');
            tempPerk50.classList.remove('hidden')
            let tempPerk60 = document.querySelector('#f69');
            tempPerk60.classList.remove('hidden')
            let tempPerk70 = document.querySelector('#g78');
            tempPerk70.classList.remove('hidden')
            let tempPerk80 = document.querySelector('#h87');
            tempPerk80.classList.remove('hidden')
            let tempPerk90 = document.querySelector('#i98');
            tempPerk90.classList.remove('hidden')
            let tempPerk91 = document.querySelector('#j108');
            tempPerk91.classList.remove('hidden')
            let tempPerk111 = document.querySelector('#k117');
            tempPerk111.classList.remove('hidden')
        }
        if (level == 8) {
            let tempPerk = document.querySelector('#a8');
            tempPerk.classList.remove('hidden')
            let tempPerk2 = document.querySelector('#b228');
            tempPerk2.classList.remove('hidden')
            let tempPerk3 = document.querySelector('#n153');
            tempPerk3.classList.remove('hidden')
            let tempPerk4 = document.querySelector('#w219');
            tempPerk4.classList.remove('hidden')
            let tempPerk20 = document.querySelector('#o163');
            tempPerk20.classList.remove('hidden')
            let tempPerk23 = document.querySelector('#q183');
            tempPerk23.classList.remove('hidden')
            let tempPerk30 = document.querySelector('#c51');
            tempPerk30.classList.remove('hidden')
            let tempPerk40 = document.querySelector('#d60');
            tempPerk40.classList.remove('hidden')
            let tempPerk50 = document.querySelector('#e236');
            tempPerk50.classList.remove('hidden')
            let tempPerk60 = document.querySelector('#f70');
            tempPerk60.classList.remove('hidden')
            let tempPerk70 = document.querySelector('#g79');
            tempPerk70.classList.remove('hidden')
            let tempPerk80 = document.querySelector('#h88');
            tempPerk80.classList.remove('hidden')
            let tempPerk90 = document.querySelector('#i99');
            tempPerk90.classList.remove('hidden')
            let tempPerk91 = document.querySelector('#j109');
            tempPerk91.classList.remove('hidden')
            let tempPerk99 = document.querySelector('#perk-disarm');
            tempPerk99.classList.remove('hidden')
            let tempPerk111 = document.querySelector('#k118');
            tempPerk111.classList.remove('hidden')
        }
        if (level == 9) {
            let tempPerk = document.querySelector('#a10');
            tempPerk.classList.remove('hidden')
            let tempPerk2 = document.querySelector('#b230');
            tempPerk2.classList.remove('hidden')
            let tempPerk3 = document.querySelector('#n155');
            tempPerk3.classList.remove('hidden')
            let tempPerk4 = document.querySelector('#w220');
            tempPerk4.classList.remove('hidden')
            let tempPerk8 = document.querySelector('#perk-insight');
            tempPerk8.classList.remove('hidden')
            let tempPerk20 = document.querySelector('#o164');
            tempPerk20.classList.remove('hidden')
            let tempPerk23 = document.querySelector('#q184');
            tempPerk23.classList.remove('hidden')
            let tempPerk30 = document.querySelector('#c52');
            tempPerk30.classList.remove('hidden')
            let tempPerk40 = document.querySelector('#d61');
            tempPerk40.classList.remove('hidden')
            let tempPerk50 = document.querySelector('#e237');
            tempPerk50.classList.remove('hidden')
            let tempPerk60 = document.querySelector('#f71');
            tempPerk60.classList.remove('hidden')
            let tempPerk70 = document.querySelector('#g80');
            tempPerk70.classList.remove('hidden')
            let tempPerk80 = document.querySelector('#h89');
            tempPerk80.classList.remove('hidden')
            let tempPerk90 = document.querySelector('#i100');
            tempPerk90.classList.remove('hidden')
            let tempPerk91 = document.querySelector('#j110');
            tempPerk91.classList.remove('hidden')
            let tempPerk99 = document.querySelector('#perk-lockload');
            tempPerk99.classList.remove('hidden')
            let tempPerk101 = document.querySelector('#perk-gunrun');
            tempPerk101.classList.remove('hidden')
            let tempPerk111 = document.querySelector('#k119');
            tempPerk111.classList.remove('hidden')
            let tempPerk112 = document.querySelector('#s196');
            tempPerk112.classList.remove('hidden')
        }
        if (level == 10) {
            let tempPerk = document.querySelector('#perk-health');
            tempPerk.classList.remove('hidden')
            let tempPerk2 = document.querySelector('#a9');
            tempPerk2.classList.remove('hidden')
            let tempPerk3 = document.querySelector('#b229');
            tempPerk3.classList.remove('hidden')
            let tempPerk4 = document.querySelector('#n154');
            tempPerk4.classList.remove('hidden')
            let tempPerk5 = document.querySelector('#w221');
            tempPerk5.classList.remove('hidden')
            let tempPerk20 = document.querySelector('#o165');
            tempPerk20.classList.remove('hidden')
            let tempPerk23 = document.querySelector('#q185');
            tempPerk23.classList.remove('hidden')
            let tempPerk30 = document.querySelector('#c53');
            tempPerk30.classList.remove('hidden')
            let tempPerk40 = document.querySelector('#d62');
            tempPerk40.classList.remove('hidden')
            let tempPerk50 = document.querySelector('#e238');
            tempPerk50.classList.remove('hidden')
            let tempPerk60 = document.querySelector('#f72');
            tempPerk60.classList.remove('hidden')
            let tempPerk70 = document.querySelector('#g81');
            tempPerk70.classList.remove('hidden')
            let tempPerk80 = document.querySelector('#h90');
            tempPerk80.classList.remove('hidden')
            let tempPerk90 = document.querySelector('#i101');
            tempPerk90.classList.remove('hidden')
            let tempPerk91 = document.querySelector('#j111');
            tempPerk91.classList.remove('hidden')
            let tempPerk99 = document.querySelector('#perk-xaction');
            tempPerk99.classList.remove('hidden')
            let tempPerk101 = document.querySelector('#perk-kami');
            tempPerk101.classList.remove('hidden')
            let tempPerk102 = document.querySelector('#perk-auto');
            tempPerk102.classList.remove('hidden')
            let tempPerk111 = document.querySelector('#k120');
            tempPerk111.classList.remove('hidden')
        }
        if (level == 11) {
            let tempPerk = document.querySelector('#a11');
            tempPerk.classList.remove('hidden')
            let tempPerk2 = document.querySelector('#perk-mule');
            tempPerk2.classList.remove('hidden')
            let tempPerk5 = document.querySelector('#w216');
            tempPerk5.classList.remove('hidden')
            let tempPerk10 = document.querySelector('#u204');
            tempPerk10.classList.remove('hidden')
            let tempPerk11 = document.querySelector('#t200');
            tempPerk11.classList.remove('hidden')
            let tempPerk12 = document.querySelector('#v208');
            tempPerk12.classList.remove('hidden')
            let tempPerk20 = document.querySelector('#o166');
            tempPerk20.classList.remove('hidden')
            let tempPerk23 = document.querySelector('#q186');
            tempPerk23.classList.remove('hidden')
            let tempPerk30 = document.querySelector('#c54');
            tempPerk30.classList.remove('hidden')
            let tempPerk40 = document.querySelector('#d63');
            tempPerk40.classList.remove('hidden')
            let tempPerk50 = document.querySelector('#e239');
            tempPerk50.classList.remove('hidden')
            let tempPerk60 = document.querySelector('#f73');
            tempPerk60.classList.remove('hidden')
            let tempPerk70 = document.querySelector('#g82');
            tempPerk70.classList.remove('hidden')
            let tempPerk80 = document.querySelector('#h91');
            tempPerk80.classList.remove('hidden')
            let tempPerk90 = document.querySelector('#i102');
            tempPerk90.classList.remove('hidden')
            let tempPerk91 = document.querySelector('#j112');
            tempPerk91.classList.remove('hidden')
            let tempPerk99 = document.querySelector('#perk-dieter');
            tempPerk99.classList.remove('hidden')
            let tempPerk100 = document.querySelector('#perk-doctor');
            tempPerk100.classList.remove('hidden')
            let tempPerk111 = document.querySelector('#k121');
            tempPerk111.classList.remove('hidden')
            let tempPerk112 = document.querySelector('#perk-shelter');
            tempPerk112.classList.remove('hidden')
        }
        if (level == 12) {
            let tempPerk = document.querySelector('#a12');
            tempPerk.classList.remove('hidden')
            let tempPerk10 = document.querySelector('#u205');
            tempPerk10.classList.remove('hidden')
            let tempPerk11 = document.querySelector('#t201');
            tempPerk11.classList.remove('hidden')
            let tempPerk12 = document.querySelector('#v209');
            tempPerk12.classList.remove('hidden')
            let tempPerk20 = document.querySelector('#o167');
            tempPerk20.classList.remove('hidden')
            let tempPerk23 = document.querySelector('#q187');
            tempPerk23.classList.remove('hidden')
            let tempPerk30 = document.querySelector('#c55');
            tempPerk30.classList.remove('hidden')
            let tempPerk40 = document.querySelector('#d64');
            tempPerk40.classList.remove('hidden')
            let tempPerk50 = document.querySelector('#e240');
            tempPerk50.classList.remove('hidden')
            let tempPerk60 = document.querySelector('#f74');
            tempPerk60.classList.remove('hidden')
            let tempPerk70 = document.querySelector('#g83');
            tempPerk70.classList.remove('hidden')
            let tempPerk80 = document.querySelector('#h92');
            tempPerk80.classList.remove('hidden')
            let tempPerk90 = document.querySelector('#i103');
            tempPerk90.classList.remove('hidden')
            let tempPerk91 = document.querySelector('#j113');
            tempPerk91.classList.remove('hidden')
            let tempPerk99 = document.querySelector('#perk-stargazer');
            tempPerk99.classList.remove('hidden')
            let tempPerk111 = document.querySelector('#k122');
            tempPerk111.classList.remove('hidden')
        }
        if (level == 13) {
            let tempPerk = document.querySelector('#a13');
            tempPerk.classList.remove('hidden')
            let tempPerk10 = document.querySelector('#u206');
            tempPerk10.classList.remove('hidden')
            let tempPerk11 = document.querySelector('#t202');
            tempPerk11.classList.remove('hidden')
            let tempPerk12 = document.querySelector('#v210');
            tempPerk12.classList.remove('hidden')
            let tempPerk20 = document.querySelector('#o168');
            tempPerk20.classList.remove('hidden')
            let tempPerk23 = document.querySelector('#q188');
            tempPerk23.classList.remove('hidden')
            let tempPerk40 = document.querySelector('#d65');
            tempPerk40.classList.remove('hidden')
            let tempPerk50 = document.querySelector('#e231');
            tempPerk50.classList.remove('hidden')
            let tempPerk60 = document.querySelector('#f75');
            tempPerk60.classList.remove('hidden')
            let tempPerk70 = document.querySelector('#g84');
            tempPerk70.classList.remove('hidden')
            let tempPerk80 = document.querySelector('#h93');
            tempPerk80.classList.remove('hidden')
            let tempPerk90 = document.querySelector('#i104');
            tempPerk90.classList.remove('hidden')
            let tempPerk91 = document.querySelector('#j114');
            tempPerk91.classList.remove('hidden')
            let tempPerk99 = document.querySelector('#perk-endu');
            tempPerk99.classList.remove('hidden')
            let tempPerk111 = document.querySelector('#k123');
            tempPerk111.classList.remove('hidden')
        }
        if (level == 14) {
            let tempPerk = document.querySelector('#a14');
            tempPerk.classList.remove('hidden')
            let tempPerk10 = document.querySelector('#u207');
            tempPerk10.classList.remove('hidden')
            let tempPerk11 = document.querySelector('#t203');
            tempPerk11.classList.remove('hidden')
            let tempPerk12 = document.querySelector('#v211');
            tempPerk12.classList.remove('hidden')
            let tempPerk8 = document.querySelector('#perk-advinsight');
            tempPerk8.classList.remove('hidden')
            let tempPerk20 = document.querySelector('#o169');
            tempPerk20.classList.remove('hidden')
            let tempPerk23 = document.querySelector('#q189');
            tempPerk23.classList.remove('hidden')
            let tempPerk70 = document.querySelector('#g85');
            tempPerk70.classList.remove('hidden')
            let tempPerk80 = document.querySelector('#h94');
            tempPerk80.classList.remove('hidden')
            let tempPerk90 = document.querySelector('#i105');
            tempPerk90.classList.remove('hidden')
            let tempPerk91 = document.querySelector('#j115');
            tempPerk91.classList.remove('hidden')
            let tempPerk99 = document.querySelector('#perk-fighter');
            tempPerk99.classList.remove('hidden')
            let tempPerk101 = document.querySelector('#perk-org');
            tempPerk101.classList.remove('hidden')
        }
        if (level == 15) {
            let tempPerk = document.querySelector('#a15');
            tempPerk.classList.remove('hidden')
            let tempPerk20 = document.querySelector('#o170');
            tempPerk20.classList.remove('hidden')
            let tempPerk23 = document.querySelector('#q190');
            tempPerk23.classList.remove('hidden')
            let tempPerk80 = document.querySelector('#h95');
            tempPerk80.classList.remove('hidden')
            let tempPerk99 = document.querySelector('#perk-extraaction');
            tempPerk99.classList.remove('hidden')
            let tempPerk101 = document.querySelector('#perk-dex');
            tempPerk101.classList.remove('hidden')
            let tempPerk102 = document.querySelector('#perk-pyro');
            tempPerk102.classList.remove('hidden')
            let tempPerk111 = document.querySelector('#k124');
            tempPerk111.classList.remove('hidden')
        }
        if (level == 16) {
            let tempPerk = document.querySelector('#a16');
            tempPerk.classList.remove('hidden')
            let tempPerk20 = document.querySelector('#o171');
            tempPerk20.classList.remove('hidden')
            let tempPerk23 = document.querySelector('#q191');
            tempPerk23.classList.remove('hidden')
            let tempPerk99 = document.querySelector('#perk-disarm');
            tempPerk99.classList.remove('hidden')
            let tempPerk101 = document.querySelector('#perk-keeneye');
            tempPerk101.classList.remove('hidden')
            let tempPerk100 = document.querySelector('#perk-treatment');
            tempPerk100.classList.remove('hidden')
            let tempPerk111 = document.querySelector('#k125');
            tempPerk111.classList.remove('hidden')
        }
        if (level == 17) {
            let tempPerk = document.querySelector('#a17');
            tempPerk.classList.remove('hidden')
            let tempPerk20 = document.querySelector('#o172');
            tempPerk20.classList.remove('hidden')
            let tempPerk23 = document.querySelector('#q192');
            tempPerk23.classList.remove('hidden')
            let tempPerk99 = document.querySelector('#perk-eagleeye');
            tempPerk99.classList.remove('hidden')
        }
        if (level == 18) {
            let tempPerk = document.querySelector('#a18');
            tempPerk.classList.remove('hidden')
            let tempPerk20 = document.querySelector('#o173');
            tempPerk20.classList.remove('hidden')
            let tempPerk23 = document.querySelector('#q193');
            tempPerk23.classList.remove('hidden')
        }
        if (level == 19) {
            let tempPerk = document.querySelector('#a19');
            tempPerk.classList.remove('hidden')
            let tempPerk20 = document.querySelector('#o174');
            tempPerk20.classList.remove('hidden')
            let tempPerk23 = document.querySelector('#q194');
            tempPerk23.classList.remove('hidden')
            let tempPerk112 = document.querySelector('#s197');
            tempPerk112.classList.remove('hidden')
        }
        if (level == 20) {
            let tempPerk = document.querySelector('#perk-xhealth');
            tempPerk.classList.remove('hidden')
            let tempPerk2 = document.querySelector('#a20');
            tempPerk2.classList.remove('hidden')
            let tempPerk3 = document.querySelector('#perk-rightdoom');
            tempPerk3.classList.remove('hidden')
            let tempPerk20 = document.querySelector('#o175');
            tempPerk20.classList.remove('hidden')
            let tempPerk23 = document.querySelector('#q195');
            tempPerk23.classList.remove('hidden')
        }
        if (level == 21) {
            let tempPerk = document.querySelector('#a21');
            tempPerk.classList.remove('hidden')
        }
        if (level == 22) {
            let tempPerk = document.querySelector('#a22');
            tempPerk.classList.remove('hidden')
        }
        if (level == 23) {
            let tempPerk = document.querySelector('#a23');
            tempPerk.classList.remove('hidden')
        }
        if (level == 24) {
            let tempPerk = document.querySelector('#a24');
            tempPerk.classList.remove('hidden')
            let tempPerk2 = document.querySelector('#a24');
            tempPerk2.classList.remove('hidden')
            let tempPerk29 = document.querySelector('#l126');
            tempPerk29.classList.remove('hidden')
        }
        if (level == 25) {
            let tempPerk = document.querySelector('#a25');
            tempPerk.classList.remove('hidden')
            let tempPerk29 = document.querySelector('#l127');
            tempPerk29.classList.remove('hidden')
        }
        if (level == 26) {
            let tempPerk = document.querySelector('#a26');
            tempPerk.classList.remove('hidden')
            let tempPerk29 = document.querySelector('#l128');
            tempPerk29.classList.remove('hidden')
        }
        if (level == 27) {
            let tempPerk = document.querySelector('#a27');
            tempPerk.classList.remove('hidden')
            let tempPerk29 = document.querySelector('#l129');
            tempPerk29.classList.remove('hidden')
        }
        if (level == 28) {
            let tempPerk = document.querySelector('#a28');
            tempPerk.classList.remove('hidden')
            let tempPerk29 = document.querySelector('#l130');
            tempPerk29.classList.remove('hidden')
        }
        if (level == 29) {
            let tempPerk = document.querySelector('#a29');
            tempPerk.classList.remove('hidden')
            let tempPerk29 = document.querySelector('#l131');
            tempPerk29.classList.remove('hidden')
            let tempPerk30 = document.querySelector('#perk-bulletHell');
            tempPerk30.classList.remove('hidden')
            let tempPerk112 = document.querySelector('#s198');
            tempPerk112.classList.remove('hidden')
        }
        if (level == 30) {
            let tempPerk = document.querySelector('#perk-xxhealth');
            tempPerk.classList.remove('hidden')
            let tempPerk2 = document.querySelector('#a30');
            tempPerk2.classList.remove('hidden')
            let tempPerk29 = document.querySelector('#l132');
            tempPerk29.classList.remove('hidden')
        }
        if (level == 31) {
            let tempPerk = document.querySelector('#a31');
            tempPerk.classList.remove('hidden')
            let tempPerk29 = document.querySelector('#l133');
            tempPerk29.classList.remove('hidden')
        }
        if (level == 32) {
            let tempPerk = document.querySelector('#a32');
            tempPerk.classList.remove('hidden')
            let tempPerk29 = document.querySelector('#l134');
            tempPerk29.classList.remove('hidden')
        }
        if (level == 33) {
            let tempPerk = document.querySelector('#a33');
            tempPerk.classList.remove('hidden')
            let tempPerk29 = document.querySelector('#l135');
            tempPerk29.classList.remove('hidden')
        }
        if (level == 34) {
            let tempPerk = document.querySelector('#a34');
            tempPerk.classList.remove('hidden')
            let tempPerk29 = document.querySelector('#perk-terminator');
            tempPerk29.classList.remove('hidden')
            let tempPerk115 = document.querySelector('#m136');
            tempPerk115.classList.remove('hidden')
        }
        if (level == 35) {
            let tempPerk = document.querySelector('#a35');
            tempPerk.classList.remove('hidden')
            let tempPerk115 = document.querySelector('#m137');
            tempPerk115.classList.remove('hidden')
        }
        if (level == 36) {
            let tempPerk = document.querySelector('#a36');
            tempPerk.classList.remove('hidden')
            let tempPerk115 = document.querySelector('#m138');
            tempPerk115.classList.remove('hidden')
        }
        if (level == 37) {
            let tempPerk = document.querySelector('#a37');
            tempPerk.classList.remove('hidden')
            let tempPerk115 = document.querySelector('#m139');
            tempPerk115.classList.remove('hidden')
        }
        if (level == 38) {
            let tempPerk = document.querySelector('#a38');
            tempPerk.classList.remove('hidden')
            let tempPerk115 = document.querySelector('#m140');
            tempPerk115.classList.remove('hidden')
        }
        if (level == 39) {
            let tempPerk = document.querySelector('#a39');
            tempPerk.classList.remove('hidden')
            let tempPerk111 = document.querySelector('#perk-womd');
            tempPerk111.classList.remove('hidden')
            let tempPerk115 = document.querySelector('#m141');
            tempPerk115.classList.remove('hidden')
        }
        if (level == 40) {
            let tempPerk = document.querySelector('#perk-survivor');
            tempPerk.classList.remove('hidden')
            let tempPerk2 = document.querySelector('#a40');
            tempPerk2.classList.remove('hidden')
            let tempPerk112 = document.querySelector('#s199');
            tempPerk112.classList.remove('hidden')
            let tempPerk115 = document.querySelector('#m142');
            tempPerk115.classList.remove('hidden')
        }
        if (level == 41) {
            let tempPerk = document.querySelector('#perk-leftdoom');
            tempPerk.classList.remove('hidden')
            let tempPerk115 = document.querySelector('#m143');
            tempPerk115.classList.remove('hidden')
        }
        if (level == 42) {
            let tempPerk115 = document.querySelector('#m144');
            tempPerk115.classList.remove('hidden')
        }
        if (level == 43) {
            let tempPerk115 = document.querySelector('#m145');
            tempPerk115.classList.remove('hidden')
        }
        if (level == 44) {
            let tempPerk111 = document.querySelector('#perk-dominate');
            tempPerk111.classList.remove('hidden')
        }
        // if (level == 45) {
        //     let tempPerk = document.querySelector('#');
        //     tempPerk.classList.remove('hidden')
        // }
        // if (level == 46) {
        //     let tempPerk = document.querySelector('#');
        //     tempPerk.classList.remove('hidden')
        // }
        // if (level == 47) {
        //     let tempPerk = document.querySelector('#');
        //     tempPerk.classList.remove('hidden')
        // }
        // if (level == 48) {
        //     let tempPerk = document.querySelector('#');
        //     tempPerk.classList.remove('hidden')
        // }
        // if (level == 49) {
        //     let tempPerk = document.querySelector('#');
        //     tempPerk.classList.remove('hidden')
        // }
        // CODE DIVIDER

        // CODE DIVIDER
        level++;
        playerLevel.textContent = level;
        skill += 5;
        skillpoints.textContent = skill
        maxSkill = maxSkill + 2;
        console.log(maxSkill)
    } else if (level >= 49 && level < 50) {
        level++;
        playerLevel.textContent = level;
        skill += 10;
        skillpoints.textContent = skill
        perk += 3;
        perkpoints.textContent = perk
        hitpoint += 10;
        hitpointpoints.textContent = hitpoint;
        maxSkill = maxSkill + 2;
        console.log(maxSkill)
        if (level == 50) {
            let tempPerk = document.querySelector('#perk-xsurvivor');
            tempPerk.classList.remove('hidden')
            let tempPerk2 = document.querySelector('#a40');
            tempPerk2.classList.remove('hidden')
        }
    }
})
// CODE DIVIDER
meleeMinus.addEventListener('click', () => {
    if (melee > 0) {
        melee -= 1;
        meleepoints.textContent = melee;
        skill += 1
        skillpoints.textContent = skill
    }
})
meleePlus.addEventListener('click', () => {
    if (melee < 100 && melee < maxSkill && skill > 0) {
        melee += 1;
        meleepoints.textContent = melee;
        skill -= 1
        skillpoints.textContent = skill
    }
})
pistolMinus.addEventListener('click', () => {
    if (pistol > 0) {
        pistol -= 1;
        pistolpoints.textContent = pistol;
        skill += 1
        skillpoints.textContent = skill
    }
})
pistolPlus.addEventListener('click', () => {
    if (pistol < 100 && pistol < maxSkill && skill > 0) {
        pistol += 1;
        pistolpoints.textContent = pistol;
        skill -= 1
        skillpoints.textContent = skill
    }
})
shotgunMinus.addEventListener('click', () => {
    if (shotgun > 0) {
        shotgun -= 1;
        shotgunpoints.textContent = shotgun;
        skill += 1
        skillpoints.textContent = skill
    }
})
shotgunPlus.addEventListener('click', () => {
    if (shotgun < 100 && shotgun < maxSkill && skill > 0) {
        shotgun += 1;
        shotgunpoints.textContent = shotgun;
        skill -= 1
        skillpoints.textContent = skill
    }
})
submachineMinus.addEventListener('click', () => {
    if (submachine > 0) {
        submachine -= 1;
        submachinepoints.textContent = submachine;
        skill += 1
        skillpoints.textContent = skill
    }
})
submachinePlus.addEventListener('click', () => {
    if (submachine < 100 && submachine < maxSkill && skill > 0) {
        submachine += 1;
        submachinepoints.textContent = submachine;
        skill -= 1
        skillpoints.textContent = skill
    }
})
assaultMinus.addEventListener('click', () => {
    if (assault > 0) {
        assault -= 1;
        assaultpoints.textContent = assault;
        skill += 1
        skillpoints.textContent = skill
    }
})
assaultPlus.addEventListener('click', () => {
    if (assault < 100 && assault < maxSkill && skill > 0) {
        assault += 1;
        assaultpoints.textContent = assault;
        skill -= 1
        skillpoints.textContent = skill
    }
})
sniperMinus.addEventListener('click', () => {
    if (sniper > 0) {
        sniper -= 1;
        sniperpoints.textContent = sniper;
        skill += 1
        skillpoints.textContent = skill
    }
})
sniperPlus.addEventListener('click', () => {
    if (sniper < 100 && sniper < maxSkill && skill > 0) {
        sniper += 1;
        sniperpoints.textContent = sniper;
        skill -= 1
        skillpoints.textContent = skill
    }
})
rocketMinus.addEventListener('click', () => {
    if (rocket > 0) {
        rocket -= 1;
        rocketpoints.textContent = rocket;
        skill += 1
        skillpoints.textContent = skill
    }
})
rocketPlus.addEventListener('click', () => {
    if (rocket < 100 && rocket < maxSkill && skill > 0) {
        rocket += 1;
        rocketpoints.textContent = rocket;
        skill -= 1
        skillpoints.textContent = skill
    }
})
heavyMinus.addEventListener('click', () => {
    if (heavy > 0) {
        heavy -= 1;
        heavypoints.textContent = heavy;
        skill += 1
        skillpoints.textContent = skill
    }
})
heavyPlus.addEventListener('click', () => {
    if (heavy < 100 && heavy < maxSkill && skill > 0) {
        heavy += 1;
        heavypoints.textContent = heavy;
        skill -= 1
        skillpoints.textContent = skill
    }
})
grenadeMinus.addEventListener('click', () => {
    if (grenade > 0) {
        grenade -= 1;
        grenadepoints.textContent = grenade;
        skill += 1
        skillpoints.textContent = skill
    }
})
grenadePlus.addEventListener('click', () => {
    if (grenade < 100 && grenade < maxSkill && skill > 0) {
        grenade += 1;
        grenadepoints.textContent = grenade;
        skill -= 1
        skillpoints.textContent = skill
    }
})
trapMinus.addEventListener('click', () => {
    if (trap > 0) {
        trap -= 1;
        trappoints.textContent = trap;
        skill += 1
        skillpoints.textContent = skill
    }
})
trapPlus.addEventListener('click', () => {
    if (trap < 100 && trap < maxSkill && skill > 0) {
        trap += 1;
        trappoints.textContent = trap;
        skill -= 1
        skillpoints.textContent = skill
    }
})
medicMinus.addEventListener('click', () => {
    if (medic > 0) {
        medic -= 1;
        medicpoints.textContent = medic;
        skill += 1
        skillpoints.textContent = skill
    }
})
medicPlus.addEventListener('click', () => {
    if (medic < 100 && medic < maxSkill && skill > 0) {
        medic += 1;
        medicpoints.textContent = medic;
        skill -= 1
        skillpoints.textContent = skill
    }
})
// CODE DIVIDER

selectPerk.forEach(e => {
    e.addEventListener('click', checkPerk)
})

// EACH PERK DIFFERENCE
function checkPerk() {
    if (perk > 0) {
        if (this.id > 'a0' && this.id <= 'a9') {
            hitpoint += 7;
            hitpointpoints.textContent = hitpoint
        }
        if (this.id > 'b0' && this.id <= 'b9') {
            regen += 1;
            hpregenpoints.textContent = regen;
        }
        if (this.id > 'c0' && this.id <= 'c9') {
            melee += 2;
            meleepoints.textContent = melee;
        }
        if (this.id > 'd0' && this.id <= 'd9') {
            pistol += 2;
            pistolpoints.textContent = pistol;
        }
        if (this.id > 'e0' && this.id <= 'e9') {
            shotgun += 2;
            shotgunpoints.textContent = shotgun;
        }
        if (this.id > 'f0' && this.id <= 'f9') {
            submachine += 2;
            submachinepoints.textContent = submachine;
        }
        if (this.id > 'g0' && this.id <= 'g9') {
            assault += 2;
            assaultpoints.textContent = assault;
        }
        if (this.id > 'h0' && this.id <= 'h9') {
            sniper += 2;
            sniperpoints.textContent = sniper;
        }
        if (this.id > 'i0' && this.id < 'j') {
            grenade += 2;
            grenadepoints.textContent = grenade;
        }
        if (this.id > 'j0' && this.id <= 'j9') {
            trap += 2;
            trappoints.textContent = trap;
        }
        if (this.id > 'k0' && this.id <= 'k9') {
            medic += 2;
            medicpoints.textContent = medic;
        }
        if (this.id > 'l0' && this.id <= 'l9') {
            heavy += 2;
            heavypoints.textContent = heavy;
        }
        if (this.id > 'm0' && this.id <= 'm9') {
            rocket += 2;
            rocketpoints.textContent = rocket;
        }
        if (this.id > 'n0' && this.id <= 'n9') {
            weight += 10;
            weightpoints.textContent = weight;
        }
        if (this.id > 'o0' && this.id <= 'o9') {
            critcalc += 1;
            critcalchance.textContent = critcalc;
        }
        if (this.id > 'q0' && this.id <= 'q9') {
            critcalp += 5;
            critcalpower.textContent = critcalp;
        }
        if (this.id > 's0' && this.id <= 's9') {
            splash += 10;
            splashpoints.textContent = splash;
        }
        if (this.id > 't0' && this.id <= 't9') {
            stun += 10;
            stunpoints.textContent = stun;
        }
        if (this.id > 'u0' && this.id <= 'u9') {
            poison += 10;
            poisonpoints.textContent = poison;
        }
        if (this.id > 'v0' && this.id <= 'v9') {
            blind += 10;
            blindpoints.textContent = blind;
        }
        if (this.id > 'w0' && this.id <= 'w9') {
            damage += 1;
            damagepoints.textContent = damage;
        }
        if (this.id > 'x0' && this.id <= 'x9') {
            criticalr += 10;
            criticalresist.textContent = criticalr;
        }
        // FOR SPECIAL PERKS
        if (this.id == 'perk-health') {
            hitpoint += 20;
            hitpointpoints.textContent = hitpoint;
            regen = + 2;
            hpregenpoints.textContent = regen;
        }
        if (this.id == 'perk-xhealth') {
            hitpoint += 30;
            hitpointpoints.textContent = hitpoint;
            regen = + 3;
            hpregenpoints.textContent = regen;
        }
        if (this.id == 'perk-xxhealth') {
            hitpoint += 40;
            hitpointpoints.textContent = hitpoint;
            regen = + 4;
            hpregenpoints.textContent = regen;
        }
        if (this.id == 'perk-survivor') {
            hitpoint += 50;
            hitpointpoints.textContent = hitpoint;
            regen = + 5;
            hpregenpoints.textContent = regen;
        }
        if (this.id == 'perk-xsurvivor') {
            hitpoint += 100;
            hitpointpoints.textContent = hitpoint;
            regen = + 10;
            hpregenpoints.textContent = regen;
        }
        if (this.id == 'perk-endu') {
            ap -= 1;
            appoints.textContent = ap;
            mp += 3;
            mppoints.textContent = mp;
        }
        if (this.id == 'perk-gunrun') {
            mp += 1;
            mppoints.textContent = mp;
        }
        if (this.id == 'perk-org') {
            ap += 1;
            appoints.textContent = ap;
            weight -= 10;
            weightpoints.textContent = weight;
        }
        if (this.id == 'perk-xaction') {
            ap += 1;
            appoints.textContent = ap;
            weight -= 20;
            weightpoints.textContent = weight;
        }
        if (this.id == 'perk-extraaction') {
            ap += 1;
            appoints.textContent = ap;
            weight -= 20;
            weightpoints.textContent = weight;
        }
        if (this.id == 'perk-dieter') {
            mp += 1;
            mppoints.textContent = mp;
            hitpoint -= 20;
            hitpointpoints.textContent = hitpoint;
        }
        if (this.id == 'perk-keeneye') {
            ap -= 2;
            appoints.textContent = ap;
            sight += 2;
            sightpoints.textContent = sight;
        }
        if (this.id == 'perk-eagleeye') {
            sight += 1;
            sightpoints.textContent = sight;
        }
        if (this.id == 'perk-dex') {
            weight -= 10;
            weightpoints.textContent = weight;
        }
        if (this.id == 'perk-treatment') {
            hitpoint += 20;
            hitpointpoints.textContent = hitpoint;
            regen += 2;
            hpregenpoints.textContent = regen;
        }
        if (this.id == 'perk-womd') {
            weight -= 20;
            weightpoints.textContent = weight;
        }
        if (this.id == 'perk-dominate') {
            weight -= 20;
            weightpoints.textContent = weight;
        }
        if (this.id == 'perk-packer') {
            inventory += 2;
            inventorypoints.textContent = inventory;
        }
        if (this.id == 'perk-mule') {
            weight += 20;
            weightpoints.textContent = weight;
            inventory += 2;
            inventorypoints.textContent = inventory;
        }
        if (this.id == 'perk-leftdoom') {
            critcalc += 2;
            critcalchance.textContent = critcalc;
            critcalp += 20;
            critcalpower.textContent = critcalp;
        }
        if (this.id == 'perk-rightdoom') {
            critcalc += 2;
            critcalchance.textContent = critcalc;
            critcalp += 20;
            critcalpower.textContent = critcalp;
        }
        if (this.id == 'perk-turtle') {
            damage += 3;
            damagepoints.textContent = damage;
        }
        if (this.id == 'perk-shelter') {
            damage += 3;
            damagepoints.textContent = damage;
        }
        // DIVIDER
        selectContainer.appendChild(this);
        perk -= 1;
        perkpoints.textContent = perk;
    }
}
// July 18, 2023
