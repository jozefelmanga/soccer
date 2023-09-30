package com.example.webdevteam.springaout.services;

import java.util.List;
import com.example.webdevteam.springaout.models.TeamModel;

public interface TeamService {
    public List<TeamModel> getAllTeams();
    public TeamModel getTeamById(Long id);
    public void deleteTeamById(Long id);
    public TeamModel addTeam(TeamModel team);
    public TeamModel updateTeam(TeamModel team);
}
