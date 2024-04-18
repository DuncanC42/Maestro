package duncan.rest.webservices.maestroapi;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.function.Predicate;

@Service
public class HostService {
    private static Player duncan = new Player("Duncan");
    private static Player diane = new Player("Diane");
    private static Player tim = new Player("Tim");
    private static Player alox = new Player("Alox");
    private static Player ryan = new Player("Ryan");
    private static Player etoiles = new Player("Etoiles");
    private static Player horty = new Player("Horty");
    private static Player jdg = new Player("jdg");
    private static Player antoineD = new Player("Antoine Daniel");
    private static Player mynthos = new Player("Mynthos");
    private static Player florence = new Player("Florence");

    private static ArrayList<Player> teamLundi = new ArrayList<>(Arrays.asList(etoiles, horty, jdg, antoineD, mynthos, florence));
    private static ArrayList<Player> teamIut = new ArrayList<>(Arrays.asList(duncan, diane, tim, alox, ryan));


    private static List<Host> hostList = new ArrayList<>();
    static {
        hostList.add(new Host("Lundi", teamLundi, "Lundi", true));
        hostList.add(new Host("IUT", teamIut, "IUT", true));
    }

    public List<Player> listPlayersByGroupCode(String roomCode){
        for(Host host : hostList){
            if(host.getRoomCode().equalsIgnoreCase(roomCode)){
                return host.getPlayerList();
            }
        }
        return null;
    }

    public List<String> listAllRoomsName(){
        List<String> listOfRoomsName = new ArrayList<>();
        for(Host host : hostList){
            listOfRoomsName.add(host.getNomDeRoom());
        }
        return listOfRoomsName;
    }

    public List<Host> getAllRooms(){
        return hostList;
    }

    public void createNewRoom(Host host){
        hostList.add(host);
    }

    public void addPlayerToRoom(String hostCode, Player player){
        //Predicate<? super Host> predicate = host -> host.getRoomCode().equalsIgnoreCase(hostCode);
        for(Host host : hostList){
            if(host.getRoomCode().equalsIgnoreCase(hostCode)){
                List<Player> updatedPlayerList = listPlayersByGroupCode(hostCode);
                updatedPlayerList.add(player);
                host.setPlayerList(updatedPlayerList);
            }
        }
    }
}
