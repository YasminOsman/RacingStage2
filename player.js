class Player {
    constructor () {
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    
    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", function(data){
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        })
    }

    update(name) {
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }

    static getPlayerInfo(){
        var infoRef = database.ref("players");
        infoRef.on("value", (data)=>{
            allPlayers = data.val();
        })
    }
}