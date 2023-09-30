package com.example.webdevteam.springaout.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.webdevteam.springaout.models.PlayerModel;
import com.example.webdevteam.springaout.services.PlayerService;

@RestController
@RequestMapping("/api/players")
@CrossOrigin("*")
public class PlayerController {

    @Autowired
    public PlayerService playerService;

    @GetMapping
    public List<PlayerModel> getAll() {
        return playerService.getAllPlayers();
    }

    @GetMapping("/{id}")
    public PlayerModel getById(@PathVariable Long id) {
        return playerService.getPlayerById(id);
    }

    @PostMapping
    public PlayerModel addPlayer(@RequestBody PlayerModel player) {
        return playerService.addPlayer(player);
    }


    @PutMapping
    public PlayerModel updatePlayer(@RequestBody PlayerModel player) {
        return playerService.updatePlayer(player);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        playerService.deletePlayerById(id);
    }
}
