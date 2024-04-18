package duncan.rest.webservices.maestroapi;

import duncan.rest.webservices.maestroapi.HostService;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController // Ajoutez cette annotation pour indiquer à Spring que c'est un contrôleur REST
public class HostController {
    private HostService hostService;

    public HostController(HostService hostService) {
        this.hostService = hostService;
    }

    @GetMapping("/player-list/{hostCode}") // Utilisez @GetMapping pour les requêtes GET
    public List<Player> listPlayersFromTeam(@PathVariable String hostCode){
        return hostService.listPlayersByGroupCode(hostCode);
    }

    @GetMapping("/rooms")
    public List<String> listAllRoomsName(){
        return hostService.listAllRoomsName();
    }
     //FIXME: disponible seulement à des fin de tests
    @GetMapping("/rooms-list")
    public List<Host> listAllRooms(){
        return hostService.getAllRooms();
    }

    @RequestMapping(value="/create-room", method = RequestMethod.POST)
    public void createNewRoom(@RequestBody Host host){
        hostService.createNewRoom(host);
    }

    @PostMapping("/room/{hostCode}")
    public void joinRoom(@PathVariable String hostCode, @RequestBody Player player){
        hostService.addPlayerToRoom(hostCode, player);
    }

}
