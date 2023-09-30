package com.example.webdevteam.springaout.services;

import java.util.List;
import com.example.webdevteam.springaout.models.PlayerModel;

public interface PlayerService {
    public List<PlayerModel> getAllPlayers();
    public PlayerModel getPlayerById(Long id);
    public void deletePlayerById(Long id);
    public PlayerModel addPlayer(PlayerModel player);
    public PlayerModel updatePlayer(PlayerModel player);
}
