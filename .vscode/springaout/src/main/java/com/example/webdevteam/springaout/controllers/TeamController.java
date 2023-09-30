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

import com.example.webdevteam.springaout.models.TeamModel;
import com.example.webdevteam.springaout.services.TeamService;

@RestController
@RequestMapping("/api/teams")
@CrossOrigin("*")
public class TeamController {

    @Autowired
    public TeamService teamService;

    @GetMapping
    public List<TeamModel> getAll() {
        return teamService.getAllTeams();
    }

    @GetMapping("/{id}")
    public TeamModel getById(@PathVariable Long id) {
        return teamService.getTeamById(id);
    }

    @PostMapping
    public TeamModel addTeam(@RequestBody TeamModel team) {
        return teamService.addTeam(team);
    }

    @PutMapping
    public TeamModel updateTeam(@RequestBody TeamModel team) {
        return teamService.updateTeam(team);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        teamService.deleteTeamById(id);
    }
}
