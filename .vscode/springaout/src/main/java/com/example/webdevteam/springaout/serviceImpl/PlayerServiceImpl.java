package com.example.webdevteam.springaout.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.webdevteam.springaout.models.PlayerModel;
import com.example.webdevteam.springaout.repositories.PlayerRepository;
import com.example.webdevteam.springaout.services.PlayerService;

@Service
public class PlayerServiceImpl implements PlayerService {

    @Autowired
    private PlayerRepository playerRepository;
    

    @Override
    public List<PlayerModel> getAllPlayers() {
        return playerRepository.findAll();
    }

    @Override
    public PlayerModel getPlayerById(Long id) {
        Optional<PlayerModel> player = playerRepository.findById(id);
        return player.isPresent() ? player.get() : null;
    }

    @Override
    public void deletePlayerById(Long id) {
        playerRepository.deleteById(id);
    }

    @Override
    public PlayerModel addPlayer(PlayerModel player) {
        return playerRepository.save(player);
    }

    @Override
    public PlayerModel updatePlayer(PlayerModel player) {
        return playerRepository.save(player);
    }
}
