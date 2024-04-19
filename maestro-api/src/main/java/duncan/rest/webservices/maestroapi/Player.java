package duncan.rest.webservices.maestroapi;

public class Player {
    long id;
    String pseudo;

    public Player(long id, String pseudo) {
        this.id = id;
        this.pseudo = pseudo;
    }

    public Player(){}

    public String getPseudo() {
        return pseudo;
    }

    public void setPseudo(String pseudo) {
        this.pseudo = pseudo;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Player{" +
                "id=" + id +
                ", pseudo='" + pseudo + '\'' +
                '}';
    }
}
