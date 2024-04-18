package duncan.rest.webservices.maestroapi;

import java.util.List;

public class Host {
    private String roomCode;
    private String nomDeRoom;
    private List<Player> playerList;
    private boolean visibility;

    public Host(String nomDeRoom, List<Player> playerList, String roomCode, boolean visibility) {
        this.nomDeRoom = nomDeRoom;
        this.playerList = playerList;
        this.roomCode = roomCode;
        this.visibility = visibility;
    }

    public String getNomDeRoom() {
        return nomDeRoom;
    }

    public void setNomDeRoom(String nomDeRoom) {
        this.nomDeRoom = nomDeRoom;
    }

    public List<Player> getPlayerList() {
        return playerList;
    }

    public void setPlayerList(List<Player> playerList) {
        this.playerList = playerList;
    }

    public String getRoomCode() {
        return roomCode;
    }

    public void setRoomCode(String roomCode) {
        this.roomCode = roomCode;
    }

    public boolean isVisibility() {
        return visibility;
    }

    public void setVisibility(boolean visibility) {
        this.visibility = visibility;
    }

    @Override
    public String toString() {
        return "Host{" +
                "nomDeRoom='" + nomDeRoom + '\'' +
                ", roomCode='" + roomCode + '\'' +
                ", playerList=" + playerList +
                ", visibility=" + visibility +
                '}';
    }
}
