import {apiClient} from "./ApiClient";

export const createNewRoomApi = (roomCode, roomName, visibility) => {
    const constructionBody = {
        //PARAMETRES
        roomCode: roomCode,
        nomDeRoom: roomName,
        playerList: [], //la liste des joueurs est vide à la création de la room
        visibility: visibility
    };
    return apiClient.post('http://localhost:8080/create-room', constructionBody)
}

export const getAllRoomsApi = () => apiClient.get("http://localhost:8080/rooms")

export const getPlayerOfRoomApi = (roomCode) => apiClient.get(`http://localhost:8080/player-list/${roomCode}`)

export const joinRoomApi = (pseudo, roomCode) => {
    const constructionBody = {
        pseudo: pseudo
    };
    return apiClient.post(`http://localhost:8080/room/${roomCode}`, constructionBody)
}