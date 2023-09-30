package com.example.webdevteam.springaout.serviceImpl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.webdevteam.springaout.models.MatchModel;
import com.example.webdevteam.springaout.repositories.MatchRepository;
import com.example.webdevteam.springaout.services.MatchService;


@Service
public class MatchServiceImpl implements MatchService{
	
	@Autowired
	private MatchRepository mRepo;

	@Override
	public List<MatchModel> getAllMatches() {
		return mRepo.findAll();
	}

	@Override
	public MatchModel getMatchById(Long id) {
	Optional<MatchModel> m= mRepo.findById(id);
	return m.isPresent()?m.get():null;
	}

	@Override
	public void deleteMatchById(Long id) {
		mRepo.deleteById(id);
	}

	@Override
	public MatchModel addMatch(MatchModel m) {
		return mRepo.save(m);
	}

	@Override
	public MatchModel updateMatch(MatchModel m) {
		return mRepo.save(m);
	}

}
