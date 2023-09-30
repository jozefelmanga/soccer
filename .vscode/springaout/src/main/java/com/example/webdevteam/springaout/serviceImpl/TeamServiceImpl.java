package com.example.webdevteam.springaout.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.webdevteam.springaout.models.TeamModel;
import com.example.webdevteam.springaout.repositories.TeamRepository;
import com.example.webdevteam.springaout.services.TeamService;

@Service
public class TeamServiceImpl implements TeamService {

    @Autowired
    private TeamRepository teamRepository;

    @Override
    public List<TeamModel> getAllTeams() {
        return teamRepository.findAll();
    }

    @Override
    public TeamModel getTeamById(Long id) {
        Optional<TeamModel> team = teamRepository.findById(id);
        return team.isPresent() ? team.get() : null;
    }

    @Override
    public void deleteTeamById(Long id) {
        teamRepository.deleteById(id);
    }

    @Override
    public TeamModel addTeam(TeamModel team) {
        return teamRepository.save(team);
    }

    @Override
    public TeamModel updateTeam(TeamModel team) {
        return teamRepository.save(team);
    }
}
