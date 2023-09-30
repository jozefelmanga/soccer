package com.example.webdevteam.springaout.services;

import java.util.List;

import com.example.webdevteam.springaout.models.MatchModel;

public interface MatchService {
	
	public List<MatchModel> getAllMatches();
	public MatchModel getMatchById(Long id);
	public void deleteMatchById(Long id);
	public MatchModel addMatch(MatchModel m);
	public MatchModel updateMatch(MatchModel m);

}
