package duncan.rest.webservices.maestroapi;

public class Player {
    String pseudo;

    public Player(String pseudo) {
        this.pseudo = pseudo;
    }

    public Player(){}

    public String getPseudo() {
        return pseudo;
    }

    public void setPseudo(String pseudo) {
        this.pseudo = pseudo;
    }

    @Override
    public String toString() {
        return "Player{" +
                "pseudo='" + pseudo + '\'' +
                '}';
    }
}
